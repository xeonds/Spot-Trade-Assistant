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
  <!-- 新增购买 -->
  <form-dialog
    width="80%"
    v-model="isVisible.purchase"
    :rules="tableRules.Gouxiaojilurules"
    :title="'采购'"
    :col="Gouxiaojilu_local"
    @close="isVisible.purchase = false"
    @submit="(data) => purchase(data)"
    @write="
      (flag, val) => {
        handle_load(flag, val)
      }
    "
    ref="purchase_form"
  />
  <!-- 销售确认 -->
  <form-dialog
    width="80%"
    v-model="isVisible.sale"
    title="销售确认"
    :rules="tableRules.Xiaoshouquerenrules"
    :col="Xiaoshouqueren_local"
    @close="isVisible.sale = false"
    @submit="(data) => saleConfirm(data)"
    @write="
      (flag, val) => {
        handle_load(flag, val)
      }
    "
    ref="sale_form"
  />
  <!-- 现货结算价 -->
  <el-dialog
    width="80%"
    v-model="isVisible.form1"
    title="现货结算价"
    align-center
  >
    <el-table :data="data['1-2-1']" style="width: 100%" max-height="500">
      <el-table-column prop="ledger" label="账套" width="180" />
      <el-table-column prop="ourdept" label="部门" width="180" />
      <el-table-column prop="variety" label="品种" width="180" />
      <el-table-column prop="grade" label="规格" width="180" />
      <el-table-column align="right">
        <template #default="scope">
          <el-input
            v-model="tempform1[scope.$index]"
            placeholder="订单结算价"
            style="margin-right: 1vw; width: 7vw"
          />
          <el-input
            v-model="tempform2[scope.$index]"
            placeholder="进出口结算算价"
            style="margin-right: 1vw; width: 7vw"
          />
          <el-button size="small" @click="calculate1(scope.$index, scope.row)"
            >确定</el-button
          >
        </template>
      </el-table-column>
    </el-table>
    <template #footer>
      <span class="dialog-footer">
        <el-button type="primary" plain @click="isVisible.form1 = false">
          取消
        </el-button>
      </span>
    </template>
  </el-dialog>

  <!-- 汇率 -->
  <el-dialog width="80%" v-model="isVisible.form2" title="汇率" align-center>
    <el-table :data="data['1-2-2']" style="width: 100%" max-height="500">
      <el-table-column prop="type" label="币种" width="180" />
      <el-table-column align="right">
        <template #default="scope">
          <el-input
            v-model="tempform1[scope.$index]"
            placeholder="汇率参考值"
            style="margin-right: 1vw; width: 7vw"
          />
          <el-button size="small" @click="calculate2(scope.$index, scope.row)"
            >确定</el-button
          >
        </template>
      </el-table-column>
    </el-table>
    <template #footer>
      <span class="dialog-footer">
        <el-button type="primary" plain @click="isVisible.form1 = false">
          取消
        </el-button>
      </span>
    </template>
  </el-dialog>

  <!-- 生成合同 -->
  <form-dialog
    width="80%"
    v-model="isVisible.generate"
    title="生成合同"
    :col="table_add.Shengchenghetong"
    :rules="tableRules.Shengchenghetongrules"
    ref="hetong_form"
    @close="isVisible.generate = false"
    @submit="(data) => generateContract(data)"
  />

  <!-- 印花税付款申请 -->
  <form-dialog
    width="80%"
    v-model="isVisible.request"
    title="印花税付款申请"
    :col="Yinhuashui_local"
    :rules="tableRules.Yinhuashuirules"
    ref="yinhuashui_form"
    @close="isVisible.request = false"
    @submit="(data) => ruquestYinhua(data)"
    @write="
      (flag, val) => {
        handle_load(flag, val)
      }
    "
  />
  <!-- 付款申请 -->
  <form-dialog
    width="80%"
    v-model="isVisible.request2"
    title="采购付款申请"
    :col="Fukuan_local"
    :rules="tableRules.Caigoufukuan"
    ref="fukuan_form"
    @close="isVisible.request2 = false"
    @submit="(data) => ruquestCaigou(data)"
    @write="
      (flag, val) => {
        handle_load(flag, val)
      }
    "
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
          @load="handlepageload('1-1')"
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
          @load="handlepageload('1-2')"
          @handle="(a: number) => handle('1-2', a)"
          @select="handleSelect"
          @menu="menu"
          @expand-change="(row:any) => get_detail(row)"
          v-loading="isLoading['1-2']"
        >
          <template #top>
            <tableFind />
          </template>
          <template #fold_content> 接口返回为空 </template>
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
          :col="tableCol.TradeInfo2"
          :height="16"
          :selectable="true"
          @load="handlepageload('2-1')"
          @handle="(a:number)=>handle('2-1', a)"
          @menu="menu"
          @select="handleSelect"
          v-loading="isLoading['2-1']"
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
          :data="data['2-2']"
          :command="['刷新', '印花税付款申请', '合同归档']"
          name="购销合同"
          id="trade2"
          :col="tableCol.Gouxiaohetong"
          :height="16"
          :selectable="true"
          @load="handlepageload('2-2')"
          @handle="(a: number) => handle('2-2', a)"
          @menu="menu"
          @select="handleSelect"
          v-loading="isLoading['2-2']"
        >
          <template #top>
            <tableFind />
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
          :height="16"
          @load="handlepageload('2-3')"
          @handle="(a: number) => handle('2-3', a)"
          @menu="menu"
          v-loading="isLoading['2-3']"
        >
          <template #top>
            <tableFind />
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
          :col="tableCol.Caigoujilu"
          :height="30"
          :selectable="true"
          @load="handlepageload('3-1')"
          @handle="(a:number)=>handle('3-1', a)"
          @menu="menu"
          @select="handleSelect"
          v-loading="isLoading['3-1']"
        >
          <template #top>
            <tableFind :form-data="data['3-1']" @submit="console.log" />
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
          :height="30"
          @load="handlepageload('3-2')"
          @handle="(a: number) => handle('3-2', a)"
          @menu="menu"
          v-loading="isLoading['3-2']"
        >
          <template #top>
            <tableFind />
          </template>
        </modifyTable>
      </el-col>
    </el-row>
  </div>

  <div v-if="route.params.id === '4'">
    <el-row
      ><el-col :span="24">
        <modifyTable
          :data="data['4-1']"
          :command="['刷新']"
          name="销售订单"
          id="trade1"
          :col="tableCol.Xiaoshoudingdan"
          :height="30"
          :selectable="true"
          @load="handlepageload('4-1')"
          @handle="(a:number)=>handle('4-1', a)"
          @menu="menu"
          @select="handleSelect"
          v-loading="isLoading['4-1']"
        >
          <template #top>
            <tableFind :form-data="data['4-1']" @submit="console.log" />
          </template>
        </modifyTable> </el-col
    ></el-row>
    <el-row
      ><el-col :span="24">
        <modifyTable
          :data="data['4-2']"
          :command="['刷新', '打印收款确认单']"
          name="收款记录"
          id="trade1"
          :col="tableCol.Shoukuanjilu"
          :height="30"
          :selectable="true"
          @load="handlepageload('4-2')"
          @handle="(a:number)=>handle('4-2', a)"
          @menu="menu"
          @select="handleSelect"
          v-loading="isLoading['4-2']"
        >
          <template #top>
            <tableFind :form-data="data['4-2']" @submit="console.log" />
          </template>
        </modifyTable> </el-col
    ></el-row>
  </div>
