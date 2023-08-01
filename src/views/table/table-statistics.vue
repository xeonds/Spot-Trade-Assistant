<template>
  <Table
    class="model-box"
    id="table-future-1"
    :col="table_col.StatisticsInfo"
    :table_data="form1_filter"
    :contain_top="true"
    :contain_command="true"
    :command="commands.command"
    :name="'现货盈亏记录'"
    @handle="handle"
    :hasfold="false"
    :enable_select="false"
    :height="64"
  >
    <template #top>
      <div
        style="
          display: flex;
          flex-flow: row;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 0.5rem;
          width: 100%;
        "
      >
        <div>
          <span>
            <el-button type="primary" plain>每日统计</el-button>
            <el-button type="primary" plain>累计统计</el-button>
          </span>
        </div>
        <div>
          <span>
            <el-text>起始日：</el-text>
            <el-text>终止日：</el-text>
          </span>
        </div>
      </div>
    </template>
    <template #command>
      <el-input
        class="inline-search"
        v-model="formInline.table1"
        placeholder="输入关键字，用空格隔开"
        clearable
      />
    </template>
    <template #table-extend-end>
      <el-table-column label="每日/累计现货库存">
        <!-- <el-table-column label="现货结算价" />
          <el-table-comumn label="持仓量" />
          <el-table-comumn label="浮动盈亏" />
          <el-table-comumn label="库存资金占用" /> -->
      </el-table-column>
    </template>
  </Table>
</template>

<script lang="ts" setup>
import Table from '../../components/main-table.vue'
import { reactive, computed } from 'vue'
import * as table_col from '../../assets/table_info/table-title'

let formInline = reactive({
  table1: '',
  table2: '',
  add1: { m1: '' }
})
let isShow = reactive({
  table1: {
    menu1: false
  },
  table2: {
    menu1: false,
    menu2: false
  }
})
let data = reactive({
  form1: [
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
  ],
  form2: [
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
  ],
  input: {
    input1: '',
    input2: ''
  }
})
const commands = reactive({
  command: ['导出', '绘图']
})

const handle = (a: number) => {
  switch (a) {
    case 0:
      isShow.table1.menu1 = true
      break
  }
}
const handle2 = (a: number) => {
  switch (a) {
    case 0:
      isShow.table2.menu1 = true
      break
    case 1:
      isShow.table2.menu2 = true
      break
    case 2:
      ElMessage({
        message: '开发中',
        type: 'info'
      })
      break
  }
}
const form1_filter = computed(() => {
  return data.form1.filter((item) => {
    return item.f1.indexOf(formInline.table1) > -1
  })
})
</script>
