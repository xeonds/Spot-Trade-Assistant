<template>
  <Table
    class="model-box"
    id="table-model"
    :col="props.col"
    :table_data="props.data"
    :contain_top="true"
    :contain_command="true"
    :command="props.command"
    :name="props.name"
    :hasfold="false"
    :enable_select="false"
    @menu="menu"
    @handle="
        (index:any) => {
          emits('handle', index)
        }
      "
    @click_row="console.log('clicked')"
  >
    <template #table-extend-start> </template>
    <template #table-extend-end>
      <el-table-column label="操作" width="240" align="center">
        <template>
          <div class="table-op-group">
            <el-button>上传</el-button>
            <el-button>查看</el-button>
          </div>
        </template>
      </el-table-column>
    </template>
  </Table>
</template>

<script lang="ts" setup>
import Table from './main-table.vue'
import { reactive } from 'vue'

const emits = defineEmits(['menu', 'handle'])

/**
 * @id 表格id
 * @col 表格列
 * @name 表格标题
 * @data 表格数据
 * @command 表格命令
 */

const props = defineProps(['id', 'col', 'name', 'data', 'command'])

const menu = (row: any, col: any, event: any) => {
  event.preventDefault()
  emits('menu', props.name, row, col)
}
</script>