</template>

<script lang="ts" setup>
// **********
// components
// **********
import modifyTable from '@/components/modify-table2.vue'
import tableFind from '@/components/table-find.vue'
import formDialog from '../../components/form-dialog.vue'
import formPopmenu from '../../components/form-popmenu.vue'
import * as tableCol from '../../assets/table_info/table-title'
import * as tradeAPI from '../../http/api/trade'
import * as table_add from '../../assets/table_info/table-add'
import * as tableRules from '../../assets/table_info/rule'
import { ElMessage } from 'element-plus'
import { useRoute } from 'vue-router'

// *********
// variables
// *********
// pagenumber
let pagenumber: any = reactive({
  '1-1': 0,
  '1-2': 0,
  '1-2-1': 0,
  '1-2-2': 0,
  '2-1': 0,
  '2-2': 0,
  '2-3': 0,
  '3-1': 0,
  '3-2': 0,
  '4-1': 0,
  '4-2': 0,
  '5-1': 0,
  '5-2': 0,
  '6-1': 0,
  '6-2': 0,
  '7-1': 0
})

// table data
let data: any = reactive({
  '1-1': [],
  '1-2': [],
  '1-2-1': [],
  '1-2-2': [],
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
// 更新变量
let updateform = reactive({
  value: ''
})
let tempform1: string[] = reactive([])
let tempform2: string[] = reactive([])
// 显示控制
let isVisible = ref({
  clickMenu: false,
  dialogUpdate: false,
  dialogDelete: false,
  purchase: false,
  sale: false,
  form1: false,
  form2: false,
  generate: false,
  request: false,
  request2: false
})
//临时变量
let temp_data = {}
// 加载
let isLoading: any = reactive({
  '1-1': true,
  '1-2': true,
  '2-1': true,
  '2-2': true,
  '2-3': true,
  '3-1': true,
  '3-2': true
})
// 选择数据
let selectData: any = reactive({
  id: '',
  rows: []
})
//路径变量
const route = useRoute()

//表单变量
let sale_form = ref()
let purchase_form = ref()
let yinhuashui_form = ref()
let hetong_form = ref()
let fukuan_form = ref()
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
          purchase_form.value.clear()
          isVisible.value.purchase = true
          break
        case 2:
          // TODO: 不知道这玩意是干啥的
          if (selectData.rows.length > 0) {
            ElMessage({
              message: '已发送成交确认',
              type: 'success'
            })
          } else {
            ElMessage({
              message: '请选择要确认的行',
              type: 'warning'
            })
          }
      }
      break
    case '1-2':
      switch (a) {
        case 0:
          isLoading[id] = true
          handleRefresh('1-2')
          break
        case 1:
          sale_form.value.clear()
          if (selectData.rows.length == 0) {
            ElMessage({
              message: '请选择要确认的行',
              type: 'warning'
            })
            return
          } else if (selectData.rows.length > 1) {
            console.log(selectData)

            for (let i = 0; i < selectData.rows.length - 1; i++) {
              if (
                selectData.rows[i].ledger != selectData.rows[i + 1].ledger ||
                selectData.rows[i].ourdept != selectData.rows[i + 1].ourdept ||
                selectData.rows[i].variety != selectData.rows[i + 1].variety
              ) {
                return ElMessage({
                  message: '请选择同一品种同一部门同一账套的行',
                  type: 'warning'
                })
              }
            }
            isVisible.value.sale = true
          } else if (selectData.rows.length == 1) {
            isVisible.value.sale = true
          }
          break
        case 2:
          tradeAPI.get_sprice().then((res: any) => {
            console.log(res)
            data['1-2-1'].length = 0
            tempform1.length = 0
            tempform2.length = 0
            for (let i = 0; i < res.length; i++) {
              data['1-2-1'].push({
                ledger: res[i].positionVo.ledger,
                ourdept: res[i].positionVo.ourdept,
                variety: res[i].positionVo.variety,
                grade: res[i].positionVo.grade,
                total: res[i]
              })
              tempform1.push('')
              tempform2.push('')
            }
            console.log(data)
            isVisible.value.form1 = true
          })

          break
        case 3:
          tradeAPI.get_import().then((res: any) => {
            console.log(res)
            data['1-2-2'].length = 0
            tempform1.length = 0
            for (let key in res) {
              data['1-2-2'].push({ type: key, total: res[key] })
              tempform1.push('')
            }
            isVisible.value.form2 = true
          })
          break
        case 4:
          ElMessage({
            message: '暂时缺少接口',
            type: 'success'
          })
          break
      }
      break
    case '2-1':
      switch (a) {
        case 0:
          isLoading[id] = true
          handleRefresh('2-1')
          break
        case 1:
          hetong_form.value.clear()
          if (selectData.rows.length == 0) {
            ElMessage({
              message: '请选择要确认的行',
              type: 'warning'
            })
            return
          } else if (selectData.rows.length > 1) {
            console.log(selectData)

            for (let i = 0; i < selectData.rows.length - 1; i++) {
              if (
                selectData.rows[i].ledger != selectData.rows[i + 1].ledger ||
                selectData.rows[i].ourDept != selectData.rows[i + 1].ourDept ||
                selectData.rows[i].variety != selectData.rows[i + 1].variety ||
                selectData.rows[i].company != selectData.rows[i + 1].company
              ) {
                return ElMessage({
                  message: '请选择品种、部门、贸易商、品种相同的行',
                  type: 'warning'
                })
              }
            }
            isVisible.value.generate = true
          } else if (selectData.rows.length == 1) {
            isVisible.value.generate = true
          }
          break
      }
      break
    case '2-2':
      switch (a) {
        case 0:
          isLoading[id] = true
          handleRefresh('2-2')
          break
        case 1:
          yinhuashui_form.value.clear()
          if (selectData.rows.length == 0) {
            ElMessage({
              message: '请选择要确认的行',
              type: 'warning'
            })
            return
          } else if (selectData.rows.length > 1) {
            console.log(selectData)

            for (let i = 0; i < selectData.rows.length - 1; i++) {
              if (
                selectData.rows[i].currency != selectData.rows[i + 1].currency
              ) {
                return ElMessage({
                  message: '请选择币种相同的行',
                  type: 'warning'
                })
              }
            }
            isVisible.value.request = true
          } else if (selectData.rows.length == 1) {
            isVisible.value.request = true
          }
          break
        case 2:
          if (selectData.rows.length == 0) {
            ElMessage({
              message: '请选择要确认的行',
              type: 'warning'
            })
            return
          } else {
            let ids = []
            for (let i = 0; i < selectData.rows.length; i++) {
              ids.push(selectData.rows[i].id)
            }
            tradeAPI.putContract(ids).then(() => {
              ElMessage({
                message: '操作成功',
                type: 'success'
              })
            })
          }

          break
      }
      break
    case '3-1':
      switch (a) {
        case 0:
          isLoading[id] = true
          handleRefresh('2-2')
          break
        case 1:
          fukuan_form.value.clear()
          if (selectData.rows.length == 0) {
            ElMessage({
              message: '请选择要确认的行',
              type: 'warning'
            })
            return
          } else if (selectData.rows.length > 1) {
            console.log(selectData)

            for (let i = 0; i < selectData.rows.length - 1; i++) {
              if (
                selectData.rows[i].ledger != selectData.rows[i + 1].ledger ||
                selectData.rows[i].ourDept != selectData.rows[i + 1].ourDept ||
                selectData.rows[i].company != selectData.rows[i + 1].company ||
                selectData.rows[i].contractno !=
                  selectData.rows[i + 1].contractno ||
                selectData.rows[i].reqState != '1' ||
                selectData.rows[i + 1].reqState != '1'
              ) {
                return ElMessage({
                  message:
                    '请选择品种、部门、贸易商、合同号相同,未完成付款的行',
                  type: 'warning'
                })
              }
            }
            isVisible.value.request2 = true
          } else if (selectData.rows.length == 1) {
            if (selectData.rows[0].reqState != '1') {
              return ElMessage({
                message: '请选择未完成付款的行',
                type: 'warning'
              })
            } else {
              isVisible.value.request2 = true
            }
          }
          break
      }
      break
    case '3-2':
      switch (a) {
        case 0:
          isLoading[id] = true
          handleRefresh('3-2')
          break
      }
      break
    case '4-1':
      switch (a) {
        case 0:
          isLoading[id] = true
          handleRefresh('4-1')
          break
      }
      break
    case '4-2':
      switch (a) {
        case 0:
          isLoading[id] = true
          handleRefresh('4-2')
          break
        case 1:
          break
      }
      break
  }
}
// refresh handlers for tables
// page

