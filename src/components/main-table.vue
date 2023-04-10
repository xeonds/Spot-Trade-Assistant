<template>
  <div class="main">
    <div class="top" v-if="props.contain_top">
      <div class="name">{{ props.name }}</div>

      <div v-if="props.contain_command" class="command">
        <div
          class="command-item title"
          v-for="(item, index) in command"
          :key="index"
          @click="emits('handle', index)"
        >
          {{ item }}
        </div>
      </div>
    </div>

    <div class="table-area">
      <el-table
        :data="table_data"
        row-key="id"
        align="left"
        :cell-style="cell_style"
        :header-cell-style="{
          background: props.color || '#fff',
          color: '#000'
        }"
        height="200"
        @cell-contextmenu="
          (row, col, _, event) => {
            emits('menu', row, col, event)
          }
        "
      >
        <el-table-column
          v-for="(item, index) in col"
          :key="`col_${index}`"
          :prop="col[index].prop"
          :label="item.label"
          :min-width="150"
        >
        </el-table-column>
        <slot></slot>
      </el-table>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { reactive, onMounted } from 'vue'
import Sortable from 'sortablejs'

const cell_style = () => {
  return { 'white-space': 'nowrap' }
}

let emits = defineEmits(['handle', 'menu'])
let props = defineProps({
  contain_command: Boolean,
  command: Object,
  name: String,
  color: String,
  contain_top: Boolean,
  table_data: Object,
  col: Object
})

let table_data = reactive(<any>props.table_data)
let col = reactive(<any>props.col)
let command = reactive(<any>props.command)

const rowDrop = () => {
  const tbody = document.querySelector('.el-table__body-wrapper tbody')

  Sortable.create(tbody, {
    onEnd({ newIndex, oldIndex }: { newIndex: number; oldIndex: number }) {
      const currRow = table_data.splice(oldIndex, 1)[0]
      table_data.splice(newIndex, 0, currRow)
    }
  })
}
//列拖拽
const columnDrop = () => {
  const wrapperTr = document.querySelector('.el-table__header-wrapper tr')
  Sortable.create(wrapperTr, {
    animation: 180,
    delay: 0,
    onEnd: (evt: any) => {
      const oldItem = col[evt.oldIndex]
      col.splice(evt.oldIndex, 1)
      col.splice(evt.newIndex, 0, oldItem)
    }
  })
}

onMounted(() => {
  rowDrop()
  columnDrop()
})
</script>

<style lang="less" scoped>
@font-face {
  font-family: NAME;
  src: url('../font/华文琥珀.ttf');
  font-weight: normal;
  font-style: normal;
}

.title {
  font-weight: 600;
}

.main {
  margin: 0 auto;
  width: 100%;

  .top {
    position: relative;
    padding: 1vh 1vw;
    min-height: 5vh;
    box-sizing: border-box;
    background-color: #e7e6e6;

    .name {
      position: absolute;
      right: 2vw;
      bottom: 2vh;
      font-size: 2.2vh;
      font-family: NAME, sans-serif;
    }

    .command {
      display: flex;
      margin-top: auto 0;

      .command-item {
        margin-right: 2vw;
      }
    }
  }

  .table-area {
    table {
      border-collapse: collapse;
      width: 100%;
    }

    tr {
      height: 4vh;
    }

    th {
      padding: 1vh 1vw;
      font-size: 0.7vw;
      border: 1px solid black;
      font-weight: 800;
    }

    td {
      padding: 1vh 1vw;
      border: 1px solid black;
    }
  }
}
</style>
