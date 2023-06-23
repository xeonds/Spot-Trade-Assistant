<template>
  <div v-if="route.params.id === '1'">
    <div class="table-area">
      <TableFind :search_item="search_item"></TableFind>
      <Table
        :contain_command="true"
        :contain_top="true"
        :table_data="data"
        :property="property"
        :command="command"
        @handle="handle"
        name="贸易记录"
        id="trade1"
        :col="table_col.TradeInfo"
      ></Table>
    </div>
    <div class="table-area">
      <TableFind :search_item="search_item"></TableFind>
      <div class="double-table">
        <div class="left">
          <Table
            :contain_command="true"
            :contain_top="true"
            :table_data="data1"
            :property="property1"
            :command="command1"
            @handle="handle1"
            name="现货持仓"
            :label="label1"
            id="trade2"
            :col="table_col.PositionInfo"
          ></Table>
        </div>

        <div class="space"></div>
        <div class="right">
          <Table
            :contain_command="true"
            :contain_top="true"
            :table_data="data2"
            :property="property2"
            :command="command2"
            @handle="handle2"
            name="进口成本参考"
            :label="label2"
            id="trade3"
            :col="table_col.Tcost"
          ></Table>
        </div>
      </div>
    </div>
  </div>
  <div v-if="route.params.id === '2'">
    <div class="table-area">
      <TableFind :search_item="search_item"></TableFind>
      <Table
        :contain_command="true"
        :contain_top="true"
        :table_data="data"
        :property="property"
        :command="command"
        @handle="handle"
        name="购销记录"
        id="trade1"
        :col="table_col.TradeInfo"
      ></Table>
    </div>
    <div class="table-area">
      <TableFind :search_item="search_item"></TableFind>
      <Table
        :contain_command="true"
        :contain_top="true"
        :table_data="data"
        :property="property"
        :command="command"
        @handle="handle"
        name="购销合同"
        id="trade2"
        :col="table_col.TradeInfo"
      ></Table>
    </div>
    <div class="table-area">
      <TableFind :search_item="search_item"></TableFind>
      <Table
        :contain_command="true"
        :contain_top="true"
        :table_data="data"
        :property="property"
        :command="command"
        @handle="handle"
        name="印花税付款申请"
        id="trade3"
        :col="table_col.TradeInfo"
      ></Table>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Table from '../../components/main-table.vue'
import TableFind from '../../components/table-find.vue'
import * as table_col from '../../assets/table_info/table-title'
import { useRoute } from 'vue-router'
const route = useRoute()

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