const handlepageload = async (id: string) => {
  let res: any = []
  switch (id) {
    case '1-1':
      pagenumber['1-1'] = pagenumber['1-1'] + 1
      res = await tradeAPI.getTrade({
        pageNumber: pagenumber['1-1'],
        pageSize: '10',
        sort: 'date',
        order: 'desc'
      })
      break
    case '1-2':
      pagenumber['1-2'] = pagenumber['1-2'] + 1
      res = await tradeAPI.getPosition({
        pageNumber: pagenumber['1-2'],
        pageSize: '10',
        sort: 'date',
        order: 'desc'
      })
      break
    case '2-1':
      pagenumber['2-1'] = pagenumber['2-1'] + 1
      res = await tradeAPI.getTrade2({
        pageNumber: pagenumber['2-1'],
        pageSize: '10',
        sort: 'date',
        order: 'desc'
      })
      break
    case '2-2':
      pagenumber['2-2'] = pagenumber['2-2'] + 1
      res = await tradeAPI.getContract({
        pageNumber: pagenumber['2-2'],
        pageSize: '10',
        sort: 'date',
        order: 'desc'
      })
      break
    case '2-3':
      pagenumber['2-3'] = pagenumber['2-3'] + 1
      res = await tradeAPI.getRequest({
        pageNumber: pagenumber['2-3'],
        queryType: '1',
        pageSize: '10',
        sort: 'date',
        order: 'desc'
      })
      break
    case '3-1':
      pagenumber['3-1'] = pagenumber['3-1'] + 1
      res = await tradeAPI.getCaigouliebiao({
        ps: '1',
        pageNumber: pagenumber['3-1'],
        pageSize: '10',
        sort: 'date',
        order: 'desc'
      })
      break
    case '3-2':
      pagenumber['3-2'] = pagenumber['3-2'] + 1
      res = await tradeAPI.getFukuan({
        queryType: '2',
        pageNumber: pagenumber['3-2'],
        pageSize: '10',
        sort: 'date',
        order: 'desc'
      })
      break
    case '4-1':
      pagenumber['4-1'] = pagenumber['4-1'] + 1
      res = await tradeAPI.getSales({
        pageNumber: pagenumber['4-1'],
        pageSize: '10',
        sort: 'date',
        order: 'desc'
      })
      break
    case '4-2':
      pagenumber['4-2'] = pagenumber['4-2'] + 1
      res = await tradeAPI.getShoukuan({
        pageNumber: pagenumber['4-2'],
        pageSize: '10',
        sort: 'date',
        order: 'desc'
      })
      break
  }
  if (res.data.length != 0) {
    res.data.forEach((item: any) => {
      data[id].push(item)
    })
  }
  isLoading[id] = false
}

