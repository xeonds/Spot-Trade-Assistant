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
          【{{ item }}】
        </div>
      </div>
    </div>

    <div class="table-area">
      <el-table
        v-el-table-infinite-scroll="
          () => {
            emits('load')
          }
        "
        :data="table_data"
        row-key="id"
        align="left"
        show-overflow-tooltip
        :header-cell-style="{
          background: props.color || '#fff',
          color: '#000'
        }"
        height="200"
        @cell-contextmenu="
          (row:any, col:any, _:any, event:any,) => {
            emits('menu', row, col, event)
          }
        "
        @row-click="(row:any, col:any) => emits('click_row', row, col)"
      >
        <template v-for="(item, index) in col">
          <AFTableColumn
            :key="`col_${item.label}`"
            :prop="col[index].prop"
            :label="item.label"
            align="center"
            v-if="item.label != 'id'"
          >
          </AFTableColumn>
        </template>

        <slot></slot>
      </el-table>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { reactive, onMounted } from 'vue'
import Sortable from 'sortablejs'
import AFTableColumn from './AFTableColumn.vue'
let emits = defineEmits(['handle', 'menu', 'click_row', 'load'])
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

//列拖拽
const columnDrop = () => {
  const wrapperTr: HTMLElement = <HTMLElement>(
    document.querySelector('.el-table__header-wrapper tr')
  )
  Sortable.create(wrapperTr, {
    animation: 180,
    delay: 0,
    onEnd: (evt: any) => {
      const oldItem = col[evt.oldIndex]
      col.splice(evt.oldIndex, 1)
      col.splice(evt.newIndex, 0, oldItem)
      console.log(col)
    }
  })
}

onMounted(() => {
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
        cursor: pointer;
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
