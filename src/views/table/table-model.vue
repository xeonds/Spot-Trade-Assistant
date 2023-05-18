<template>
  <div class="model">
    <Table
      class="model-box"
      :col="table_col.UserInfo"
      :table_data="model"
      :contain_top="true"
      :contain_command="true"
      :command="['添加', '编辑', '删除', '导出']"
      :name="'模板'"
      @handle="handle_fresh"
      @menu="handle_fresh"
      @load="handle_fresh"
      @click_row="console.log('clicked')"
      :hasfold="false"
      :enable_select="false"
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

let search_item = reactive(['贸易类型', '订单模式', '交收方式', '购/销'])
let model = ref()
let menus = ref()

const handle_fresh = (name: string) => {
  if (name == '用户管理') {
    model.value.refresh_data()
  }
  if (name == '权限管理') {
    menus.value.refresh_data()
  }
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
</style>
