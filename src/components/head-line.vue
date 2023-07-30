<template>
  <el-header class="main">
    <el-row class="row1">
      <div class="logo">百连贸易系统</div>
      <div class="row1-right">
        <el-popover placement="bottom" trigger="hover">
          <template #reference>
            <el-button link type="primary" class="menu-link-item"
              >欢迎，{{ username }}【{{ role }}】</el-button
            >
          </template>
          <el-row>
            <el-button
              type="primary"
              link
              class="pop-menu-button"
              @click="user_info"
              >个人信息</el-button
            >
          </el-row>
          <el-row>
            <el-button
              type="primary"
              link
              class="pop-menu-button"
              @click="$emit('setting')"
              >界面设置</el-button
            >
          </el-row>
        </el-popover>
        <el-button link type="primary" class="menu-link-item" @click="logout"
          >登出</el-button
        >
      </div>
    </el-row>
    <el-menu
      class="row2"
      mode="horizontal"
      :default-active="activeIndex"
      :router="true"
      @select="handleSelect"
    >
      <template v-for="nav in navs">
        <el-sub-menu v-if="nav.children" :key="nav.index" :index="nav.index">
          <template #title>
            <span>{{ nav.name }}</span>
          </template>
          <el-menu-item
            v-for="item in nav.children"
            :key="item.index"
            :index="item.index"
            class="el-submenu-item"
            :route="item.route"
          >
            <span>{{ item.name }}</span>
          </el-menu-item>
        </el-sub-menu>
        <el-menu-item
          v-else
          :key="`${nav.index}-item`"
          :index="nav.index"
          :route="nav.route"
        >
          <span>{{ nav.name }}</span>
        </el-menu-item>
      </template>
    </el-menu>
  </el-header>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { logout as basicLogout } from '../http/api/utils'
import { useRouter } from 'vue-router'
import serviceAxios from '../http'

const activeIndex = ref('1')
const user = localStorage.getItem('username')
const router = useRouter()
const models = ref([
  {
    index: '3-1',
    name: '合同模板',
    route: '/main/model/1'
  },
  {
    index: '3-2',
    name: '提单模板',
    route: '/main/model/2'
  }
])
const emits = defineEmits(['select', 'setting'])
const navs = ref([
  {
    index: '1',
    name: '人员管理',
    route: '/main/memberManage'
  },
  {
    index: '2',
    name: '资料',
    route: '/main/information/1',
    children: [
      {
        index: '2-1',
        name: '设置公司账套部门',
        route: '/main/information/1'
      },
      {
        index: '2-2',
        name: '设置往来单位资料、部门',
        route: '/main/information/2'
      },
      {
        index: '2-3',
        name: '设置商品资料',
        route: '/main/information/3'
      },
      {
        index: '2-4',
        name: '设置币种、订单模式',
        route: '/main/information/4'
      },
      {
        index: '2-5',
        name: '仓储协议、费率登记',
        route: '/main/information/5'
      }
    ]
  },
  {
    index: '3',
    name: '模板',
    route: '/main/model/0',
    children: models
  },
  {
    index: '4',
    name: '贸易',
    route: '/main/trade/1',
    children: [
      {
        index: '4-1',
        name: '购销订单录入',
        route: '/main/trade/1'
      },
      {
        index: '4-2',
        name: '合同',
        route: '/main/trade/2'
      },
      {
        index: '4-3',
        name: '采购付款申请',
        route: '/main/trade/3'
      },
      {
        index: '4-4',
        name: '销售收款匹配',
        route: '/main/trade/4'
      },
      {
        index: '4-5',
        name: '余款对账',
        route: '/main/trade/5'
      },
      {
        index: '4-6',
        name: '结余款',
        route: '/main/trade/6'
      },
      {
        index: '4-7',
        name: '发票确认',
        route: '/main/trade/7'
      }
    ]
  },
  {
    index: '5',
    name: '货管',
    route: '/main/goods-manage',
    children: [
      {
        index: '5-1',
        name: '收货',
        route: '/main/goods-manage'
      },
      {
        index: '5-2',
        name: '发货',
        route: '/main/goods-manage'
      },
      {
        index: '5-3',
        name: '实数确认',
        route: '/main/goods-manage'
      },
      {
        index: '5-4',
        name: '货物变更及对账',
        route: '/main/goods-manage'
      },
      {
        index: '5-5',
        name: '进口及对账',
        route: '/main/goods-manage'
      },
      {
        index: '5-6',
        name: '仓储费及对账',
        route: '/main/goods-manage'
      },
      {
        index: '5-7',
        name: '对账单付款申请',
        route: '/main/goods-manage'
      }
    ]
  },
  {
    index: '6',
    name: '库管',
    route: '/main/storehouse-manage',
    children: [
      {
        index: '6-1',
        name: '入库',
        route: '/main/storehouse-manage'
      },
      {
        index: '6-2',
        name: '出库',
        route: '/main/storehouse-manage'
      }
    ]
  },
  {
    index: '7',
    name: '财务',
    route: '/main/finance',
    children: [
      {
        index: '7-1',
        name: '付款',
        route: '/main/finance'
      },
      {
        index: '7-2',
        name: '收款',
        route: '/main/finance'
      }
    ]
  },
  {
    index: '8',
    name: '期货',
    route: '/main/futures',
    children: [
      {
        index: '8-1',
        name: '保值录入（V1.1）',
        route: '/main/futures'
      }
    ]
  },
  {
    index: '9',
    name: '统计报表',
    route: '/main/statistics',
    children: [
      {
        index: '9-1',
        name: '现货盈亏',
        route: '/main/statistics'
      },
      {
        index: '9-2',
        name: '期现盈亏',
        route: '/main/statistics'
      },
      {
        index: '9-3',
        name: '现货资金',
        route: '/main/statistics'
      },
      {
        index: '9-4',
        name: '现货开票统计',
        route: '/main/statistics'
      },
      {
        index: '9-5',
        name: '现货库存明细',
        route: '/main/statistics'
      }
    ]
  },
  {
    index: '10',
    name: '监控',
    route: '/main/spy',
    children: [
      {
        index: '10-1',
        name: '现货合同',
        route: '/main/spy'
      },
      {
        index: '10-2',
        name: '现货交易',
        route: '/main/spy'
      }
    ]
  }
])

