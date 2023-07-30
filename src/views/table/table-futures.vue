<template>
  <Table
    class="model-box"
    id="table-future-1"
    :col="table_col.FutureInfo"
    :table_data="form1_filter"
    :contain_top="true"
    :contain_command="true"
    :command="commands.command"
    :name="'保值成交记录'"
    @handle="handle"
    :hasfold="false"
    :enable_select="false"
    :height="33"
  >
    <template #command>
      <el-input
        class="inline-search"
        v-model="formInline.table1"
        placeholder="输入关键字，用空格隔开"
        clearable
      />
    </template>
  </Table>
  <Table
    class="model-box"
    id="table-future-2"
    :col="table_col.FutureInfo2"
    :table_data="form2_filter"
    :contain_top="true"
    :contain_command="true"
    :command="commands.command2"
    :name="'保值头寸'"
    @handle="handle2"
    :hasfold="false"
    :enable_select="false"
    :height="33"
  >
    <template #command>
      <el-input
        class="inline-search"
        v-model="formInline.table2"
        placeholder="输入关键字，用空格隔开"
        clearable
      />
    </template>
  </Table>
  <el-dialog v-model="isShow.table1.menu1" title="保值开仓">
    <el-form label-width="100">
      <el-form-item label="开/平仓">
        <el-input v-model="formInline.add1.m1"></el-input>
      </el-form-item>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="isShow.table1.menu1 = false" class="cancel" plain
          >取消</el-button
        >
        <el-button type="primary" class="comfirm" plain>确定</el-button>
      </span>
    </template>
  </el-dialog>
  <el-dialog v-model="isShow.table2.menu1" title="保值平仓">
    <el-form label-width="100">
      <el-form-item label="期贷合约数据">
        <el-input v-model="data.form2" clearable style="width: 300px" />
      </el-form-item>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="isShow.table2.menu1 = false" class="cancel" plain
          >取消</el-button
        >
        <el-button
          type="primary"
          class="comfirm"
          plain
          @click="isShow.table1.menu1 = false"
          >确定</el-button
        >
      </span>
    </template>
  </el-dialog>
  <el-dialog v-model="isShow.table2.menu2" title="期货结算价">
    <el-form label-width="100">
      <el-form-item label="期贷合约数据">
        <el-input v-model="data.form2" clearable style="width: 300px" />
      </el-form-item>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="isShow.table2.menu2 = false" class="cancel" plain
          >取消</el-button
        >
        <el-button type="primary" class="comfirm" plain>确定</el-button>
      </span>
    </template>
  </el-dialog>
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
  command: ['保值开仓'],
  command2: ['保值平仓', '期贷结算价', '导出']
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
const form2_filter = computed(() => {
  return data.form2.filter((item) => {
    return item.f1.indexOf(formInline.table2) > -1
  })
})
</script>

<style lang="less">
.table-find {
  margin-bottom: 20px;
}

.table-op-group {
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
}
</style>
