<template>
  <div class="main">
    <div>用户管理</div>
    <modifyTable
      id="user1"
      name="用户管理"
      :get_data="userapi.UserGet"
      :add_data="userapi.UserAdd"
      :delete_data="userapi.UserDelete"
      :modify_data="userapi.UserRefresh"
      :command="['刷新', '新建']"
      :search="UserCondition"
      @fresh="handle_fresh"
      ref="user"
      :col="table_col.UserInfo"
      :features="table_add.UserInfo"
      :option_get="{ roles: roleOptionsGet }"
    >
    </modifyTable>
    <div>角色管理</div>
    <modifyTable
      id="user2"
      name="角色管理"
      :get_data="userapi.RoleGet"
      :add_data="userapi.RoleAdd"
      :delete_data="userapi.RoleDelete"
      :modify_data="userapi.RoleRefresh"
      :command="['刷新', '新建']"
      :search="RoleCondition"
      @fresh="handle_fresh"
      ref="role"
      :col="table_col.RoleInfo"
      :features="table_add.RoleInfo"
      :option_get="{ menus: meunsOptionsGet }"
      :status_change="userapi.RoleChange"
    ></modifyTable>
    <div>权限管理</div>
    <modifyTable
      id="user3"
      name="权限管理"
      :get_data="userapi.MenusGet"
      :add_data="userapi.MenusAdd"
      :delete_data="userapi.MenusDelete"
      :modify_data="userapi.MenusRefresh"
      :command="['刷新', '新建']"
      :search="MenusCondition"
      @fresh="handle_fresh"
      ref="menus"
      :col="table_col.MenusInfo"
      :features="table_add.MenusInfo"
      :status_change="userapi.MenusChange"
    ></modifyTable>
  </div>
</template>

<script lang="ts" setup>
import modifyTable from '../../components/modify-table.vue'
import * as userapi from '../../http/api/user'
import * as table_col from '../../assets/table_info/table-title'
import * as table_add from '../../assets/table_info/table-add'
//子表示例对象

let user = ref()

// 条件按筛选处理
let UserCondition: { [kye: string]: string | number } = reactive({})

//表单选项
interface RoleList {
  id: number
  name: string
}

const roleOptionsGet = async () => {
  let res = await userapi.RoleGet({})
  let temp: any[] = []
  res.data.forEach((element: RoleList) => {
    temp.push({
      label: element.name,
      value: element.id
    })
  })
  return temp
}

let role = ref()
const meunsOptionsGet = async () => {
  let res = await userapi.MenusGet({})
  let temp: any[] = []
  res.data.forEach((element: any) => {
    temp.push({
      label: element.menuName,
      value: element.id
    })
  })
  return temp
}
// 条件按筛选处理
let RoleCondition: { [kye: string]: string | number } = reactive({})

let menus = ref()

// 条件按筛选处理
let MenusCondition: { [kye: string]: string | number } = reactive({})

const handle_fresh = (name: string) => {
  if (name == '用户管理') {
    user.value.refresh_data()
  }
  if (name == '角色管理') {
    role.value.refresh_data()
  }
  if (name == '权限管理') {
    menus.value.refresh_data()
  }
}
</script>

<style lang="less" scoped>
.main {
  padding: 1vh 0.5vw;
  margin: 0.5vh auto;
  margin-bottom: 0;
  width: 99vw;
  border: 1px solid #000;
  box-sizing: border-box;

  .union {
    display: flex;

    .item {
      width: 50vw;
    }
  }
}
</style>
