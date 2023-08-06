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
  <!-- 销售确认 -->
  <form-dialog
    width="80%"
    v-model="isVisible.sale"
    title="销售确认"
    :col="Xiaoshouqueren"
    @close="isVisible.sale = false"
    @submit="saleConfirm()"
  />
  <!-- 现货结算价 -->
  <form-dialog
    width="80%"
    v-model="isVisible.form1"
    title="现货结算价"
    :col="[{ label: '现货结算价', prop: 'value', type: 'string' }]"
    @close="isVisible.form1 = false"
    @submit="console.log"
  />
  <!-- 汇率 -->
  <form-dialog
    width="80%"
    v-model="isVisible.form2"
    title="汇率"
    :col="[
      { label: '汇率参考值', prop: 'refvalue', type: 'string' },
      { label: '本币结算价', prop: 'finalvalue', type: 'string' }
    ]"
    @close="isVisible.form2 = false"
    @submit="console.log"
  />
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
          @select="handleSelect"
          v-loading="isLoading['1-1']"
        >
          <template #top>
            <tableFind :form-data="data['1-1']" @submit="console.log" />
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
          @handle="(a: number) => handle('1-2', a)"
          @select="handleSelect"
          @menu="menu"
          v-loading="isLoading['1-2']"
        >
          <template #top>
            <tableFind />
          </template>
          <template #extend3="row">
            <AFTableColumn label="订单浮盈" header-align="center">
              <AFTableColumn label="成本价" :prop="row.cprice"></AFTableColumn>
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
            <AFTableColumn :width="100" label="操作" fixed="right">
              <template #default="scope">
                <el-button type="primary" link @click="console.log(scope.row)"
                  >查看</el-button
                >
              </template>
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
          @handle="(a:number)=>handle('2-2', a)"
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
          @handle="(a:number)=>handle('2-3', a)"
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
import * as tableCol from '../../assets/table_info/table-title'
import * as tradeAPI from '../../http/api/trade'
import { Gouxiaojilu, Xiaoshouqueren } from '../../assets/table_info/table-add'
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
let isVisible = ref({
  clickMenu: false,
  dialogUpdate: false,
  dialogDelete: false,
  purchase: false,
  sale: false,
  form1: false,
  form2: false
})
let isLoading: any = reactive({
  '1-1': true,
  '1-2': true
})
let selectData: any = reactive({
  id: '',
  rows: []
})
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
const menu = (_a: any, _b: any, _c: any, event: any) => {
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
          isLoading[id] = true
          handleRefresh('1-1')
          break
        case 1:
          isVisible.value.purchase = true
          break
        case 2:
          if (selectData.rows.length > 0)
            ElMessage({
              message: '已发送成交确认',
              type: 'success'
            })
          else
            ElMessage({
              message: '请选择要确认的行',
              type: 'warning'
            })
      }
      break
    case '1-2':
      switch (a) {
        case 0:
          isLoading[id] = true
          handleRefresh('1-2')
          break
        case 1:
          if (selectData.rows.length == 0) {
            ElMessage({
              message: '请选择要确认的行',
              type: 'warning'
            })
            return
          } else if (selectData.rows.length > 1) {
            let res = true
            for (let i = 0; i < selectData.rows.length - 1; i++) {
              if (
                selectData.rows[i].ledgerId !=
                  selectData.rows[i + 1].ledgerId ||
                selectData.rows[i].ourDeptId !=
                  selectData.rows[i + 1].ourDeptId ||
                selectData.rows[i].varietyId != selectData.rows[i + 1].varietyId
              ) {
                res = false
                break
              }
            }
            isVisible.value.sale = res
          } else if (selectData.rows.length == 1) {
            isVisible.value.sale = true
          }
          break
        case 2:
          isVisible.value.form1 = true
          break
        case 3:
          isVisible.value.form2 = true
          break
        case 4:
          ElMessage({
            message: '导出成功',
            type: 'success'
          })
          break
      }
  }
}
// refresh handlers for tables
const handleRefresh = async (id: string) => {
  let res: any = []
  let part1: any, part2: any
  switch (id) {
    case '1-1':
      res = await tradeAPI.getTrade(res)
      break
    case '1-2':
      part1 = await tradeAPI.getPosition(res)
      part2 = await tradeAPI.exportReferer(res)
      res = {
        data: part1.data.map((item: any, index: number) => {
          return Object.assign(item, part2.data[index])
        })
      }
      console.log(res)
      break
  }
  if (res.data.length != 0) {
    data[id].splice(0, data[id].length)
    res.data.forEach((item: any) => {
      data[id].push(item)
    })
  }
  isLoading[id] = false
}
// handler for table row selects
const handleSelect = (val: any, id: string) => {
  selectData.id = id
  selectData.rows = val
}

