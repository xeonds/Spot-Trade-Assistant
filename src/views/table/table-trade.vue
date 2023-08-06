<template>
  <formPopmenu
    :menu-list="menuList"
    :position="position"
    v-show="isVisible.clickMenu"
    @menu="handleCtxMenu"
  />
  <!-- 右键弹出框 -->
  <el-dialog
    v-model="isVisible.dialogDelete"
    title="删除确认"
    width="30%"
    align-center
  >
    <span>是否确定要删除本条记录</span>
    <template #footer>
      <span class="dialog-footer">
        <el-button type="primary" plain @click="isVisible.dialogDelete = false">
          取消
        </el-button>
        <el-button type="primary" @click="deletebyid"> 确定 </el-button>
      </span>
    </template>
  </el-dialog>
  <!-- 修改框 -->
  <form-dialog
    width="40%"
    v-model="isVisible.dialogUpdate"
    title="修改"
    align-center
    :col="[{ label: '修改值', prop: 'value', type: 'string' }]"
    @submit="handleUpdate"
  />
  <!-- 新增 -->
  <form-dialog
    width="80%"
    v-model="isVisible.purchase"
    :title="'采购'"
    :col="Gouxiaojilu"
    @close="isVisible.purchase = false"
    @submit="(data) => purchase(data)"
  />
  <!-- 现货结算价 -->
  <el-dialog v-model="isVisible.form1" title="现货结算价">
    <template #footer>
      <span class="dialog-footer">
        <el-button
          @click="isVisible.form1 = false"
          class="cancel"
          style="width: 6vw"
        >
          取消
        </el-button>
        <el-button @click="console.log" class="comfirm" style="width: 6vw">
          确定
        </el-button>
      </span>
    </template>
  </el-dialog>
  <el-dialog v-model="isVisible.form2" title="汇率">
    <el-form
      label-position="top"
      label-width="100px"
      :model="Huilv"
      style="max-width: 460px"
    >
      <el-form-item label="汇率参考值">
        <el-input v-model="Huilv.refvalue" />
      </el-form-item>
      <el-form-item label="本币结算价">
        <el-input v-model="Huilv.finalvalue" />
      </el-form-item>
    </el-form>

    <template #footer>
      <span class="dialog-footer">
        <el-button
          @click="isVisible.form2 = false"
          class="cancel"
          style="width: 6vw"
        >
          取消
        </el-button>
        <el-button @click="console.log" class="comfirm" style="width: 6vw">
          确定
        </el-button>
      </span>
    </template>
  </el-dialog>
  <div v-if="route.params.id === '1'">
    <el-row>
      <el-col :span="24">
        <modifyTable
          :data="data['1-1']"
          :command="['刷新', '采购', '发送成交确认']"
          name="购销订单"
          id="trade1"
          :col="tableCol.TradeInfo"
          :height="30"
          :selectable="true"
          :load="handleRefresh('1-1')"
          @handle="(a:number)=>handle('1-1', a)"
          @menu="menu"
          @select="select"
          v-laoding="true"
        >
          <template #top>
            <tableFind
              :form-data="data['1-1']"
              @submit="(res) => console.log(res)"
            />
          </template>
        </modifyTable>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <modifyTable
          :data="data['1-2']"
          :command="['刷新', '销售', '现货结算价', '汇率', '导出']"
          name="现货持仓"
          id="trade2"
          :col="tableCol.PositionInfo"
          :hasfold="true"
          :selectable="true"
          :height="30"
          :load="handleRefresh('1-2')"
          @handle="handle"
          @select="select"
          @menu="menu"
          extend="操作"
        >
          <template #top>
            <tableFind />
          </template>
          <template #extend3="row">
            <AFTableColumn label="订单浮盈" header-align="center">
              <AFTableColumn label="成本价"></AFTableColumn>
              <AFTableColumn label="结算价"></AFTableColumn>
              <AFTableColumn abel="浮盈"></AFTableColumn>
              <AFTableColumn label="币种"></AFTableColumn>
            </AFTableColumn>
            <AFTableColumn label="进出口参考浮盈" header-align="center">
              <AFTableColumn label="参考汇率"></AFTableColumn>
              <AFTableColumn label="进出口成本"></AFTableColumn>
              <AFTableColumn label="结算价"></AFTableColumn>
              <AFTableColumn label="浮盈"></AFTableColumn>
              <AFTableColumn label="币种"></AFTableColumn>
            </AFTableColumn>
          </template>
        </modifyTable>
      </el-col>
    </el-row>
  </div>
  <div v-if="route.params.id === '2'">
    <el-row>
      <el-col :span="24">
        <modifyTable
          :data="data['2-1']"
          :command="['刷新', '生成合同']"
          name="购销订单"
          id="trade1"
          :col="tableCol.Gouxiaojilu"
          @handle="handle"
          @menu="menu"
          :selectable="true"
        >
          <template #top>
            <tableFind></tableFind>
          </template>
        </modifyTable>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <modifyTable
          :data="data['2-2']"
          :command="['刷新', '印花税付款', '合同归档']"
          name="购销合同"
          id="trade2"
          :col="tableCol.Gouxiaohetong"
          @handle="handle1"
          @menu="menu"
          :selectable="true"
        >
          <template #top>
            <tableFind></tableFind>
          </template>
          <template #extend3>
            <el-table-column label="合同扫描件" :width="120" fixed="right">
              <template #default="scope">
                <el-button type="primary" link @click="console.log(scope.row)"
                  >上传</el-button
                >
                <el-button type="primary" link @click="console.log(scope.row)"
                  >查看</el-button
                >
              </template>
            </el-table-column>
          </template>
        </modifyTable>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <modifyTable
          :data="data['2-3']"
          :command="['刷新']"
          name="印花税付款申请"
          id="trade3"
          :col="tableCol.Yinhuashui"
          @handle="handle2"
          @menu="menu"
        >
          <template #top>
            <tableFind></tableFind>
          </template>
          <template #extend3>
            <el-table-column label="申请单扫描件" :width="120" fixed="right">
              <template #default="scope">
                <el-button type="primary" link @click="console.log(scope.row)"
                  >上传</el-button
                >
                <el-button type="primary" link @click="console.log(scope.row)"
                  >查看</el-button
                >
              </template>
            </el-table-column>
          </template>
        </modifyTable>
      </el-col>
    </el-row>
  </div>
  <div v-if="route.params.id === '3'">
    <el-row>
      <el-col :span="24">
        <modifyTable
          :data="data['3-1']"
          :command="['刷新', '付款申请']"
          name="采购订单"
          id="trade1"
          :col="tableCol.Caigoudingdan"
          @handle="handle"
          @menu="menu"
        >
          <template #top>
            <tableFind
              :search_item="[
                '交易日期',
                '付款申请状态',
                '合同签订状态',
                '账套',
                '业务部门',
                '贸易商',
                '贸易商部门',
                '贸易类型',
                '订单模式',
                '交货方式',
                '合同号',
                '订单号'
              ]"
            ></tableFind>
          </template>
          <template #extend3>
            <el-table-column label="扫描件" :width="100" fixed="right">
              <template #default="scope">
                <el-button type="primary" link @click="console.log(scope.row)"
                  >查看</el-button
                >
              </template>
            </el-table-column>
          </template>
        </modifyTable>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <modifyTable
          :data="data['3-2']"
          :command="['刷新']"
          name="采购付款申请记录"
          id="trade2"
          :col="tableCol.Caigoufukuanshenqingjilu"
          @handle="handle"
          @menu="menu"
        >
          <template #top>
            <tableFind
              :search_item="[
                '付款申请日期',
                '付款状态',
                '账套',
                '业务部门',
                '付款状态',
                '贸易商',
                '付款申请单号'
              ]"
            ></tableFind>
          </template>
          <template #extend3>
            <el-table-column label="申请单扫描件" :width="120" fixed="right">
              <template #default="scope">
                <el-button type="primary" link @click="console.log(scope.row)"
                  >上传</el-button
                >
                <el-button type="primary" link @click="console.log(scope.row)"
                  >查看</el-button
                >
              </template>
            </el-table-column>
          </template>
        </modifyTable>
      </el-col>
    </el-row>
  </div>
  <div v-if="route.params.id === '4'">
    <el-row>
      <el-col :span="24">
        <modifyTable
          :data="data['4-1']"
          :command="['刷新']"
          name="销售订单"
          id="trade1"
          :col="tableCol.Xiaoshoudingdan"
          @handle="handle"
          @menu="menu"
        >
          <template #top>
            <tableFind></tableFind>
          </template>
          <template #extend3>
            <el-table-column label="合同扫描件" :width="100" fixed="right">
              <template #default="scope">
                <el-button type="primary" link @click="console.log(scope.row)"
                  >查看</el-button
                >
              </template>
            </el-table-column>
          </template>
        </modifyTable>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <modifyTable
          :data="data['4-2']"
          :command="['刷新', '打印收款确认单']"
          name="收款记录"
          id="trade2"
          :col="tableCol.Shoukuanjilu"
          @handle="handle"
          @menu="menu"
        >
          <template #top>
            <tableFind></tableFind>
            <el-button type="primary" plain>匹配</el-button>
          </template>
          <template #extend3>
            <el-table-column label="回单扫描件" :width="100" fixed="right">
              <template #default="scope">
                <el-button type="primary" link @click="console.log(scope.row)"
                  >查看</el-button
                >
              </template>
            </el-table-column>
            <el-table-column label="确认单扫描件" :width="120" fixed="right">
              <template #default="scope">
                <el-button type="primary" link @click="console.log(scope.row)"
                  >上传</el-button
                >
                <el-button type="primary" link @click="console.log(scope.row)"
                  >查看</el-button
                >
              </template>
            </el-table-column>
          </template>
        </modifyTable>
      </el-col>
    </el-row>
  </div>
  <div v-if="route.params.id === '5'">
    <el-row>
      <el-col :span="24">
        <modifyTable
          :data="data['5-1']"
          :command="['刷新', '余款对账']"
          name="购销订单"
          id="trade3"
          :col="tableCol.Gouxiaodingdan"
          @handle="handle"
          @menu="menu"
        >
          <template #top>
            <tableFind></tableFind>
          </template>
        </modifyTable>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <modifyTable
          :data="data['5-2']"
          :command="['刷新', '打印对账单']"
          name="余款对账记录"
          id="trade4"
          :col="tableCol.Yukuanduizhang"
          @handle="handle"
          @menu="menu"
        >
          <template #top>
            <tableFind></tableFind>
          </template>
          <template #extend3>
            <el-table-column label="对账单扫描件" :width="120" fixed="right">
              <template #default="scope">
                <el-button type="primary" link @click="console.log(scope.row)"
                  >上传</el-button
                >
                <el-button type="primary" link @click="console.log(scope.row)"
                  >查看</el-button
                >
              </template>
            </el-table-column>
          </template>
        </modifyTable>
      </el-col>
    </el-row>
  </div>
  <div v-if="route.params.id === '6'">
    <el-row>
      <el-col :span="24">
        <modifyTable
          :data="data['6-1']"
          :command="['刷新', '余款付款申请', '余款收款匹配']"
          name="余款对账记录"
          id="trade3"
          :col="tableCol.Yukuanduizhang"
          @handle="handle"
          @menu="menu"
        >
          <template #top>
            <tableFind></tableFind>
          </template>
          <template #extend3>
            <el-table-column label="对账单扫描件" :width="120" fixed="right">
              <template #default="scope">
                <el-button type="primary" link @click="console.log(scope.row)"
                  >查看</el-button
                >
              </template>
            </el-table-column>
          </template>
        </modifyTable>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <modifyTable
          :data="data['6-2']"
          :command="['刷新', '打印付款申请单']"
          name="余款付款申请记录"
          id="trade4"
          :col="tableCol.Yukuanfukuan"
          @handle="handle"
          @menu="menu"
        >
          <template #top>
            <tableFind></tableFind>
          </template>
          <template #extend3>
            <el-table-column label="申请单扫描件" :width="120" fixed="right">
              <template #default="scope">
                <el-button type="primary" link @click="console.log(scope.row)"
                  >上传</el-button
                >
                <el-button type="primary" link @click="console.log(scope.row)"
                  >查看</el-button
                >
              </template>
            </el-table-column>
          </template>
        </modifyTable>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <modifyTable
          :data="data['6-3']"
          :command="['刷新', '打印收款申请单']"
          name="收款记录"
          id="trade4"
          :col="tableCol.Shoukuanjilu"
          @handle="handle"
          @menu="menu"
        >
          <template #top>
            <tableFind></tableFind>
          </template>
          <template #extend3>
            <el-table-column label="回单扫描件" :width="100" fixed="right">
              <template #default="scope">
                <el-button type="primary" link @click="console.log(scope.row)"
                  >查看</el-button
                >
              </template>
            </el-table-column>
            <el-table-column label="确认单扫描件" :width="120" fixed="right">
              <template #default="scope">
                <el-button type="primary" link @click="console.log(scope.row)"
                  >上传</el-button
                >
                <el-button type="primary" link @click="console.log(scope.row)"
                  >查看</el-button
                >
              </template>
            </el-table-column>
          </template>
        </modifyTable>
      </el-col>
    </el-row>
  </div>
  <div v-if="route.params.id === '7'">
    <el-row>
      <el-col :span="24">
        <modifyTable
          :data="data['7-1']"
          :command="['刷新', '发票确认']"
          name="购销订单"
          id="trade3"
          :col="tableCol.Gouxiaodingdan"
          @handle="handle"
          @menu="menu"
        >
          <template #top>
            <tableFind></tableFind>
          </template>
          <template #extend3>
            <el-table-column label="扫描件" :width="120" fixed="right">
              <template #default="scope">
                <el-button type="primary" link @click="console.log(scope.row)"
                  >上传</el-button
                >
                <el-button type="primary" link @click="console.log(scope.row)"
                  >查看</el-button
                >
              </template>
            </el-table-column>
          </template>
        </modifyTable>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts" setup>
