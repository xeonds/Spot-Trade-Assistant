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
          emits('handle', index);
        }
      "
    :contain_extend="props.extend"
  >
    <template #table-extend-end2="Slotprops">
      <slot v-bind:row="Slotprops.row"></slot>
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

const props = defineProps(['id', 'col', 'name', 'data', 'command', 'extend'])
const menu = (row: any, col: any, event: any) => {
  event.preventDefault()
  emits('menu', props.name, row, col, event)
}
</script>