// ********************
// main logic functions
// ********************
const purchase = (data: any) => {
  console.log(data)
  tradeAPI.purchaseTrade(data).then(() =>
    ElMessage({
      message: '采购成功',
      type: 'success'
    })
  )
}
const saleConfirm = () => {
  let request: tradeAPI.SaleConfirm = {
    positionDtos: [],
    tradePurchaseDto: selectData.rows[0]
  }
  tradeAPI.saleConfirm(request).then(() =>
    ElMessage({
      message: '销售确认成功',
      type: 'success'
    })
  )
}
const handleUpdate = () => {
  isVisible.value.dialogUpdate = false
  ElMessage('更新' + updateform.value)
}
const deletebyid = () => {
  isVisible.value.dialogDelete = false
  ElMessage('删除' + selectData.value)
}
// ***************
// startup actions
// ***************
const init = async () => {
  // initiate form options
  const companyId: any = await tradeAPI.getCompanyList(1)
  let companyDept: any = []
  const ledgerId: any = await tradeAPI.getCompanyList(2)
  let ledgerDept: any = []
  const varietyId: any = await tradeAPI.getVariety()
  let gradeId: any = []
  const currencyId: any = await tradeAPI.getCurrency()
  let trademarkId: any = []
  const orderId: any = await tradeAPI.getOrder()
  companyId.forEach(async (item: any) => {
    const res: any = await tradeAPI.getCompanyDept(1, item.id)
    companyDept.push({
      label: item.shortname,
      options: res.map((r: any) => {
        return { value: r.id, label: r.name }
      })
    })
  })
  ledgerId.forEach(async (item: any) => {
    const res: any = await tradeAPI.getCompanyDept(2, item.id)
    ledgerDept.push({
      label: item.shortname,
      options: res.map((r: any) => {
        return { value: r.id, label: r.shortname }
      })
    })
  })
  varietyId.forEach(async (item: any) => {
    const res: any = await tradeAPI.getGrade(item.id)
    gradeId.push({
      label: item.name,
      options: res.map((r: any) => {
        return { value: r.id, label: r.name }
      })
    })
  })
  currencyId.forEach(async (item: any) => {
    const res: any = await tradeAPI.getTrademark(item.id)
    trademarkId.push({
      label: item.name,
      options: res.map((r: any) => {
        return { value: r.id, label: r.name }
      })
    })
  })
  Gouxiaojilu.map((item) => {
    if (item.prop == 'ledgerId') {
      item.options = companyId.map((i: any) => {
        return { value: i.id, label: i.shortname }
      })
    } else if (item.prop == 'ourDeptId') {
      item.options = companyDept
    } else if (item.prop == 'companyId') {
      item.options = ledgerId.map((i: any) => {
        return { value: i.id, label: i.shortname }
      })
    } else if (item.prop == 'companyDeptId') {
      item.options = ledgerDept
    } else if (item.prop == 'varietyId') {
      item.options = varietyId.map((i: any) => {
        return { value: i.id, label: i.name }
      })
    } else if (item.prop == 'gradeId') {
      item.options = gradeId
    } else if (item.prop == 'currencyId') {
      item.options = currencyId.map((i: any) => {
        return { value: i.id, label: i.name }
      })
    } else if (item.prop == 'trademarkId') {
      item.options = trademarkId
    } else if (item.prop == 'orderId') {
      item.options = orderId.map((i: any) => {
        return { value: i.id, label: i.mode }
      })
    }
  })
  console.log('init success')
}
init()
</script>
