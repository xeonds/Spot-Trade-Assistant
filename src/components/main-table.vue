<template>
  <el-card class="main">
    <template #header v-if="props.contain_top">
      <div class="card-header" @click="cancel_select">
        <el-row>
          <slot name="top"></slot>
        </el-row>
        <el-row class="card-nav">
          <div class="operation">
            <el-button
              class="op-button"
              v-for="(item, index) in command"
              :key="index"
              @click.stop="emits('handle', index)"
              >{{ item }}</el-button
            >
          </div>
          <div class="title">{{ props.name }}</div>
        </el-row>
      </div>
    </template>
    <div class="table-area">
      <el-table
        v-el-table-infinite-scroll="
          () => {
            emits('load')
          }
        "
        border
        :header-row-class-name="props.id"
        :highlight-current-row="props.enable_select"
        :data="table_data"
        row-key="id"
        align="left"
        :height="props.height ? props.height + 'vh' : '180'"
        @cell-contextmenu="(row: any, col: any, _: any, event: any,) => {
          emits('menu', row, col, event)
        }
          "
        @row-click="(row: any, col: any) => emits('click_row', row, col)"
        ref="main"
        :row-style="{ height: '3vh' }"
        :header-cell-style="{
          'border-right': '0.2px solid #000',
          'border-bottom': '0.2px solid #000',
          'background-color': '#f7f6f4',
          padding: '1.5px',
          color: '#000',
          'font-size': '1.8vh'
        }"
        :cell-style="{
          'border-right': '0.2px solid #000',
          'border-bottom': '0.2px solid #000',
          padding: '1.5px',
          color: '#000'
        }"
      >
        <slot name="table-extend-start"></slot>
        <!-- 折叠显示列 -->
        <AFTableColumn type="expand" v-if="props.hasfold" :resizable="false">
          <template #default="props">
            <!-- 遍历col数组 -->
            <template v-for="(item, index) in col" :key="item.prop">
              <!-- 找到需要折叠的列 -->
              <template v-if="col[index].fold">
                <div class="table_fold">
                  <div
                    style="
                      font-size: 1.5vh;
                      font-weight: 600;
                      margin-bottom: 1vh;
                    "
                  >
                    {{ col[index].label }}
                  </div>
                  <!-- 将列的数据通过表格呈现 -->
                  <el-table
                    :data="props.row[col[index].prop]"
                    :row-style="{ height: '2.7vh' }"
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
                style="height: 0.9vh"
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
        <slot name="table-extend-end"></slot>
        <!-- 状态表 -->


        <AFTableColumn :resizable="false" :label="props.contain_extend" v-if="props.contain_extend">
          <template #default="scope">
            <slot name="table-extend-end2" v-bind:row="scope"></slot>
          </template>
        </AFTableColumn>


      </el-table>
    </div>
  </el-card>
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
  'enable_select',
  'height',
  'contain_extend'
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

<style lang="less">
.el-table--striped .el-table__body tr.el-table__row--striped.current-row td,
.el-table__body tr.current-row > td {
  background-color: #f3f6f9 !important;
}
.main {
  .el-card__body {
    padding: 0px;
  }
}
</style>
<style lang="less" scoped>
@font-face {
  font-family: NAME;
  src: url('../font/华文琥珀.ttf');
  font-weight: normal;
  font-style: normal;
}

.main {
  border: 1px solid #000;
  box-shadow: none;

  .card-header {
    .title {
      font-size: 1.4rem;
      font-family: NAME, sans-serif;
    }
    .card-nav {
      display: flex;
      flex-flow: row nowrap;
      justify-content: space-between;
    }
  }

  .table-area {
    width: 100%;
    height: 100%;
  }
}

.table_fold {
  width: 50vw;
  margin: 5vh auto;
}
</style>
