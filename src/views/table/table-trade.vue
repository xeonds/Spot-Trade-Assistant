<template>
  <!-- 右键弹出框 -->
  <ul
    v-show="visible"
    :style="{ left: left + 'px', top: top + 'px' }"
    class="contextmenu"
  >
    <li @click="handleDelete()">删除</li>
    <li @click="handleFresh()">刷新</li>
    <li @click="handleUpdate()">编辑</li>
  </ul>
  <el-dialog v-model="delete_show" title="删除确认" width="30%" align-center>
    <span>是否确定要删除本条记录</span>
    <template #footer>
      <span class="dialog-footer">
        <el-button
          @click="delete_show = false"
          class="cancel"
          style="width: 6vw"
        >
          取消
        </el-button>
        <el-button @click="deletebyid" class="comfirm" style="width: 6vw">
          确定
        </el-button>
      </span>
    </template>
  </el-dialog>
  <!-- 修改框 -->
  <el-dialog v-model="update_show" title="修改" width="30%" align-center>
    <el-form
      :label-position="top"
      label-width="100px"
      :model="updateform"
      style="max-width: 460px"
    >
      <el-form-item label="修改值">
        <el-input v-model="updateform.value" />
      </el-form-item>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button
          @click="update_show = false"
          class="cancel"
          style="width: 6vw"
        >
          取消
        </el-button>
        <el-button @click="update" class="comfirm" style="width: 6vw"
          >确定</el-button
        >
      </span>
    </template>
  </el-dialog>
  <!-- 新增 -->
  <el-dialog v-model="dialogFormVisible" title="采购" style="width: 80%">
    <el-form :model="add_form" style="display: flex; flex-wrap: wrap">
      <el-form-item
        :label="item.label"
        :label-width="120"
        v-for="item in <any>table_add.Gouxiaojilu"
        :key="item.label"
        style="width: 24rem; color: #000"
        :prop="item.prop"
      >
        <el-date-picker
          v-model="add_form[item.prop]"
          type="date"
          placeholder="选择日期"
          v-if="item.type == 'date'"
        />
        <el-input
          v-model="add_form[item.prop]"
          input-style="color:#000;border-color:var(--el-color-primary)"
          v-if="item.type == 'string' || item.type == 'number'"
        />
        <el-radio-group
          v-model="add_form[item.prop]"
          v-if="item.type == 'select'"
        >
          <el-radio
            v-for="option in item.options"
            :key="option.label"
            :label="option.value"
            >{{ option.label }}</el-radio
          >
        </el-radio-group>
        <el-select
          v-model="add_form[item.prop]"
          multiple
          placeholder="选择"
          style="width: 240px"
          v-if="item.type == 'multiselect'"
        >
          <el-option
            v-for="option in multioptions[item.prop]"
            :key="option.value"
            :label="option.label"
            :value="option.value"
          />
        </el-select>
        <el-select
          v-model="add_form[item.prop]"
          placeholder="选择"
          style="width: 240px"
          v-if="item.type == 'singleselect'"
        >
          <el-option
            v-for="option in singleoptions[item.prop]"
            :key="option.value"
            :label="option.label"
            :value="option.value"
          />
        </el-select>
      </el-form-item>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogFormVisible = false" type="primary" plain>
          取消
        </el-button>
        <el-button @click="modify" type="primary">确定</el-button>
      </span>
    </template>
  </el-dialog>
  <!-- 现货结算价 -->
  <el-dialog v-model="dialogFormVisible1" title="现货结算价">
    <template #footer>
      <span class="dialog-footer">
        <el-button
          @click="dialogFormVisible1 = false"
          class="cancel"
          style="width: 6vw"
        >
          取消
        </el-button>
        <el-button @click="modify1" class="comfirm" style="width: 6vw">
          确定
        </el-button>
      </span>
    </template>
  </el-dialog>
  <el-dialog v-model="dialogFormVisible2" title="汇率">
    <el-form
      :label-position="top"
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
          @click="dialogFormVisible2 = false"
          class="cancel"
          style="width: 6vw"
        >
          取消
        </el-button>
        <el-button @click="modify2" class="comfirm" style="width: 6vw">
          确定
        </el-button>
      </span>
    </template>
  </el-dialog>
  <div v-if="route.params.id === '1'">
    <Modify_table
      :data="data"
      :command="['刷新', '采购', '发送成交确认']"
      name="购销订单"
      id="trade1"
      :col="table_col.TradeInfo"
      :height="30"
      :selectable="true"
      @handle="handle"
      @menu="menu"
      @select="select"
    >
      <template #top>
        <TableFind />
      </template>
    </Modify_table>
    <Modify_table
      :data="data1"
      :command="['刷新', '销售', '现货结算价', '汇率', '导出']"
      name="现货持仓"
      id="trade2"
      :col="table_col.PositionInfo"
      :hasfold="true"
      :selectable="true"
      :height="30"
      @handle="handle1"
      @select="select"
      @menu="menu"
      extend="操作"
    >
      <template #top>
        <TableFind />
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
    </Modify_table>
  </div>
  <div v-if="route.params.id === '2'">
    <Modify_table
      :data="data"
      :command="['生成合同']"
      name="购销记录"
      id="trade1"
      :col="table_col.Gouxiaojilu"
      @handle="handle"
      @menu="menu"
      :selectable="true"
    >
      <template #top>
        <TableFind :search_item="search_items.TradeInfo"></TableFind>
      </template>
    </Modify_table>
    <Modify_table
      :data="data"
      :command="['印花税付款', '合同归档']"
      name="购销合同"
      id="trade2"
      :col="table_col.Gouxiaohetong"
      @handle="handle1"
      @menu="menu"
      :selectable="true"
    >
      <template #top>
        <TableFind :search_item="search_items.TradeInfo"></TableFind>
      </template>
    </Modify_table>
    <Modify_table
      :data="data"
      name="购销记录"
      id="trade3"
      :col="table_col.Yinhuashui"
      @handle="handle2"
      @menu="menu"
    >
      <template #top>
        <TableFind :search_item="search_items.TradeInfo"></TableFind>
      </template>
    </Modify_table>
  </div>
  <div v-if="route.params.id === '3'">
    <Modify_table
      :data="data"
      :command="['付款申请']"
      name="采购记录"
      id="trade1"
      :col="table_col.Gouxiaojilu"
      @handle="handle"
      @menu="menu"
    >
      <template #top>
        <TableFind
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
        ></TableFind>
      </template>
    </Modify_table>
    <Modify_table
      :data="data"
      :command="[]"
      name="购销合同"
      id="trade2"
      :col="table_col.Gouxiaohetong"
      @handle="handle"
      @menu="menu"
    >
      <template #top>
        <TableFind
          :search_item="[
            '付款申请日期',
            '付款状态',
            '账套',
            '业务部门',
            '付款状态',
            '贸易商',
            '付款申请单号'
          ]"
        ></TableFind>
      </template>
    </Modify_table>
  </div>
  <div v-if="route.params.id === '4'">
    <Modify_table
      :data="data"
      :command="['']"
      name="购销记录"
      id="trade1"
      :col="table_col.Gouxiaojilu"
      @handle="handle"
      @menu="menu"
    >
      <template #top>
        <TableFind
          :search_item="[
            '交易日期',
            '收款状态',
            '账套',
            '业务部门',
            '贸易商',
            '贸易商',
            '贸易商部门',
            '合同号',
            '订单号'
          ]"
        ></TableFind>
      </template>
    </Modify_table>
    <Modify_table
      :data="data"
      :command="['打印收款确认单']"
      name="购销合同"
      id="trade2"
      :col="table_col.Gouxiaohetong"
      @handle="handle"
      @menu="menu"
    >
      <template #top>
        <TableFind
          :search_item="[
            '匹配状态',
            '账套',
            '业务部门',
            '贸易商',
            '收款确认单号',
            '回单号'
          ]"
        ></TableFind>
      </template>
    </Modify_table>
  </div>
  <div v-if="route.params.id === '5'">
    <Modify_table
      :data="data"
      :command="['余额对账']"
      name="贸易记录"
      id="trade3"
      :col="table_col.Maoyijilu"
      @handle="handle"
      @menu="menu"
    >
      <template #top>
        <TableFind
          :search_item="[
            '交易日期',
            '余款对账状态',
            '账套',
            '业务部门',
            '贸易商',
            '贸易商部门',
            '品种',
            '规格',
            '币种',
            '订单号'
          ]"
        ></TableFind>
      </template>
    </Modify_table>
  </div>
