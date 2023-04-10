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
    <el-form :model="change_form">
      <el-form-item :label="select_property" :label-width="100">
        <el-input v-model="change_form.content" />
      </el-form-item>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="cancel">Cancel</el-button>
        <el-button type="primary" @click="modify"> Confirm </el-button>
      </span>
    </template>
  </el-dialog>

  <!-- 增加 -->
  <el-dialog v-model="dialogFormVisible2" title="增加">
    <el-form :model="add_form">
      <el-form-item
        :label="key"
        :label-width="100"
        v-for="(item, key) in add_form"
        :key="key"
      >
        <el-input v-model="add_form[key]" />
      </el-form-item>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="cancel1">Cancel</el-button>
        <el-button type="primary" @click="modify1"> Confirm </el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script lang="ts" setup>
import Table from '../components/main-table.vue'
import { reactive, ref, watch } from 'vue'
import download from '../utils/download'
// 传参
const props = defineProps([
  'name',
  'get_data',
  'add_data',
  'delete_data',
  'modify_data',
  'command',
  'export'
])

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
let col: any[] = reactive([])

const get_data = () => {
  data.splice(0, data.length)
  col.splice(0, col.length)
  props.get_data().then((res: any) => {
    for (let i in res.data.data) {
      data.push(res.data.data[i])
    }

    for (let i in res.data.data[0]) {
      col.push({
        prop: i,
        label: i
      })
    }
  })
}

let add_form: { [index: string]: string } = reactive({})

//新增框
let dialogFormVisible2 = ref(false)
const handle = (index: number) => {
  switch (index) {
    case 0:
      handleFresh()
      break
    case 1:
      dialogFormVisible2.value = true
      for (let i in add_form) {
        delete add_form[i]
      }
      for (let i in col) {
        add_form[col[i].prop] = ''
      }
      break
    case 2:
      console.log(2)
      props.export().then((res) => {
        download(res, 'excel', props.name + '.xlsx')
      })
      break
  }
}

const cancel1 = () => {
  dialogFormVisible2.value = false
}

const modify1 = () => {
  add_form['company'] = '0'
  props.add_data(<any>add_form).then((res) => {
    dialogFormVisible2.value = false
  })
}

const menu = (row, col, event) => {
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
  get_data()
}

let change_form = reactive({
  content: ''
})

let dialogFormVisible = ref(false)

const handleUpdate = () => {
  dialogFormVisible.value = true
}

const cancel = () => {
  change_form.content = ''
  dialogFormVisible.value = false
}

const modify = () => {
  select_row.value[select_property.value] = change_form.content
  select_row.value['company'] = 0
  props.modify_data(select_row.value.id, select_row.value).then((res) => {
    change_form.content = ''
    dialogFormVisible.value = false
  })
}

get_data()
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