const handleRefresh = (id: string) => {
  let res: any = []
  switch (id) {
    case '1-1':
      pagenumber['1-1'] = 0
      break
    case '1-2':
      pagenumber['1-2'] = 0
      break
    case '2-1':
      pagenumber['2-1'] = 0
      break
    case '2-2':
      pagenumber['2-2'] = 0
      break
    case '2-3':
      pagenumber['2-3'] = 0
      break
    case '3-1':
      pagenumber['3-1'] = 0
      break
    case '3-2':
      pagenumber['3-2'] = 0
      break
    case '4-1':
      pagenumber['4-1'] = 0
      break
    case '4-2':
      pagenumber['4-2'] = 0
      break
  }
  data[id].length = 0
  handlepageload(id)
}

// handler for table row selects
const handleSelect = (val: any, id: string) => {
  selectData.id = id
  selectData.rows = val
}

// ********************
// main logic functions
// ********************
const purchase = (data: tradeAPI.purchaseTradeForm) => {
  data['ps'] = 1
  tradeAPI
    .purchaseTrade(data)
    .then(() => {
      ElMessage({
        message: '采购成功',
        type: 'success'
      })
    })
    .catch(() => {
      ElMessage({
        message: '采购失败',
        type: 'error'
      })
    })
    .finally(() => {
      isVisible.value.purchase = false
      handleRefresh('1-1')
    })
}
const saleConfirm = (data: any) => {
  let request: tradeAPI.SaleConfirm = {
    positionDtos: [],
    tradePurchaseDto: JSON.parse(JSON.stringify(data))
  }
  for (let i = 0; i < selectData.rows.length; i++) {
    request.positionDtos.push({
      id: selectData.rows[i].id,
      oi: selectData.rows[i].oi
    })
  }
  request.tradePurchaseDto['ps'] = 2
  tradeAPI
    .saleConfirm(request)
    .then(() =>
      ElMessage({
        message: '销售确认成功',
        type: 'success'
      })
    )
    .catch(() =>
      ElMessage({
        message: '销售确认失败',
        type: 'error'
      })
    )
    .finally(() => {
      isVisible.value.sale = false
      handleRefresh('1-2')
    })
}
const handleUpdate = () => {
  isVisible.value.dialogUpdate = false
  ElMessage('更新' + updateform.value)
}
const deletebyid = () => {
  isVisible.value.dialogDelete = false
  ElMessage('删除' + selectData.value)
}

