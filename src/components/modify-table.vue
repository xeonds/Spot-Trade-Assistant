<template>
  <Table
    :id="props.id"
    :col="col"
    :table_data="data"
    :contain_top="true"
    :contain_command="true"
    :command="props.command"
    :name="props.name"
    @handle="handle"
    @menu="menu"
    @load="load"
    @click_row="(row: any, col: any) => { emits('click_row', row, col) }"
    :status_change="props.status_change"
    :width="props.width"
    :height="props.height"
    :hasfold="props.hasfold"
    :enable_select="props.enable_select"
    @cancel_select="cancel_select"
  >
  </Table>
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
  <el-dialog v-model="dialogFormVisible" :title="'编辑' + props.name">
    <el-form :model="add_form" :rules="props.rules">
      <el-form-item
        :label="item.label"
        :label-width="200"
        v-for="item in props.features"
        :key="item.label"
        :prop="item.prop"
      >
        <el-input
          v-model="add_form[item.prop]"
          v-if="item.type == 'string' || item.type == 'number'"
          input-style="color:#000;border-color:'#2f5496'"
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

        <el-select
          v-model="add_form[item.prop]"
          multiple
          placeholder="选择"
          style="width: 240px"
          v-if="item.type == 'multiselect'"
        >
          <el-option
            v-for="option in multioptions[item.prop]"
            :key="option.value"
            :label="option.label"
            :value="option.value"
          />
        </el-select>
        <el-select
          v-model="add_form[item.prop]"
          placeholder="选择"
          style="width: 240px"
          v-if="item.type == 'singleselect'"
        >
          <el-option
            v-for="option in singleoptions[item.prop]"
            :key="option.value"
            :label="option.label"
            :value="option.value"
          />
        </el-select>
      </el-form-item>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <button @click="cancel" class="cancel">取消</button>
        <button @click="modify" class="comfirm">确定</button>
      </span>
    </template>
  </el-dialog>

  <!-- 增加 -->
  <el-dialog v-model="dialogFormVisible2" :title="'增加' + props.name">
    <el-form
      :model="add_form"
      style="display: flex; flex-wrap: wrap"
      :rules="props.rules"
    >
      <el-form-item
        :label="item.label"
        :label-width="150"
        v-for="item in props.features"
        :key="item.label"
        style="width: 20vw; color: #000"
        :prop="item.prop"
      >
        <el-input
          v-model="add_form[item.prop]"
          input-style="color:#000;border-color:#2f5496"
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
        <el-select
          v-model="add_form[item.prop]"
          multiple
          placeholder="选择"
          style="width: 240px"
          v-if="item.type == 'multiselect'"
        >
          <el-option
            v-for="option in multioptions[item.prop]"
            :key="option.value"
            :label="option.label"
            :value="option.value"
          />
        </el-select>
        <el-select
          v-model="add_form[item.prop]"
          placeholder="选择"
          style="width: 240px"
          v-if="item.type == 'singleselect'"
        >
          <el-option
            v-for="option in singleoptions[item.prop]"
            :key="option.value"
            :label="option.label"
            :value="option.value"
          />
        </el-select>
      </el-form-item>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <button @click="cancel1" class="cancel" style="width: 6vw">取消</button>
        <button @click="modify1" class="comfirm" style="width: 6vw">
          确定
        </button>
      </span>
    </template>
  </el-dialog>

  <!-- 删除确认框 -->
  <el-dialog v-model="comfirm" title="删除确认" width="30%" align-center>
    <span>是否确定要删除本条记录</span>
    <template #footer>
      <span class="dialog-footer">
        <button @click="comfirm = false" class="ccancel" style="width: 6vw">
          取消
        </button>
        <button @click="deletebyid" class="comfirm" style="width: 6vw">
          确定
        </button>
      </span>
    </template>
  </el-dialog>
</template>

<script lang="ts" setup>
import Table from '../components/main-table.vue'
import { reactive, ref, watch } from 'vue'
import { ElMessage } from 'element-plus'
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
 * @option_get 表单动态选项
 * @status_change 状态切换
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
  'features',
  'option_get',
  'id',
  'status_change',
  'change_base',
  'width',
  'hasfold',
  'rules',
  'enable_select',
  'enAddBeforeSelect',
  'height',
  'read_only'
])
const cancel_select = (name: string) => {
  if (props.enable_select) {
    emits('cancel_select', name)
  }
}

const emits = defineEmits(['click_row', 'fresh', 'cancel_select'])

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

let add_form: { [index: string]: any } = reactive({}) //表单对象
let add_label: string[] = reactive([]) //表单标题
let multioptions: { [name: string]: any } = reactive({})
let singleoptions: { [name: string]: any } = reactive({})

//新增框
let dialogFormVisible2 = ref(false)

let allow_fresh = true
let allow_add = true
let allow_export = true