</template>

<script lang="ts" setup>
import AFTableColumn from '../../components/AFTableColumn.vue'
import Modify_table from '../../components/modify-table2.vue'
import TableFind from '../../components/table-find.vue'
import * as table_col from '../../assets/table_info/table-title'
import { useRoute } from 'vue-router'
import * as table_add from '../../assets/table_info/table-add'
import { ElMessage } from 'element-plus'
import * as search_items from '../../assets/table_info/search_item'

const route = useRoute()

const test = (a: any) => {
  console.log(a)
}

//右键修改逻辑
let visible = ref(false)
let left = ref()
let top = ref()
let mfrow = ref()
let mfproperty = ref()
const closeMenu = () => {
  visible.value = false
}

watch(visible, (value) => {
  if (value) {
    document.body.addEventListener('click', closeMenu)
  } else {
    document.body.removeEventListener('click', closeMenu)
  }
})

const menu = (name: any, row: any, col: any, event: any) => {
  mfrow.value = row
  mfproperty.value = col.property
  left.value = event.pageX
  top.value = event.pageY
  visible.value = true
}
let update_show = ref(false)
let updateform = reactive({
  value: ''
})
const handleUpdate = () => {
  updateform.value = ''
  update_show.value = true
}
const update = () => {
  ElMessage('更新' + updateform.value)
}
const handleFresh = () => {
  ElMessage('刷新')
}
let delete_show = ref(false)
const handleDelete = () => {
  delete_show.value = true
}
const deletebyid = () => {
  ElMessage('删除' + mfrow)
}
let data = reactive([
  {
    name: '341134',
    date: '2023-11-9-9',
    sex: 'male',
    test: 'sdfas',
    test2: 'dfas',
    test34: 'fdas'
  },
  {
    name: '341134',
    date: '2023-11-9-9',
    sex: 'male',
    test: 'sdfas',
    test2: 'dfas',
    test34: 'fdas'
  },
  {
    name: '341134',
    date: '2023-11-9-9',
    sex: 'male',
    test: 'sdfas',
    test2: 'dfas',
    test34: 'fdas'
  },
  {
    name: '341134',
    date: '2023-11-9-9',
    sex: 'male',
    test: 'sdfas',
    test2: 'dfas',
    test34: 'fdas'
  }
])