let username = ref('')
let role = ref('')

const logout = () => {
  basicLogout()
  localStorage.removeItem('username')
  localStorage.removeItem('token')
  router.replace('/login')
}

const user_info = () => {
  router.push('/user')
}

// const getModels = () => {
//   serviceAxios({
//     url: '/template/category',
//     method: 'GET'
//   })
//     .then((res: any) => {
//       models.value = res
//     })
//     .catch((err) => {
//       console.log(err)
//     })
// }

const handleSelect = (index: string) => {
  activeIndex.value = index
  let res: any = navs.value.filter((item) => {
    if (item.index == index) return true
    else {
      if (item.children)
        return item.children.filter((ii) => ii.index == index).length > 0
      else return false
    }
  })[0]
  if (res.children != null) {
    res = res.children.filter((item: any) => item.index == index)[0]
  }
  emits('select', res)
}

if (user) {
  username.value = user
  serviceAxios({
    url: '/user/page',
    method: 'GET',
    data: {
      username: user
    }
  })
    .then((res) => {
      const res_user = res.data.filter((item: any) => item.userName == user)[0]
      if (res_user.roles.length == 0) {
        role.value = '普通用户'
      } else {
        role.value = res_user.roles[0].name
      }
    })
    .catch((err) => {
      console.log(err)
    })
}
// getModels()
</script>

<style lang="less">
.el-sub-menu__title {
  background-color: var(--el-color-primary);
  color: #fff !important;
  border-bottom: none !important;
  border-radius: 0.4rem;

  &:hover {
    background-color: var(--el-color-primary) !important;
    border: #fff 2px solid !important;
  }

  &.is-active {
    color: var(--el-color-primary) !important;
    background-color: #fff;
  }
}
</style>

<style lang="less" scoped>
@font-face {
  font-family: MAIN;
  src: url('../assets/font/Songti.ttc');
  font-weight: normal;
  font-style: normal;
}

.main {
  height: 4rem;
  color: #fff;
  background: var(--el-color-primary);
  box-sizing: border-box;
  font-size: 1.2rem;
  font-weight: 600;

  .row1 {
    height: 2rem;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    padding-top: 0.5rem;

    .logo {
      font-family: MAIN;
      transition: filter 300ms;
      will-change: filter;
    }

    .logo:hover {
      filter: drop-shadow(0 0 2em #646cffaa);
    }

    .logo.vue:hover {
      filter: drop-shadow(0 0 2em #42b883aa);
    }
  }

  .row2 {
    height: 1.75rem;
    margin-top: 0.25rem;
  }
}

.el-menu {
  background-color: var(--el-color-primary);
  color: #fff !important;
  border-bottom: none !important;
  border-radius: 0.4rem;
  & > * {
    margin-inline: 0.2rem;
  }
  .el-menu-item {
    background-color: var(--el-color-primary);
    color: #fff;
    border-radius: 0.4rem;
    border-bottom: 0px;

    &:hover {
      background-color: var(--el-color-primary);
      color: #fff;
      border: #fff 2px solid;
    }

    &.is-active {
      background-color: #fff;
      color: var(--el-color-primary);
    }
  }
}

.el-submenu-item {
  color: var(--el-color-primary) !important;
  background-color: #fff !important;

  &:hover {
    border: var(--el-color-primary) 2px solid !important;
    background-color: none !important;
  }

  &.is-active {
    background-color: var(--el-color-primary) !important;
    color: #fff !important;
  }
}

.menu-link-item {
  color: #fff !important;
  border-bottom: 1px solid #fff;
  border-radius: 0;
  margin-inline: 1rem;
  padding: 0.5rem;
  border-bottom: 2px solid #fff;
}

.pop-menu-button {
  width: 100%;
  height: 2rem;
}
</style>
