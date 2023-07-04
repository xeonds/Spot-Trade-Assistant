<template>
  <div class="model">
    <Table
      class="model-box"
      id="table-model"
      :col="table_col.ModelInfo"
      :table_data="data"
      :contain_top="true"
      :contain_command="true"
      :command="command"
      :name="'模板'"
      :hasfold="false"
      :enable_select="false"
      :height="32"
    >
      <template #top>
        <TableFind :search_item="search_item" class="table-find"></TableFind>
      </template>
      <template #table-extend-start>
        <el-table-column type="selection" width="55" align="center">
          <template #header>选择</template>
        </el-table-column>
      </template>
      <template #table-extend-end>
        <el-table-column label="操作" width="240" align="center">
          <template #default>
            <div class="table-op-group">
              <el-button>上传</el-button>
              <el-button>查看</el-button>
            </div>
          </template>
        </el-table-column>
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
let search_item = reactive([
  {
    label: '贸易类型',
    prop: 'm1'
  },
  {
    label: '订单模式',
    prop: 'm1'
  },
  {
    label: '交收方式',
    prop: 'm1'
  },
  {
    label: '购/销',
    prop: 'm1'
  }
])
let command = reactive(['添加', '修改', '删除', '导出'])

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
