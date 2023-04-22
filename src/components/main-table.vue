<template>
  <div
    class="main"
    :style="{ width: props.width ? props.width + 'vw' : '98vw' }"
  >
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
        :header-row-class-name="props.id"
        style="border: 1px solid #000"
        highlight-current-row
        :data="table_data"
        row-key="id"
        align="left"
        show-overflow-tooltip
        height="180"
        @cell-contextmenu="
          (row:any, col:any, _:any, event:any,) => {
            emits('menu', row, col, event)
          }
        "
        @row-click="(row:any, col:any) => emits('click_row', row, col)"
      >
        <template v-for="(item, index) in col" :key="`col_${item.label}`">
          <AFTableColumn
            v-if="col[index].prop == 'status' && props.status_change"
            label="状态"
            width="120"
          >
            <template #default="scope">
              <el-switch
                active-value="1"
                inactive-value="0"
                v-model="table_data[scope.$index].status"
                @change="change_status(table_data[scope.$index].id)"
              />
            </template>
          </AFTableColumn>

          <AFTableColumn
            v-else
            :prop="col[index].prop"
            :label="item.label"
            align="center"
          >
          </AFTableColumn>
        </template>

        <!-- 状态表 -->
      </el-table>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { reactive, onMounted } from 'vue'
import Sortable from 'sortablejs'
import AFTableColumn from './AFTableColumn.vue'
let emits = defineEmits(['handle', 'menu', 'click_row', 'load'])
let props = defineProps([
  'contain_command',
  'command',
  'name',
  'color',
  'contain_top',
  'table_data',
  'col',
  'id',
  'status_change',
  'width'
])

let table_data = reactive(<any>props.table_data)
let col = reactive(<any>props.col)

let command = reactive(<any>props.command)

//列拖拽
const columnDrop = () => {
  const wrapperTr: HTMLElement = <HTMLElement>(
    document.querySelector('.' + props.id)
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

//状态表切换功能
const change_status = (id: string) => {
  props.status_change(id)
}
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
}
</style>