// **********
// components
// **********
import AFTableColumn from '@/components/AFTableColumn.vue'
import modifyTable from '@/components/modify-table2.vue'
import tableFind from '@/components/table-find.vue'
import formDialog from '../../components/form-dialog.vue'
import formPopmenu from '../../components/form-popmenu.vue'
import * as tableCol from '@/assets/table_info/table-title'
import * as tradeAPI from '@/http/api/trade'
import { ElMessage } from 'element-plus'
import { useRoute } from 'vue-router'

// *********
// variables
// *********
// table data
let data: any = reactive({
  '1-1': [],
  '1-2': [],
  '2-1': [],
  '2-2': [],
  '2-3': [],
  '3-1': [],
  '3-2': [],
  '4-1': [],
  '4-2': [],
  '5-1': [],
  '5-2': [],
  '6-1': [],
  '6-2': [],
  '7-1': []
})
let updateform = reactive({
  value: ''
})
let select_list: any = ref([])
let select_list1: any = ref([])
let isVisible = ref({
  clickMenu: false,
  dialogUpdate: false,
  dialogDelete: false,
  purchase: false,
  form1: false,
  form2: false
})
let Huilv = reactive({
  refvalue: '',
  finalvalue: ''
})
// dialog form items
let Gouxiaojilu = [
  {
    prop: 'date',
    label: '交易日期',
    type: 'date'
  },
  {
    label: '账套',
    type: 'single-select',
    prop: 'ledgerId',
    options: [
      { value: 111, label: '111' },
      { value: 222, label: '222' }
    ]
  },
  {
    label: '业务部门',
    type: 'single-select-cascader',
    prop: 'ourDeptId',
    options: [
      { value: 111, label: '111' },
      { value: 222, label: '222' }
    ]
  },
  {
    label: '贸易商',
    type: 'single-select',
    prop: 'companyId',
    options: [
      { value: 111, label: '111' },
      { value: 222, label: '222' }
    ]
  },
  {
    label: '贸易商部门',
    type: 'single-select',
    prop: 'companyDeptId',
    options: [
      { value: 111, label: '111' },
      { value: 222, label: '222' }
    ]
  },
  {
    prop: 'ps',
    label: '购/销',
    type: 'select',
    options: [
      { label: '购', value: 0 },
      { label: '销', value: 1 }
    ]
  },
  {
    label: '品种',
    prop: 'varietyId',
    type: 'number'
  },
  {
    label: '规格',
    type: 'single-select',
    prop: 'gradeId',
    options: [
      { value: 111, label: '111' },
      { value: 222, label: '222' }
    ]
  },
  {
    label: '品牌',
    type: 'single-select',
    prop: 'trademarkId',
    options: [
      { value: 111, label: '111' },
      { value: 222, label: '222' }
    ]
  },
  {
    label: '数量',
    type: 'number',
    prop: 'realqty'
  },
  {
    label: '重量单位',
    prop: 'unit',
    type: 'number'
  },
  {
    label: '成交金额',
    type: 'number',
    prop: 'amount',
    hidden: true
  },
  {
    label: '订单价格',
    type: 'number',
    prop: 'atPrice'
  },
  {
    label: '实收付金额',
    type: 'number',
    prop: 'actAmount'
  },
  {
    label: '订单币种',
    type: 'single-select',
    prop: 'currencyId',
    options: [
      { value: 111, label: '111' },
      { value: 222, label: '222' }
    ]
  },
  {
    label: '贸易类型',
    prop: 'pattern',
    type: 'number'
  },
  {
    label: '订单模式',
    type: 'number',
    prop: 'orderId'
  },
  {
    label: '交货方式',
    type: 'number',
    prop: 'deliver'
  },
  {
    label: '增值税率',
    prop: 'vat',
    type: 'number'
  }
]
// router
const route = useRoute()
// menu vars & handlers
const menuList = ref([
  { prop: 'refresh', label: '刷新' },
  { prop: 'update', label: '修改' },
  { prop: 'delete', label: '删除' }
])
const position = ref({ x: 0, y: 0 })
const handleCtxMenu = (menuLabel: string) => {
  switch (menuLabel) {
    case 'refresh':
      handleRefresh('1-1')
      break
    case 'update':
      isVisible.value.dialogUpdate = true
      break
    case 'delete':
      isVisible.value.dialogDelete = true
      break
  }
  isVisible.value.clickMenu = false
  ElMessage({
    message: '开发中：点击了' + menuLabel,
    type: 'info'
  })
}
const menu = (_a, _b, _c, event: any) => {
  event.preventDefault()
  position.value.x = event.clientX
  position.value.y = event.clientY
  isVisible.value.clickMenu = true
  document.addEventListener('click', () => {
    isVisible.value.clickMenu = false
  })
}
// handlers for table commands
const handle = (id: string, a: number) => {
  switch (id) {
    case '1-1':
      switch (a) {
        case 0:
          handleRefresh('1-1')
          break
        case 1:
          isVisible.value.purchase = true
          break

        case 2:
          send()
          console.log(select_list)
          break
      }
      break
    case '1-2':
      switch (a) {
        case 0:
          handleRefresh('1-2')
          break
      }
  }
}
// refresh handlers for tables
const handleRefresh = async (id: string) => {
  let res = []
  switch (id) {
    case '1-1':
      res = await tradeAPI.get_Trade()
      break
    case '1-2':
      res = await tradeAPI.get_Position()
      break
  }
  if (res.data.length != 0) {
    data[id].splice(0, data[id].length)
    res.data.forEach((item: any) => {
      data[id].push(item)
    })
  }
  ElMessage({
    message: '数据获取成功',
    type: 'success'
  })
}