const calculate1 = (index: any, row: any) => {
  console.log(row)
  if (tempform1[index] && tempform2[index]) {
    let Ids = row.total.groupIds
    Ids = Ids.split(',')
    let temp: any = []
    for (let i = 0; i < Ids.length; i++) {
      temp.push({
        id: parseInt(Ids[i]),
        settleprice: parseFloat(tempform1[index]),
        sprice: parseFloat(tempform2[index])
      })
    }

    tradeAPI.put_sprice(temp).then(
      () => {
        ElMessage({ message: '更新成功' + Ids, type: 'success' })
        tempform1[index] = ''
        tempform2[index] = ''
      },
      () => {
        ElMessage('更新失败' + Ids)
      }
    )
  } else {
    ElMessage('请输入参考价')
  }
}

const calculate2 = (index: any, row: any) => {
  if (tempform1[index]) {
    let Ids = row.total
    Ids = Ids.split(',')
    let temp: any = []
    for (let i = 0; i < Ids.length; i++) {
      temp.push({ id: parseInt(Ids[i]), exrate: parseFloat(tempform1[index]) })
    }
    tradeAPI.put_import(temp).then(
      (res: any) => {
        tempform1[index] = ''
        ElMessage({ message: '更新成功' + Ids, type: 'success' })
      },
      () => {
        ElMessage('更新失败' + Ids)
      }
    )
  } else {
    ElMessage('请输入参考汇率')
  }
}

