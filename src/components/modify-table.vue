<template>
  <Table
    :col="col"
    :table_data="data"
    :contain_top="true"
    :contain_command="true"
    :command="props.command"
    :name="props.name"
    @handle="handle"
    @menu="menu"
    @load="load"
    @click_row="(row:any,col:any)=>{emits('click_row',row,col)}"
  ></Table>
  <ul
    v-show="visible"
    :style="{ left: left + 'px', top: top + 'px' }"
    class="contextmenu"
  >
    <li @click="handleDelete()">删除</li>
    <li @click="handleFresh()">刷新</li>
    <li @click="handleUpdate()">编辑</li>
  </ul>
  <!-- 编辑 -->
  <el-dialog v-model="dialogFormVisible" title="编辑">
    <el-form :model="add_form">
      <el-form-item
        :label="add_label[index]"
        :label-width="200"
        v-for="(item, key, index) in add_form"
        :key="key"
      >
        <el-input v-model="add_form[key]" if="" />
      </el-form-item>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="cancel">取消</el-button>
        <el-button type="primary" @click="modify"> 确定 </el-button>
      </span>
    </template>
  </el-dialog>

  <!-- 增加 -->
  <el-dialog v-model="dialogFormVisible2" title="增加">
    <el-form :model="add_form">
      <el-form-item
        :label="item.label"
        :label-width="200"
        v-for="item in props.features"
        :key="item.label"
      >
        <el-input
          v-model="add_form[item.prop]"
          v-if="item.type == 'string' || item.type == 'number'"
        />
        <el-radio-group
          v-model="add_form[item.prop]"
          v-if="item.type == 'select'"
        >
          <el-radio
            v-for="option in item.options"
            :key="option.label"
            :label="option.value"
            >{{ option.label }}</el-radio
          >
        </el-radio-group>
      </el-form-item>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="cancel1">取消</el-button>
        <el-button type="primary" @click="modify1"> 确定 </el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script lang="ts" setup>
import Table from '../components/main-table.vue'
import { reactive, ref, watch } from 'vue'
import download from '../utils/download'
let enable_get = true

// 传参
/**
 * 使用说明
 * @name 表单名称
 * @get_data  数据获取钩子
 * @add_data  新增数据钩子
 * @delete_data 删除数据钩子
 * @modify_data 修改数据钩子
 * @command 指令
 * @export  导出excel钩子
 * @search 查询条件
 */

const props = defineProps([
  'name',
  'get_data',
  'add_data',
  'delete_data',
  'modify_data',
  'command',
  'export',
  'search',
  'col',
  'features'
])

const emits = defineEmits(['click_row', 'fresh'])

//右键菜单栏
let visible = ref(false)
let top = ref(0)
let left = ref(0)
let select_row = ref()
let select_property = ref()

const closeMenu = () => {
  visible.value = false
}

watch(visible, (value) => {
  if (value) {
    document.body.addEventListener('click', closeMenu)
  } else {
    document.body.removeEventListener('click', closeMenu)
  }
})

let data: any[] = reactive([])
let col: any[] = reactive(props.col)

let current_page = 0
let max_page = 1

const get_data = async () => {
  if (enable_get) {
    enable_get = false
    let temp = props.search
    temp['pageNumber'] = current_page //将管理权限交给表格
    let res = await props.get_data(toRaw(temp))
    for (let i in res.data) {
      data.push(res.data[i])
    }
    max_page = res.pages
    enable_get = true
  }
}

// 滑倒底部自动加载
const load = () => {
  if (current_page < max_page) {
    console.log('load')
    current_page++
    get_data()
  }
}

const refresh_data = () => {
  current_page = 0
  max_page = 1
  data.splice(0, data.length)
  load()
}

let add_form: { [index: string]: string | boolean | number } = reactive({})
let add_label: string[] = reactive([])

//新增框
let dialogFormVisible2 = ref(false)
const handle = (index: number) => {
  switch (index) {
    case 0:
      handleFresh()
      break
    case 1:
      dialogFormVisible2.value = true
      //clear
      add_label.splice(0, add_label.length)
      for (let i in add_form) {
        delete add_form[i]
      }
      //add
      for (let i in props.features) {
        add_form[props.features[i].prop] = ''

        add_label.push(props.features[i].label)
      }
      break
    case 2:
      console.log(2)
      props.export().then((res: any) => {
        download(res, 'excel', props.name + '.xlsx')
      })
      break
  }
}

const cancel1 = () => {
  dialogFormVisible2.value = false
}

const format_form = () => {
  for (let i in props.features) {
    if (props.features[i].type == 'number') {
      add_form[props.features[i].prop] = parseInt(
        <string>add_form[props.features[i].prop]
      )
    }
  }
  console.log(add_form)
}

const modify1 = () => {
  format_form()
  props.add_data(toRaw(<any>add_form)).then((res: any) => {
    dialogFormVisible2.value = false
    handleFresh()
  })
}

const menu = (row: any, col: any, event: any) => {
  event.preventDefault()
  select_row.value = row
  select_property.value = col.property
  var x = event.pageX
  var y = event.pageY
  top.value = y
  left.value = x
  visible.value = true
}

const handleDelete = () => {
  props.delete_data(select_row.value.id)
}

const handleFresh = () => {
  emits('fresh', props.name)
}

let dialogFormVisible = ref(false)

const handleUpdate = () => {
  //clear
  add_label.splice(0, add_label.length)
  for (let i in add_form) {
    delete add_form[i]
  }
  //add
  for (let i in props.features) {
    add_form[props.features[i].prop] =
      select_row.value[props.features[i].prop] || ''
    add_label.push(props.features[i].label)
  }
  dialogFormVisible.value = true
}

const cancel = () => {
  dialogFormVisible.value = false
}

const modify = () => {
  format_form()
  props.modify_data(select_row.value.id, toRaw(add_form)).then((res: any) => {
    dialogFormVisible.value = false
    handleFresh()
  })
}

defineExpose({
  refresh_data
})
</script>

<style lang="less" scoped>
.contextmenu {
  position: absolute;
  z-index: 3000;
  padding: 5px 0;
  margin: 0;
  font-size: 12px;
  color: #333;
  background: #fff;
  border-radius: 4px;
  box-shadow: 2px 2px 3px 0 rgb(0 0 0 / 30%);
  list-style-type: none;
  font-weight: 400;
}

.contextmenu li {
  padding: 7px 16px;
  margin: 0;
  cursor: pointer;
}

.contextmenu li:hover {
  background: #eee;
}
</style>