// ********************
// main logic functions
// ********************
const purchase = (data: any) => {
  tradeAPI.purchase_Trade(data).then(() =>
    ElMessage({
      message: '采购成功',
      type: 'success'
    })
  )
}
const send = () => {
  ElMessage({
    message: '发送交易确认',
    type: 'success'
  })
}
const handleUpdate = () => {
  isVisible.value.dialogUpdate = false
  ElMessage('更新' + updateform.value)
}
const deletebyid = () => {
  isVisible.value.dialogDelete = false
  ElMessage('删除' + select_list.value)
}
const select = (val: any, id: string) => {
  if (id == 'trade') select_list.value = val
  if (id == 'trade1') select_list1.value = val
}
// ***************
// startup actions
// ***************
const init = async () => {
  const companyId = await tradeAPI.getCompanyList()
  let companyDept: any = {}
  Gouxiaojilu.map((item) => {
    if (item.prop == 'ledgerId') {
      item.options = companyId.map((item: any) => {
        return { value: item.id, label: item.shortname }
      })
    }
  })
  companyId.array.forEach(async (item: any) => {
    const res = await tradeAPI.getCompanyDept(item.id)
    companyDept.push({
      id: item.id,
      data: res.map((r: any) => {
        return { value: r.id, label: r.shortname }
      })
    }) //company -> companyDept
  })
  Gouxiaojilu.map((item) => {
    if (item.prop == 'companyDeptId') {
      item.options = companyDept.map((item: any) => {
        return { value: item.id, label: item.shortname, children: item.data }
      })
    }
  })
  console.log('init success')
}
init()
</script>