const get_detail = (row: any) => {
  tradeAPI.get_check({ positionId: row.id }).then((res) => {
    console.log(res)
  })
}

const ruquestYinhua = (data: any) => {
  let ids = []
  console.log(selectData)
  for (let i = 0; i < selectData.rows.length; i++) {
    ids.push(selectData.rows[i].id)
  }
  data.consList = ids
  tradeAPI.postRequestDto(data).then(() => {
    ElMessage({ message: '生成成功', type: 'success' })
    isVisible.value.request = false
    handleRefresh('2-2')
  })
}

const generateContract = (data: any) => {
  let ids = []
  for (let i = 0; i < selectData.rows.length; i++) {
    ids.push(selectData.rows[i].id)
  }
  data.tradeIds = ids
  tradeAPI.postContract(data).then(() => {
    ElMessage({ message: '生成成功', type: 'success' })
    isVisible.value.generate = false
    handleRefresh('2-1')
  })
}

//3-1

const ruquestCaigou = (data: any) => {
  let ids = []
  for (let i = 0; i < selectData.rows.length; i++) {
    ids.push(selectData.rows[i].id)
  }
  data.tradeIds = ids
  tradeAPI.postCaigoufukuan(data).then(() => {
    ElMessage({ message: '生成成功', type: 'success' })
    isVisible.value.request2 = false
    handleRefresh('3-1')
  })
}

// ***************
// startup actions
// ***************
let Gouxiaojilu_local = reactive(table_add.Gouxiaojilu)
let Xiaoshouqueren_local = reactive(table_add.Xiaoshouqueren)
let Yinhuashui_local = reactive(table_add.Yinhuashui)
let Fukuan_local = reactive(table_add.Caigoufukuan)
// 自动更新
watch(
  () => route.params.id,
  () => {
    init()
  }
)

