<template>
  <div class="table-area">
    <TableFind :search_item="search_item"></TableFind>
    <Table
      :contain_command="true"
      :table_data="data"
      :contain_top="true"
      :property="property"
      :command="command"
      @handle="handle"
      name="合同模板"
      color="#e7e6e6"
      :label="label"
      :haveslot="true"
    >
      <template #tr_extend>
        <button style="margin-left: 1vw; font-size: 0.7vw">上传</button>
        <button style="margin-left: 1vw; font-size: 0.7vw">查看</button>
      </template>
    </Table>
  </div>
</template>

<script lang="ts" setup>
import Table from '../../components/main-table.vue'
import { reactive } from 'vue'
import TableFind from '../../components/table-find.vue'

let data = reactive([
  {
    m1: '内贸',
    m2: '一般（固定值）',
    m3: '现货',
    m4: '购',
    m5: '0.0003'
  },
  {
    m1: '内贸',
    m2: '一般（固定值）',
    m3: '现货',
    m4: '购',
    m5: '0.0003'
  },
  {
    m1: '内贸',
    m2: '一般（固定值）',
    m3: '现货',
    m4: '购',
    m5: '0.0003'
  },
  {
    m1: '内贸',
    m2: '一般（固定值）',
    m3: '现货',
    m4: '购',
    m5: '0.0003'
  },
  {
    m1: '内贸',
    m2: '一般（固定值）',
    m3: '现货',
    m4: '购',
    m5: '0.0003'
  },
  {
    m1: '内贸',
    m2: '一般（固定值）',
    m3: '现货',
    m4: '购',
    m5: '0.0003'
  },
  {
    m1: '内贸',
    m2: '一般（固定值）',
    m3: '现货',
    m4: '购',
    m5: '0.0003'
  }
])
let search_item = reactive(['贸易类型', '订单模式', '交收方式', '购/销'])
let label = reactive([
  '贸易类型',
  '订单模式',
  '交收方式',
  '购销方向',
  '印花税率',
  '合同模板'
])
let property = reactive(['m1', 'm2', 'm3', 'm4', 'm5'])
let command = reactive(['添加', '删除', '修改'])

const handle = (a: number) => {
  console.log(a)
}
</script>

<style lang="less" scoped>
.table-area {
  margin: 0 auto;
  width: 99vw;
}
</style>
