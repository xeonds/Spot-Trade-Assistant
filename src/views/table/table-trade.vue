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

  <div v-if="route.params.id === '1'">
    <div class="table-area">
      <TableFind :search_item="search_item"></TableFind>
      <Modify_table
        :data="data"
        :command="command"
        name="贸易记录"
        id="trade1"
        :col="table_col.TradeInfo"
        @handle="handle"
        @menu="menu"
      >
        <template #default="props">
          <el-button @click="test(props)"></el-button>
        </template>
      </Modify_table>
    </div>
    <div class="table-area">
      <TableFind :search_item="search_item"></TableFind>
      <div class="double-table">
        <div class="left">
          <Modify_table
            :data="data1"
            :command="command1"
            name="现货持仓"
            id="trade2"
            :col="table_col.PositionInfo"
            @handle="handle1"
            @menu="menu"
          ></Modify_table>
        </div>

        <div class="space"></div>
        <div class="right">
          <Modify_table
            :data="data2"
            :command="command2"
            name="现货持仓"
            id="trade2"
            :col="table_col.Tcost"
            @handle="handle2"
            @menu="menu"
          ></Modify_table>
        </div>
      </div>
    </div>
  </div>
  <div v-if="route.params.id === '2'">
    <div class="table-area">
      <TableFind
        :search_item="[
          '交易日期',
          '合同生成状态',
          '购/销',
          '账套',
          '业务部门',
          '贸易商',
          '贸易商部门',
          '贸易类型',
          '订单模式',
          '交货方式',
          '订单号'
        ]"
      ></TableFind>
      <Modify_table
        :data="data"
        :command="['生成合同']"
        name="购销记录"
        id="trade1"
        :col="table_col.Gouxiaojilu"
        @handle="handle"
        @menu="menu"
      >
      </Modify_table>
    </div>
    <div class="table-area">
      <TableFind
        :search_item="[
          '合同日期',
          '够/销',
          '账套',
          '业务部门',
          '合同签订状',
          '合同归档状态',
          '印花税付款申请状态'
        ]"
      ></TableFind>
      <Modify_table
        :data="data"
        :command="['生成合同']"
        name="购销合同"
        id="trade2"
        :col="table_col.Gouxiaohetong"
        @handle="handle"
        @menu="menu"
      >
      </Modify_table>
    </div>
    <div class="table-area">
      <TableFind
        :search_item="[
          '付款申请日期',
          '付款状态',
          '账套',
          '业务部门',
          '税务机关',
          '付款申请单号'
        ]"
      ></TableFind>
      <Modify_table
        :data="data"
        :command="['生成合同']"
        name="购销记录"
        id="trade3"
        :col="table_col.Yinhuashui"
        @handle="handle"
        @menu="menu"
      >
      </Modify_table>
    </div>
  </div>
  <div v-if="route.params.id === '3'">
    <div class="table-area">
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
      <Modify_table
        :data="data"
        :command="['付款申请']"
        name="采购记录"
        id="trade1"
        :col="table_col.Gouxiaojilu"
        @handle="handle"
        @menu="menu"
      >
      </Modify_table>
    </div>
    <div class="table-area">
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
      <Modify_table
        :data="data"
        :command="[]"
        name="购销合同"
        id="trade2"
        :col="table_col.Caigoushenqing"
        @handle="handle"
        @menu="menu"
      >
      </Modify_table>
    </div>
  </div>
  <div v-if="route.params.id === '4'">
    <div class="table-area">
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
      <Modify_table
        :data="data"
        :command="['']"
        name="购销记录"
        id="trade1"
        :col="table_col.Gouxiaojilu"
        @handle="handle"
        @menu="menu"
      >
      </Modify_table>
    </div>
    <div class="table-area">
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
      <Modify_table
        :data="data"
        :command="['打印收款确认单']"
        name="购销合同"
        id="trade2"
        :col="table_col.Gouxiaohetong"
        @handle="handle"
        @menu="menu"
      >
      </Modify_table>
    </div>
  </div>
  <div v-if="route.params.id === '5'">
    <div class="table-area">
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
      <Modify_table
        :data="data"
        :command="['余额对账']"
        name="贸易记录"
        id="trade3"
        :col="table_col.Maoyijilu"
        @handle="handle"
        @menu="menu"
      >
      </Modify_table>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Modify_table from '../../components/modify-table2.vue'
import TableFind from '../../components/table-find.vue'
import * as table_col from '../../assets/table_info/table-title'
import { useRoute } from 'vue-router'
const route = useRoute()

const test = (a) => {
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

const menu = (name, row, col, event) => {
  mfrow.value = row
  mfproperty.value = col.property
  left.value = event.pageX
  top.value = event.pageY
  visible.value = true
}

const handleUpdate = () => {
  console.log(1)
}
const handleFresh = () => {
  console.log(2)
}
const handleDelete = () => {
  console.log(3)
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

let search_item = reactive([
  '日期',
  '账套',
  '业务部门',
  '贸易商',
  '贸易商部门',
  '购/销',
  '币种',
  '品种',
  '规格',
  '品牌',
  '数量',
  '数量单位',
  '价格',
  '币种',
  '贸易类型',
  '订单模式',
  '交货方式'
])
let label = reactive([
  '日期',
  '账套',
  '业务部门',
  '贸易商',
  '贸易商部门',
  '购/销',
  '币种',
  '品种',
  '规格',
  '品牌',
  '数量',
  '数量单位',
  '价格',
  '币种',
  '贸易类型',
  '订单模式',
  '交货方式'
])
let property = reactive([
  'm1',
  'm2',
  'm3',
  'm4',
  'm5',
  'm6',
  'm7',
  'm8',
  'm9',
  'm10',
  'm11',
  'm12',
  'm13',
  'm14',
  'm15',
  'm16',
  'm17'
])
let command = reactive(['采购', '发送完成交易确认'])

let search_item1 = reactive([
  '采购日期',
  '张涛',
  '业务部门',
  '购/销',
  '币种',
  '规格',
  '品牌',
  '贸易类型',
  '订单模式',
  '交货方式'
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

let label1 = reactive([
  '采购日期',
  '账套',
  '业务部门',
  '贸易商',
  '品种',
  '规格',
  '品牌',
  '持仓量',
  '数量单位',
  '成本价',
  '币种',
  '贸易类型',
  '订单模式',
  '交货方式',
  '币种结算价',
  '浮盈'
])

let property1 = reactive([
  'm1',
  'm2',
  'm3',
  'm4',
  'm5',
  'm6',
  'm7',
  'm8',
  'm9',
  'm10',
  'm11',
  'm12',
  'm13',
  'm14',
  'm15',
  'm16'
])
let command1 = reactive(['销售', '现货结算价', '导出'])

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

let label2 = reactive(['参考汇率', '参考成本', '本币结算价', '浮盈'])
let property2 = reactive(['m1', 'm2', 'm3', 'm4'])
let command2 = reactive(['汇率'])

const handle = (a: number) => {
  console.log(a)
}
const handle1 = (a: number) => {
  console.log(a)
}
const handle2 = (a: number) => {
  console.log(a)
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