const init = async () => {
  // initiate form options
  if (route.params.id === '1') {
    const companyId: any = await tradeAPI.getCompanyList(1)
    let companyDept: any = []
    const ledgerId: any = await tradeAPI.getCompanyList(2)
    let ledgerDept: any = []
    const varietyId: any = await tradeAPI.getVariety()
    let gradeId: any = []
    const currencyId: any = await tradeAPI.getCurrency()
    let trademarkId: any = []
    const orderId: any = await tradeAPI.getOrder()

    for (let j = 0; j < Gouxiaojilu_local.length; j++) {
      if (Gouxiaojilu_local[j].prop == 'ledgerId') {
        Gouxiaojilu_local[j].options = companyId.map((i: any) => {
          return { value: i.id, label: i.shortname }
        })
      } else if (Gouxiaojilu_local[j].prop == 'ourDeptId') {
        Gouxiaojilu_local[j].options = companyDept
      } else if (Gouxiaojilu_local[j].prop == 'companyId') {
        Gouxiaojilu_local[j].options = ledgerId.map((i: any) => {
          return { value: i.id, label: i.shortname }
        })
      } else if (Gouxiaojilu_local[j].prop == 'companyDeptId') {
        Gouxiaojilu_local[j].options = ledgerDept
      } else if (Gouxiaojilu_local[j].prop == 'varietyId') {
        Gouxiaojilu_local[j].options = varietyId.map((i: any) => {
          return { value: i.id, label: i.name }
        })
      } else if (Gouxiaojilu_local[j].prop == 'gradeId') {
        Gouxiaojilu_local[j].options = gradeId
      } else if (Gouxiaojilu_local[j].prop == 'currencyId') {
        Gouxiaojilu_local[j].options = currencyId.map((i: any) => {
          return { value: i.id, label: i.name }
        })
      } else if (Gouxiaojilu_local[j].prop == 'trademarkId') {
        Gouxiaojilu_local[j].options = trademarkId
      } else if (Gouxiaojilu_local[j].prop == 'orderId') {
        Gouxiaojilu_local[j].options = orderId.map((i: any) => {
          return { value: i.id, label: i.mode }
        })
      }
    }

    for (let j = 0; j < Xiaoshouqueren_local.length; j++) {
      if (Xiaoshouqueren_local[j].prop == 'ledgerId') {
        Xiaoshouqueren_local[j].options = companyId.map((i: any) => {
          return { value: i.id, label: i.shortname }
        })
      } else if (Xiaoshouqueren_local[j].prop == 'ourDeptId') {
        Xiaoshouqueren_local[j].options = companyDept
      } else if (Xiaoshouqueren_local[j].prop == 'companyId') {
        Xiaoshouqueren_local[j].options = ledgerId.map((i: any) => {
          return { value: i.id, label: i.shortname }
        })
      } else if (Xiaoshouqueren_local[j].prop == 'companyDeptId') {
        Xiaoshouqueren_local[j].options = ledgerDept
      } else if (Xiaoshouqueren_local[j].prop == 'varietyId') {
        Xiaoshouqueren_local[j].options = varietyId.map((i: any) => {
          return { value: i.id, label: i.name }
        })
      } else if (Xiaoshouqueren_local[j].prop == 'gradeId') {
        Xiaoshouqueren_local[j].options = gradeId
      } else if (Xiaoshouqueren_local[j].prop == 'currencyId') {
        Xiaoshouqueren_local[j].options = currencyId.map((i: any) => {
          return { value: i.id, label: i.name }
        })
      } else if (Xiaoshouqueren_local[j].prop == 'trademarkId') {
        Xiaoshouqueren_local[j].options = trademarkId
      } else if (Xiaoshouqueren_local[j].prop == 'orderId') {
        Xiaoshouqueren_local[j].options = orderId.map((i: any) => {
          return { value: i.id, label: i.mode }
        })
      }
    }
  } else if (route.params.id === '2') {
    tradeAPI.getBankinfo().then((res: any) => {
      for (let j = 0; j < Yinhuashui_local.length; j++)
        if (Yinhuashui_local[j].prop == 'bank') {
          Yinhuashui_local[j].options = res.map((r: any) => {
            return { value: r.id, label: r.name }
          })
        }
    })
  } else if (route.params.id === '3') {
    tradeAPI.getBankinfo().then((res: any) => {
      for (let j = 0; j < Fukuan_local.length; j++)
        if (Fukuan_local[j].prop == 'bank') {
          Fukuan_local[j].options = res.map((r: any) => {
            return { value: r.id, label: r.name }
          })
        }
    })
  }
  console.log('init success')
}
//加载项获取
const handle_load = (flag: string, val: any) => {
  switch (flag) {
    case 'GJ-1':
      tradeAPI.getCompanyDept(1, val).then((res: any) => {
        for (let j = 0; j < Gouxiaojilu_local.length; j++) {
          if (Gouxiaojilu_local[j].prop == 'ourDeptId') {
            Gouxiaojilu_local[j].options = res.map((r: any) => {
              return { value: r.id, label: r.name }
            })
          }
        }
      })

      break
    case 'GJ-2':
      tradeAPI.getCompanyDept(2, val).then((res: any) => {
        for (let j = 0; j < Gouxiaojilu_local.length; j++) {
          if (Gouxiaojilu_local[j].prop == 'companyDeptId') {
            Gouxiaojilu_local[j].options = res.map((r: any) => {
              return { value: r.id, label: r.name }
            })
          }
        }
      })

      break
    case 'GJ-3':
      tradeAPI
        .getTrademark(val)
        .then((res: any) => {
          for (let j = 0; j < Gouxiaojilu_local.length; j++) {
            if (Gouxiaojilu_local[j].prop == 'trademarkId') {
              Gouxiaojilu_local[j].options = res.map((r: any) => {
                return { value: r.id, label: r.name }
              })
            }
          }
          return tradeAPI.getGrade(val)
        })
        .then((res: any) => {
          for (let j = 0; j < Gouxiaojilu_local.length; j++) {
            if (Gouxiaojilu_local[j].prop == 'gradeId') {
              Gouxiaojilu_local[j].options = res.map((r: any) => {
                return { value: r.id, label: r.name }
              })
            }
          }
        })

      break
    case 'XS-1':
      tradeAPI.getCompanyDept(1, val).then((res: any) => {
        for (let j = 0; j < Xiaoshouqueren_local.length; j++) {
          if (Xiaoshouqueren_local[j].prop == 'ourDeptId') {
            Xiaoshouqueren_local[j].options = res.map((r: any) => {
              return { value: r.id, label: r.name }
            })
          }
        }
      })

      break
    case 'XS-2':
      tradeAPI.getCompanyDept(2, val).then((res: any) => {
        for (let j = 0; j < Xiaoshouqueren_local.length; j++) {
          if (Xiaoshouqueren_local[j].prop == 'companyDeptId') {
            Xiaoshouqueren_local[j].options = res.map((r: any) => {
              return { value: r.id, label: r.name }
            })
          }
        }
      })

      break
    case 'XS-3':
      tradeAPI
        .getTrademark(val)
        .then((res: any) => {
          for (let j = 0; j < Xiaoshouqueren_local.length; j++) {
            if (Xiaoshouqueren_local[j].prop == 'trademarkId') {
              Xiaoshouqueren_local[j].options = res.map((r: any) => {
                return { value: r.id, label: r.name }
              })
            }
          }
          return tradeAPI.getGrade(val)
        })
        .then((res: any) => {
          for (let j = 0; j < Xiaoshouqueren_local.length; j++) {
            if (Xiaoshouqueren_local[j].prop == 'gradeId') {
              Xiaoshouqueren_local[j].options = res.map((r: any) => {
                return { value: r.id, label: r.name }
              })
            }
          }
        })
      break
    case 'YS-1':
      tradeAPI.getMoneytype(val).then((res: any) => {
        for (let i = 0; i < Yinhuashui_local.length; i++) {
          if (Yinhuashui_local[i].prop == 'type') {
            Yinhuashui_local[i].options = res.map((r: any) => {
              return { value: r.id, label: r.type }
            })
          }
        }
      })

      break
    case 'Fk-1':
      tradeAPI.getMoneytype(val).then((res: any) => {
        for (let i = 0; i < Fukuan_local.length; i++) {
          if (Fukuan_local[i].prop == 'type') {
            Fukuan_local[i].options = res.map((r: any) => {
              return { value: r.id, label: r.type }
            })
          }
        }
      })

      break
  }
}

