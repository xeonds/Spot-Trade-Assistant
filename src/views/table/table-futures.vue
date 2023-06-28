<template>
  <div class="model">
    <Table
      class="model-box"
      id="table-future"
      :col="table_col.FutureInfo"
      :table_data="data"
      :contain_top="true"
      :contain_command="true"
      :command="command"
      :name="'保值成交记录'"
      @click_row="handle"
      :hasfold="false"
      :enable_select="false"
      :height="32"
    >
      <template #top>
        <TableFind :search_item="search_item" class="table-find"></TableFind>
      </template>
    </Table>
  </div>
</template>

<script lang="ts" setup>
import Table from '../../components/main-table.vue'
import TableFind from '../../components/table-find.vue'
import { reactive } from 'vue'
import * as table_col from '../../assets/table_info/table-title'

let data = reactive([
  {
    f1: '2023-06-22',
    f2: '建仓',
    f3: '华一',
    f4: '一部',
    f5: '海通',
    f6: 'Ru2305',
    f7: '开',
    f8: '卖',
    f9: '橡胶',
    f10: '全乳胶',
    f11: '151',
    f12: '',
    f13: '吨',
    f14: '12150',
    f15: '',
    f16: '人民币',
    f17: '',
    f18: '',
    f19: ''
  },
  {
    f1: '2023-06-22',
    f2: '建仓',
    f3: '华一',
    f4: '一部',
    f5: '海通',
    f6: 'Ru2305',
    f7: '开',
    f8: '卖',
    f9: '橡胶',
    f10: '全乳胶',
    f11: '151',
    f12: '',
    f13: '吨',
    f14: '12150',
    f15: '',
    f16: '人民币',
    f17: '',
    f18: '',
    f19: ''
  },
  {
    f1: '2023-06-22',
    f2: '建仓',
    f3: '华一',
    f4: '一部',
    f5: '海通',
    f6: 'Ru2305',
    f7: '开',
    f8: '卖',
    f9: '橡胶',
    f10: '全乳胶',
    f11: '151',
    f12: '',
    f13: '吨',
    f14: '12150',
    f15: '',
    f16: '人民币',
    f17: '',
    f18: '',
    f19: ''
  }
])
let search_item = reactive([
  '成交日期',
  '保值类型',
  '账套',
  '业务部门',
  '期贷公司',
  '期贷合约',
  '品种',
  '规格',
  '头寸号'
])
let command = reactive(['保值开仓'])

const handle = (a: number) => {
  console.log(a)
}
</script>

<style lang="less">
.model {
  .model-box {
    margin-inline: 1rem !important;
    margin-top: 1rem !important;
  }
}

.table-find {
  margin-bottom: 20px;
}

.table-op-group {
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
}
</style>