let data1 = reactive([
  {
    name: '341134',
    date: '2023-11-9-9',
    sex: 'male',
    test: 'sdfas',
    test2: 'dfas',
    test34: 'fdas'
  },
  {
    name: '341134',
    date: '2023-11-9-9',
    sex: 'male',
    test: 'sdfas',
    test2: 'dfas',
    test34: 'fdas'
  },
  {
    name: '341134',
    date: '2023-11-9-9',
    sex: 'male',
    test: 'sdfas',
    test2: 'dfas',
    test34: 'fdas'
  },
  {
    name: '341134',
    date: '2023-11-9-9',
    sex: 'male',
    test: 'sdfas',
    test2: 'dfas',
    test34: 'fdas'
  }
])

let data2 = reactive([
  {
    name: '341134',
    date: '2023-11-9-9',
    sex: 'male',
    test: 'sdfas',
    test2: 'dfas',
    test34: 'fdas'
  },
  {
    name: '341134',
    date: '2023-11-9-9',
    sex: 'male',
    test: 'sdfas',
    test2: 'dfas',
    test34: 'fdas'
  },
  {
    name: '341134',
    date: '2023-11-9-9',
    sex: 'male',
    test: 'sdfas',
    test2: 'dfas',
    test34: 'fdas'
  },
  {
    name: '341134',
    date: '2023-11-9-9',
    sex: 'male',
    test: 'sdfas',
    test2: 'dfas',
    test34: 'fdas'
  }
])