//释放加载项
const dehandle_load = (flag: string) => {
  switch (flag) {
    case 'GJ-1':
      for (let j = 0; j < Gouxiaojilu_local.length; j++) {
        if (Gouxiaojilu_local[j].prop == 'ourDeptId') {
          Gouxiaojilu_local[j].options = []
        }
      }

      break
    case 'GJ-2':
      for (let j = 0; j < Gouxiaojilu_local.length; j++) {
        if (Gouxiaojilu_local[j].prop == 'companyDeptId') {
          Gouxiaojilu_local[j].options = []
        }
      }

      break
    case 'GJ-3':
      for (let j = 0; j < Gouxiaojilu_local.length; j++) {
        if (Gouxiaojilu_local[j].prop == 'trademarkId') {
          Gouxiaojilu_local[j].options = []
        }
        if (Gouxiaojilu_local[j].prop == 'gradeId') {
          Gouxiaojilu_local[j].options = []
        }
      }
      break
    case 'XS-1':
      for (let j = 0; j < Xiaoshouqueren_local.length; j++) {
        if (Xiaoshouqueren_local[j].prop == 'ourDeptId') {
          Xiaoshouqueren_local[j].options = []
        }
      }
      break
    case 'XS-2':
      for (let j = 0; j < Xiaoshouqueren_local.length; j++) {
        if (Xiaoshouqueren_local[j].prop == 'companyDeptId') {
          Xiaoshouqueren_local[j].options = []
        }
      }

      break
    case 'XS-3':
      for (let j = 0; j < Xiaoshouqueren_local.length; j++) {
        if (Xiaoshouqueren_local[j].prop == 'trademarkId') {
          Xiaoshouqueren_local[j].options = []
        }
        if (Xiaoshouqueren_local[j].prop == 'gradeId') {
          Xiaoshouqueren_local[j].options = []
        }
      }
      break
    case 'YS-1':
      tradeAPI.getMoneytype(val).then((res: any) => {
        for (let i = 0; i < Yinhuashui_local.length; i++) {
          if (Yinhuashui_local[i].prop == 'type') {
            Yinhuashui_local[i].options = res.map((r: any) => {
              return { value: r.id, label: r.type }
            })
          }
        }
      })

      break
    case 'Fk-1':
      tradeAPI.getMoneytype(val).then((res: any) => {
        for (let i = 0; i < Fukuan_local.length; i++) {
          if (Fukuan_local[i].prop == 'type') {
            Fukuan_local[i].options = res.map((r: any) => {
              return { value: r.id, label: r.type }
            })
          }
        }
      })

      break
  }
}

init()
</script>
