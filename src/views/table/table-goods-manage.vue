<template>
  <Table
    :contain_command="true"
    :contain_top="true"
    :table_data="data"
    :property="property"
    @handle="handle"
    name="采购贸易记录"
    id="goods1"
    :label="label"
  >
    <template #top>
      <TableFind :search_item="search_item"></TableFind>
    </template>
  </Table>
  <Table
    :contain_command="true"
    :contain_top="true"
    :table_data="data1"
    :property="property1"
    :command="command1"
    @handle="handle1"
    name="现货收货记录"
    :label="label1"
    :haveslot="true"
    id="goods2"
  >
    <template #top>
      <TableFind :search_item="search_item"></TableFind>
    </template>
    <template #tr_extend>
      <div style="height: 1.5vh">
        <button style="margin-right: 2vw">上传</button>
        <button>查看</button>
      </div>
    </template>
  </Table>
  <el-row>
    <el-col :span="16">
      <Table
        :contain_command="true"
        :contain_top="true"
        :table_data="data2"
        :property="property2"
        :command="command2"
        @handle="handle2"
        name="货物批次"
        :label="label2"
        :haveslot="true"
        id="goods3"
      >
        <template #top>
          <TableFind :search_item="search_item"></TableFind>
        </template>
        <template #tr_extend>
          <div style="height: 1.5vh">
            <button style="margin-right: 2vw">上传</button>
            <button>查看</button>
          </div>
        </template>
      </Table>
    </el-col>
    <el-col :span="8">
      <Table
        :contain_command="true"
        :contain_top="true"
        :table_data="data3"
        :property="property3"
        :command="command3"
        @handle="handle3"
        name="在途信息"
        :label="label3"
        id="goods4"
      ></Table>
    </el-col>
  </el-row>
</template>

<script lang="ts" setup>
import Table from '../../components/main-table.vue'
import { reactive } from 'vue'
import TableFind from '../../components/table-find.vue'

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
  '收获状态',
  '交易日期',
  '账套',
  '业务部门',
  '贸易商',
  '贸易商部门',
  '贸易类型',
  '订单模式',
  '交收方式'
])
let label = reactive([
  '日期',
  '账套',
  '业务部门',
  '贸易商',
  '贸易商部门',
  '品种',
  '规格',
  '品牌',
  '数量',
  '单位',
  '单价',
  '币种',
  '贸易类型',
  '订单模式',
  '交收方式',
  '收获状态'
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
  'm16'
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
let search_item1 = reactive([
  '收货日期',
  '仓库',
  '分库区',
  '单据种类',
  '货主',
  '收货单号',
  '存储卡号'
])
let label1 = reactive([
  '收货日期',
  '数量',
  '实数',
  '仓库',
  '分库区',
  '品种',
  '规格',
  '品牌',
  '收货单种类',
  '货主',
  '收货单号',
  '存储卡号',
  '入库状态',
  '原始入库日期',
  '收货单扫描件'
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
  'm14'
])
let command1 = reactive(['现货签收'])

let search_item2 = reactive(['登记日期', '货物状态', '运输方式', '提单号'])
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

let label2 = reactive([
  '登记日期',
  '货物状态',
  '运输方式',
  '品种',
  '规格',
  '品牌',
  '数量',
  '提单号',
  '始发地',
  '目的地',
  '预计运期',
  '提单扫描件'
])

let property2 = reactive([
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
  'm11'
])
let command2 = reactive(['在途登记'])

let data3 = reactive([
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

let label3 = reactive(['车船号', '数量', '发货日期', '到货日期', '备注'])
let property3 = reactive(['m1', 'm2', 'm3', 'm4', 'm5'])
let command3 = reactive(['信息登记'])

const handle = (a: number) => {
  console.log(a)
}
const handle1 = (a: number) => {
  console.log(a)
}
const handle2 = (a: number) => {
  console.log(a)
}
const handle3 = (a: number) => {
  console.log(a)
}
</script>

<style lang="less" scoped></style>
