<template>
  <Table
    :contain_command="true"
    :contain_top="true"
    :command="command"
    :table_data="data"
    :property="property"
    @handle="handle"
    name="现货收货记录"
    :label="label"
    :haveslot="true"
    id="storehouse1"
  >
    <template #top>
      <TableFind :search_item="search_item"></TableFind>
    </template>
    <template #tr_extend>
      <button>查看</button>
    </template>
  </Table>
  <el-row>
    <el-col :span="12">
      <Table
        :contain_command="true"
        :contain_top="true"
        :table_data="search_item1"
        :property="property1"
        :command="command1"
        @handle="handle1"
        name="货物批次"
        :label="label1"
        id="storehouse2"
      >
        <template #top>
          <TableFind :search_item="search_item"></TableFind>
        </template>
        <template #tr_extend>
          <div>
            <button style="margin-right: 2vw">上传</button>
            <button>查看</button>
          </div>
        </template>
      </Table>
    </el-col>
    <el-col :span="12">
      <Table
        :contain_command="true"
        :contain_top="true"
        :table_data="data2"
        :property="property2"
        :command="command2"
        @handle="handle2"
        name="输信息"
        :label="label2"
        id="storehouse3"
      ></Table>
    </el-col>
    <Table
      :contain_command="true"
      :contain_top="true"
      :table_data="data3"
      :property="property3"
      :command="command3"
      @handle="handle3"
      name="入库记录"
      :label="label3"
      :haveslot="true"
      id="storehouse4"
    >
      <template #top>
        <TableFind :search_item="search_item"></TableFind>
      </template>
      <template #tr_extend>
        <button style="margin-left: 1vw; font-size: 0.7vw">上传</button>
        <button style="margin-left: 1vw; font-size: 0.7vw">查看</button>
      </template>
    </Table>
  </el-row>
  <Table
    :contain_command="true"
    :contain_top="true"
    :table_data="data4"
    :property="property4"
    :command="command4"
    @handle="handle4"
    name="销售贸易记录"
    id="storehouse5"
    :label="label4"
  ></Table>
  <Table
    :contain_command="true"
    :contain_top="true"
    :table_data="data5"
    :property="property5"
    :command="command5"
    @handle="handle5"
    name="可售库存"
    :label="label5"
    id="storehouse6"
  ></Table>
  <Table
    :contain_command="true"
    :contain_top="true"
    :table_data="data6"
    :property="property6"
    :command="command6"
    @handle="handle6"
    name="出库记录"
    :label="label6"
    id="storehouse7"
  >
    <template #top>
      <TableFind :search_item="search_item"></TableFind>
    </template>
  </Table>
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
  '入库状态',
  '仓库',
  '分库区',
  '账套',
  '业务部门',
  '贸易商',
  '提单号'
])
let label = reactive([
  '收货日期',
  '账套',
  '业务部门',
  '贸易商',
  '品种',
  '规格',
  '品牌',
  '数量',
  '实数',
  '仓库',
  '分库区',
  '货主',
  '收货单种类',
  '原始入库日期',
  '存储卡号',
  '收货单号',
  '入库状态',
  '收货单扫描件'
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
let command = ['现货入库']
let search_item1 = reactive(['登记日期', '在途状态', '运输方式', '提单号'])
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
  '登记日期',
  '账套',
  '业务部门',
  '贸易商',
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
  'm15'
])
let command1 = reactive(['远期入库'])

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

let label2 = reactive(['车船号', '数量', '发货日期', '到货日期', '备注'])
let property2 = reactive(['m1', 'm2', 'm3', 'm4', 'm5'])
let command2 = reactive(['信息登记'])

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
let search_item3 = reactive([
  '在库状态',
  '货主',
  '单据种类',
  '仓库',
  '分库区',
  '账套',
  '业务部门',
  '品种',
  '规格',
  '品牌'
])
let label3 = reactive([
  '入库日期',
  '账套',
  '业务部门',
  '仓库',
  '分库区',
  '品种',
  '规格',
  '品牌',
  '入库数量',
  '入库实数',
  '单位',
  '货主',
  '入库单种类',
  '卡号',
  '入库单号',
  '货位号',
  '入库方式',
  '在库状态',
  '入库单扫描件'
])
let property3 = reactive([
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
  'm17',
  'm18'
])
let command3 = reactive(['现货签收'])

let data4 = reactive([
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

let label4 = reactive([
  '交易日期',
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
  '交货方式',
  '发货状态'
])
let property4 = reactive([
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
let command4 = reactive([
  '发货状态',
  '交易日期',
  '账套',
  '业务部门',
  '贸易商',
  '贸易商部门',
  '贸易类型',
  '订单模式',
  '交货方式'
])

let data5 = reactive([
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

let label5 = reactive([
  '交易日期',
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
  '交货方式',
  '发货状态'
])
let property5 = reactive([
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
let command5 = reactive([
  '发货状态',
  '交易日期',
  '账套',
  '业务部门',
  '贸易商',
  '贸易商部门',
  '贸易类型',
  '订单模式',
  '交货方式'
])

let data6 = reactive([
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

let label6 = reactive([
  '交易日期',
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
  '交货方式',
  '发货状态'
])
let property6 = reactive([
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
let command6 = reactive([
  '发货状态',
  '交易日期',
  '账套',
  '业务部门',
  '贸易商',
  '贸易商部门',
  '贸易类型',
  '订单模式',
  '交货方式'
])

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
const handle4 = (a: number) => {
  console.log(a)
}
const handle5 = (a: number) => {
  console.log(a)
}
const handle6 = (a: number) => {
  console.log(a)
}
</script>

<style lang="less" scoped>
.table-area {
  margin-top: 3vh;
}

.double-table {
  display: flex;

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
