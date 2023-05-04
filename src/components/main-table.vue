<template>
  <div
    class="main"
    :style="{ width: props.width ? props.width + 'vw' : '98vw' }"
  >
    <div class="top" v-if="props.contain_top" @click="cancel_select">
      <div class="name">{{ props.name }}</div>

      <div v-if="props.contain_command" class="command">
        <div
          class="command-item title"
          v-for="(item, index) in command"
          :key="index"
          @click.stop="emits('handle', index)"
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
        border
        :header-row-class-name="props.id"
        style="border: 1px solid #000"
        :highlight-current-row="props.enable_select"
        :data="table_data"
        row-key="id"
        align="left"
        height="180"
        @cell-contextmenu="
          (row:any, col:any, _:any, event:any,) => {
            emits('menu', row, col, event)
          }
        "
        @row-click="(row:any, col:any) => emits('click_row', row, col)"
        ref="main"
        :row-style="{ height: '0' }"
        :header-cell-style="{
          'border-right': '0.2px solid #000',
          'border-bottom': '0.2px solid #000',
          padding: '1.5px',
          color: '#000'
        }"
        :cell-style="{
          'border-right': '0.2px solid #000',
          'border-bottom': '0.2px solid #000',
          padding: '1.5px',
          color: '#000'
        }"
      >
        <!-- 折叠显示列 -->
        <AFTableColumn type="expand" v-if="props.hasfold" :resizable="false">
          <template #default="props">
            <!-- 遍历col数组 -->
            <template v-for="(item, index) in col" :key="item.prop">
              <!-- 找到需要折叠的列 -->
              <template v-if="col[index].fold">
                <div class="table_fold">
                  <div style="font-size: 1.5vh; font-weight: 600; margin-bottom: 1vh;">
                    {{ col[index].label }}
                  </div>
                  <!-- 将列的数据通过表格呈现 -->
                  <el-table
                    :data="props.row[col[index].prop]"
                    :row-style="{ height: '0' }"
                    :header-cell-style="{
                      'border-right': '0.2px solid #000',
                      'border-bottom': '0.2px solid #000',
                      padding: '1.5px',
                      color: '#000'
                    }"
                    :cell-style="{
                      'border-right': '0.2px solid #000',
                      'border-bottom': '0.2px solid #000',
                      padding: '1.5px',
                      color: '#000'
                    }"
                  >
                    <el-table-column
                      v-for="item2 in col[index].son_labels"
                      :label="item2.label"
                      :prop="item2.prop"
                      :key="item2.prop"
                    />
                  </el-table>
                </div>
              </template>
            </template>
          </template>
        </AFTableColumn>
        <!-- 默认显示列 -->
        <template v-for="(item, index) in col" :key="`col_${item.label}`">
          <!-- 状态调整 -->
          <AFTableColumn
            v-if="
              col[index].prop == 'status' &&
              props.status_change &&
              !col[index].fold
            "
            label="状态"
            width="120"
            :resizable="false"
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
          <!-- 普通显示 -->
          <AFTableColumn
            :resizable="false"
            v-else-if="!col[index].fold"
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
let main = ref()
let emits = defineEmits([
  'handle',
  'menu',
  'click_row',
  'load',
  'cancel_select'
])

const cancel_select = () => {
  if (props.enable_select) {
    main.value.setCurrentRow()
    emits('cancel_select', props.name)
  }
}

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
  'width',
  'hasfold',
  'enable_select'
])

interface COL {
  label: string
  prop: string
  fold: boolean
  son_labels: any
}

let table_data = reactive(<any>props.table_data)
let col: COL[] = reactive(<any>props.col)

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

//提取折叠列
// let flod_data: any = reactive({})
// const get_floddta = () => {
//   if (props.hasfold) {
//     for (let index = 0; index < col.length; index++) {
//       if (col[index].fold) {
//         flod_data[col[index].label] = {
//           data: table_data[col[index].prop],
//           labels: col[index].son_labels
//         }
//       }
//     }
//   }
// }

onMounted(() => {
  if (!props.hasfold) {
    columnDrop()
  }
})

//状态表切换功能
const change_status = (id: string) => {
  props.status_change(id)
}
</script>

<style>
.el-table--striped .el-table__body tr.el-table__row--striped.current-row td,
.el-table__body tr.current-row > td {
  background-color: #f3f6f9 !important;
}
</style>
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
    border: 1px solid #000;
    border-bottom: 0;
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
.table_fold {
  width: 50vw;
  margin: 5vh auto;
}
</style>
