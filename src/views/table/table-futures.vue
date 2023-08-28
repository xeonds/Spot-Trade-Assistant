<template>
  <form-dialog width="80%" v-model="isShow.table1.menu1" title="保值开仓" :col="table_add.Baozhikaicang"
    @submit="(data: any) => postAPIWrapper(data, futureAPI.addBaozhikaicang, '添加记录成功', '添加失败')"
    @cancel="isShow.table1.menu1 = false" />
  <form-dialog width="80%" v-model="isShow.table2.menu1" title="保值平仓" :col="table_add.Baozhipingcang"
    @submit="(data: any) => console.log(data)"
    @cancel="isShow.table2.menu1 = false" />
  <form-dialog v-model="isShow.table2.menu2" title="期货结算价" :col="table_add.Qihuojiesuanjia"
    @submit="(data: any) => console.log(data)"
    @cancel="isShow.table2.menu2 = false" />
  <el-row>
    <el-col :span="24">
      <Table id="table-future-1" :col="table_col.FutureInfo" :table_data="form1_filter" :contain_top="true"
        :contain_command="true" :command="commands.command" :name="'保值成交记录'" @handle="handle" :hasfold="false"
        :enable_select="false" :height="33">
        <template #command>
          <el-input class="inline-search" v-model="formInline.table1" placeholder="输入关键字，用空格隔开" clearable />
        </template>
      </Table>
    </el-col>
  </el-row>
  <el-row>
    <el-col :span="24">
      <Table id="table-future-2" :col="table_col.FutureInfo2" :table_data="form2_filter" :contain_top="true"
        :contain_command="true" :command="commands.command2" :name="'保值头寸'" @handle="handle2" :hasfold="false"
        :enable_select="false" :height="33">
        <template #command>
          <el-input class="inline-search" v-model="formInline.table2" placeholder="输入关键字，用空格隔开" clearable />
        </template>
      </Table>
    </el-col>
  </el-row>
</template>

<script lang="ts" setup>
import Table from '@/components/main-table.vue'
import { reactive, computed } from 'vue'
import * as table_col from '@/assets/table_info/table-title'
import * as table_add from '@/assets/table_info/table-add'
import formDialog from '@/components/form-dialog.vue';
import * as futureAPI from '@/http/api/future'
import * as infoAPI from '@/http/api/infomation'
import { ElMessage } from 'element-plus';

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
const postAPIWrapper = (data: any, handler: any, success: string, error: string) => {
  handler(data).then(() => {
    ElMessage({
      message: success,
      type: 'success'
    })
  }).catch((err: any) => {
    ElMessage({
      message: `${error} ${err}`,
      type: 'error'
    })
  })
}

</script>
