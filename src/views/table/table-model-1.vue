<template>
  <div class="table-rows">
    <el-row>
      <el-col :span="24">
        <Table
          class="model-box"
          id="table-model"
          :col="table_col.ModelInfo"
          :table_data="data"
          :contain_top="true"
          :contain_command="true"
          :command="command"
          :name="'合同模板'"
          :hasfold="false"
          :enable_select="false"
          :height="60"
        >
          <template #table-extend-start>
            <el-table-column type="selection" width="55" align="center">
              <template #header>选择</template>
            </el-table-column>
          </template>
          <template #table-extend-end>
            <el-table-column label="操作" width="240" align="center">
              <template #default>
                <div class="table-op-group">
                  <el-button type="primary" link>上传</el-button>
                  <el-button type="primary" link>查看</el-button>
                </div>
              </template>
            </el-table-column>
          </template>
        </Table>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts" setup>
import Table from '../../components/main-table.vue'
import { reactive } from 'vue'
import * as table_col from '../../assets/table_info/table-title'

let data = reactive([
  {
    m1: '内贸',
    m2: '一般（固定值）',
    m3: '现货',
    m4: '购',
    m5: '0.0003'
  }
])
let command = reactive(['添加', '修改', '删除', '导出'])
let _data = ref({
  title: '合同模板',
  table_data: []
})
</script>

<style lang="less">
.table-rows {
  .el-row {
    margin: 1rem;
  }
}
</style>