const handle = (index: number) => {
  switch (index) {
    case 0:
      if (allow_fresh) {
        handleFresh()
        allow_fresh = false
        setTimeout(() => {
          allow_fresh = true
        }, 3000)
      }
      break
    case 1:
      if (allow_add) {
        if (props.enAddBeforeSelect) {
          //关联并选择
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
            if (props.features[i].type == 'multiselect') {
              props.option_get[props.features[i].prop]().then((res: any) => {
                multioptions[props.features[i].prop] = res
              })
            } else if (props.features[i].type == 'singleselect') {
              props.option_get[props.features[i].prop]().then((res: any) => {
                singleoptions[props.features[i].prop] = res
              })
            }
            if (props.features[i].prop == props.change_base)
              add_form[props.features[i].prop] = props.search[props.change_base]
          }
        } else if (
          (props.change_base && props.search[props.change_base]) || //关联表条件关联字段已经具备
          !props.change_base //非关联表
        ) {
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
            if (props.features[i].type == 'multiselect') {
              props.option_get[props.features[i].prop]().then((res: any) => {
                multioptions[props.features[i].prop] = res
              })
            }
          }
        } else {
          ElMessage({
            message: '若要添加，请先进行首选项选择',
            type: 'warning'
          })
        }
        allow_add = false
        setTimeout(() => {
          allow_add = true
        }, 3000)
      }
      break
    case 2:
      if (allow_export) {
        props.export()
        allow_export = false
        setTimeout(() => {
          allow_export = true
        }, 3000)
      }

      break
  }
}

const cancel1 = () => {
  dialogFormVisible2.value = false
}

const format_form = () => {
  for (let i in props.features) {
    if (props.features[i].type == 'number') {
      add_form[props.features[i].prop] = Number(
        <string>add_form[props.features[i].prop]
      )
    }
  }
  console.log(add_form)
}

const modify1 = () => {
  format_form()
  if (props.enAddBeforeSelect) {
    props
      .add_data(add_form[props.change_base], toRaw(<any>add_form))
      .then((res: any) => {
        dialogFormVisible2.value = false
        refresh_data()
      })
  } else if (props.change_base) {
    props
      .add_data(props.search[props.change_base], toRaw(<any>add_form))
      .then((res: any) => {
        dialogFormVisible2.value = false
        refresh_data()
      })
  } else {
    props.add_data(toRaw(<any>add_form)).then((res: any) => {
      dialogFormVisible2.value = false
      refresh_data()
    })
  }
}

const menu = (row: any, col: any, event: any) => {
  event.preventDefault()
  if (!props.read_only) {
    select_row.value = row
    select_property.value = col.property
    var x = event.pageX
    var y = event.pageY
    top.value = y
    left.value = x
    visible.value = true
  }
}

let comfirm = ref(false)

const handleDelete = () => {
  comfirm.value = true
}

const deletebyid = () => {
  props.delete_data(select_row.value.id).then((res: any) => {
    comfirm.value = false
    handleFresh()
  })
}

const handleFresh = () => {
  emits('fresh', props.name)
}

interface MultiSlect {
  id: number
}
//修改
let dialogFormVisible = ref(false)

const handleUpdate = () => {
  //clear

  if (
    (props.change_base && props.search[props.change_base]) || //关联表条件关联字段已经具备
    !props.change_base || //非关联表
    props.enAddBeforeSelect
  ) {
    add_label.splice(0, add_label.length)
    for (let i in add_form) {
      delete add_form[i]
    }
    //add

    for (let i in props.features) {
      if (props.features[i].type == 'multiselect') {
        props.option_get[props.features[i].prop]().then((res: any) => {
          multioptions[props.features[i].prop] = res
          add_form[props.features[i].prop] = []
          select_row.value[props.features[i].prop].forEach(
            (element: MultiSlect) => {
              add_form[props.features[i].prop].push(element.id)
            }
          )
          add_label.push(props.features[i].label)
        })
      } else if (props.features[i].type == 'singleselect') {
        props.option_get[props.features[i].prop]().then((res: any) => {
          singleoptions[props.features[i].prop] = res
          add_form[props.features[i].prop] = ''
          add_form[props.features[i].prop] =
            select_row.value[props.features[i].prop]
          add_label.push(props.features[i].label)
        })
      } else {
        add_form[props.features[i].prop] =
          select_row.value[props.features[i].prop]
        add_label.push(props.features[i].label)
      }
    }
    dialogFormVisible.value = true
  }
}

const cancel = () => {
  dialogFormVisible.value = false
}

const modify = () => {
  format_form()
  if (props.change_base) {
    props
      .modify_data(
        props.search[props.change_base],
        select_row.value.id,
        toRaw(<any>add_form)
      )
      .then((res: any) => {
        dialogFormVisible.value = false
        refresh_data()
      })
  } else {
    props
      .modify_data(select_row.value.id, toRaw(<any>add_form))
      .then((res: any) => {
        dialogFormVisible.value = false
        refresh_data()
      })
  }
}

defineExpose({
  refresh_data
})
</script>
<style>
.el-form-item__label {
  color: #000;
  font-weight: 500;
}
</style>
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

.cancel {
  cursor: pointer;
  padding: 0.5vh 0.8vw;
  margin-right: 1vw;
  color: #2f5496;
  background-color: #fff;
  border: 1.5px solid #2f5496;
  border-radius: 5px;
}

.comfirm {
  cursor: pointer;
  padding: 0.5vh 0.8vw;
  color: #fff;
  background-color: #2f5496;
  border: 1.5px solid #2f5496;
  border-radius: 5px;
}

.comfirm:hover {
  background-color: #007eba;
}

.cancel:hover {
  background-color: #cddcf5;
}
</style>