//新增功能
let singleoptions: any = reactive([])
let multioptions: any = reactive([])
let dialogFormVisible = ref(false)
let add_form: any = reactive({})
const add = () => {
  // init add form
  for (let key in add_form) {
    delete add_form[key]
  }
  for (let item = 0; item < table_add.Gouxiaojilu.length; item++) {
    add_form[table_add.Gouxiaojilu[item].prop] = ''
  }
  dialogFormVisible.value = true
}

const modify = () => {
  ElMessage({
    message: '采购',
    type: 'success'
  })
  dialogFormVisible.value = false
}
//发送交易确认
const send = () => {
  ElMessage({
    message: '发送交易确认',
    type: 'success'
  })
}
//现货结算
let dialogFormVisible1 = ref(false)
const calculate = () => {
  dialogFormVisible1.value = true
}

const modify1 = () => {
  ElMessage({
    message: '结算',
    type: 'success'
  })
}
//现货持仓导出
const xianhuoexport = () => {
  ElMessage({
    message: '导出现货持仓表格',
    type: 'success'
  })
}

//汇率
let Huilv = reactive({
  refvalue: '',
  finalvalue: ''
})
let dialogFormVisible2 = ref(false)
const calfpl = () => {
  dialogFormVisible2.value = true
}
const modify2 = () => {
  ElMessage({
    message: '计算fpl',
    type: 'success'
  })
}

// 选取功能
let select_list: any = ref([])
let select_list1: any = ref([])
const select = (val: any, id: string) => {
  if (id == 'trade') select_list.value = val
  if (id == 'trade1') select_list1.value = val
}

const handle = (a: number) => {
  if (route.params.id == '1') {
    switch (a) {
      case 0:
        break
      case 1:
        add()
        break
      case 2:
        send()
        console.log(select_list)
        break
    }
  }
}
const handle1 = (a: number) => {
  if (route.params.id == '1') {
    switch (a) {
      case 1:
        ElMessage({
          message: '销售',
          type: 'success'
        })
        console.log(select_list1)
        break
      case 2:
        calculate()
        break
      case 4:
        xianhuoexport()
        break
    }
  }
}
const handle2 = (a: number) => {
  if (route.params.id == '1') {
    switch (a) {
      case 0:
        calfpl()
        break
    }
  }
}
</script>

<style lang="less" scoped>
.contextmenu {
  position: absolute;
  z-index: 3000;
  padding: 5px 0;
  margin: 0;
  font-size: 12px;
  color: #333;
  background: #fff;
  border-radius: 4px;
  box-shadow: 2px 2px 3px 0 rgb(0 0 0 / 30%);
  list-style-type: none;
  font-weight: 400;
}

.contextmenu li {
  padding: 7px 16px;
  margin: 0;
  cursor: pointer;
}

.table-area {
  margin: 0 auto;
  margin-top: 3vh;
  width: 99vw;
}

.double-table {
  display: flex;
  margin: 0 auto;
  width: 99vw;

  .left {
    width: 76%;
  }

  .space {
    width: 2%;
  }

  .right {
    width: 22%;
  }
}
</style>
