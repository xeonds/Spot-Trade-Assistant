<template>
  <el-header class="main">
    <el-row class="row1">
      <div class="logo">百连贸易系统</div>
      <div class="row1-right">
        <el-button link type="primary" class="menu-link-item" @click="user_info"
          >欢迎，{{ username }}【{{ role }}】</el-button
        >
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
    >
      <el-menu-item index="1" route="/main/memberManage">人员管理</el-menu-item>
      <el-sub-menu index="2">
        <template #title>资料</template>
        <el-menu-item
          class="el-submenu-item"
          index="2-1"
          route="/main/information/1"
          >设置公司账套部门</el-menu-item
        >
        <el-menu-item
          class="el-submenu-item"
          index="2-2"
          route="/main/information/2"
          >设置往来单位资料、部门</el-menu-item
        >
        <el-menu-item
          class="el-submenu-item"
          index="2-3"
          route="/main/information/3"
          >设置商品资料</el-menu-item
        >
        <el-menu-item
          class="el-submenu-item"
          index="2-4"
          route="/main/information/4"
          >设置币种、订单模式</el-menu-item
        >
        <el-menu-item
          class="el-submenu-item"
          index="2-5"
          route="/main/information/5"
          >仓储协议、费率登记</el-menu-item
        >
      </el-sub-menu>
      <el-sub-menu index="3">
        <template #title>模板</template>
        <el-menu-item
          v-for="nav in models"
          class="el-submenu-item"
          :index="`3-${nav.id}`"
          :route="`/main/model/${nav.id}`"
          :key="nav.id"
          >{{ nav.name }}</el-menu-item
        >
      </el-sub-menu>
      <el-sub-menu index="4">
        <template #title>贸易</template>
        <el-menu-item class="el-submenu-item" index="4-1" route="/main/trade/1"
          >购销订单录入</el-menu-item
        >
        <el-menu-item class="el-submenu-item" index="4-2" route="/main/trade/2"
          >合同</el-menu-item
        >
        <el-menu-item class="el-submenu-item" index="4-3" route="/main/trade/3"
          >采购付款申请</el-menu-item
        >
        <el-menu-item class="el-submenu-item" index="4-4" route="/main/trade/4"
          >销售收款匹配</el-menu-item
        >
        <el-menu-item class="el-submenu-item" index="4-5" route="/main/trade/5"
          >余款对账</el-menu-item
        >
        <el-menu-item class="el-submenu-item" index="4-6" route="/main/trade/6"
          >结余款</el-menu-item
        >
        <el-menu-item class="el-submenu-item" index="4-7" route="/main/trade/7"
          >发票确认</el-menu-item
        >
      </el-sub-menu>
      <el-sub-menu index="5">
        <template #title>货管</template>
        <el-menu-item
          class="el-submenu-item"
          index="5-1"
          route="/main/goods-manage"
          >收货</el-menu-item
        >
        <el-menu-item
          class="el-submenu-item"
          index="5-2"
          route="/main/goods-manage"
          >发货</el-menu-item
        >
        <el-menu-item
          class="el-submenu-item"
          index="5-3"
          route="/main/goods-manage"
          >实数确认</el-menu-item
        >
        <el-menu-item
          class="el-submenu-item"
          index="5-4"
          route="/main/goods-manage"
          >货物变更及对账</el-menu-item
        >
        <el-menu-item
          class="el-submenu-item"
          index="5-5"
          route="/main/goods-manage"
          >进口及对账</el-menu-item
        >
        <el-menu-item
          class="el-submenu-item"
          index="5-6"
          route="/main/goods-manage"
          >仓储费及对账</el-menu-item
        >
        <el-menu-item
          class="el-submenu-item"
          index="5-7"
          route="/main/goods-manage"
          >对账单付款申请</el-menu-item
        >
      </el-sub-menu>
      <el-sub-menu index="6">
        <template #title>库管</template>
        <el-menu-item
          class="el-submenu-item"
          index="6-1"
          route="/main/storehouse-manage"
          >入库
        </el-menu-item>
        <el-menu-item
          class="el-submenu-item"
          index="6-2"
          route="/main/storehouse-manage"
          >出库
        </el-menu-item>
      </el-sub-menu>
      <el-sub-menu index="7">
        <template #title>财务</template>
        <el-menu-item class="el-submenu-item" index="7-1" route="/main/finance"
          >付款</el-menu-item
        >
        <el-menu-item class="el-submenu-item" index="7-2" route="/main/finance"
          >收款</el-menu-item
        >
      </el-sub-menu>
      <el-sub-menu index="8">
        <template #title>期货</template>
        <el-menu-item class="el-submenu-item" index="8-1" route="/main/futures"
          >保值录入（V1.1）</el-menu-item
        >
      </el-sub-menu>
      <el-sub-menu index="9">
        <template #title>统计报表</template>
        <el-menu-item
          class="el-submenu-item"
          index="9-1"
          route="/main/statistics"
          >现货盈亏</el-menu-item
        >
        <el-menu-item
          class="el-submenu-item"
          index="9-2"
          route="/main/statistics"
          >期现盈亏</el-menu-item
        >
        <el-menu-item
          class="el-submenu-item"
          index="9-3"
          route="/main/statistics"
          >现货资金</el-menu-item
        >
        <el-menu-item
          class="el-submenu-item"
          index="9-4"
          route="/main/statistics"
          >现货开票统计</el-menu-item
        >
        <el-menu-item
          class="el-submenu-item"
          index="9-5"
          route="/main/statistics"
          >现货库存明细</el-menu-item
        >
      </el-sub-menu>
      <el-sub-menu index="10">
        <template #title>监控</template>
        <el-menu-item class="el-submenu-item" index="10-1" route="/main/spy"
          >现货合同
        </el-menu-item>
        <el-menu-item class="el-submenu-item" index="10-2" route="/main/spy"
          >现货交易
        </el-menu-item>
      </el-sub-menu>
    </el-menu>
    <el-row class="row3">
      <el-tabs
        v-model="editableTabsValue"
        class="row3"
        closable
        @tab-remove="removeTab"
      >
        <el-tab-pane
          v-for="item in editableTabs"
          :key="item.name"
          :label="item.title"
          :name="item.name"
        >
          {{ item.content }}
        </el-tab-pane>
      </el-tabs>
    </el-row>
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
const models = ref([{ name: '全部', id: 0 }])
const editableTabsValue = ref('2')
const editableTabs = ref([
  {
    title: 'Tab 1',
    name: '1',
    content: 'Tab 1 content'
  },
  {
    title: 'Tab 2',
    name: '2',
    content: 'Tab 2 content'
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

const getModels = () => {
  serviceAxios({
    url: '/template/category',
    method: 'GET'
  })
    .then((res: any) => {
      models.value = res
    })
    .catch((err) => {
      console.log(err)
    })
}

const removeTab = (targetName: string) => {
  const tabs = editableTabs.value
  let activeName = editableTabsValue.value
  if (activeName === targetName) {
    tabs.forEach((tab, index) => {
      if (tab.name === targetName) {
        const nextTab = tabs[index + 1] || tabs[index - 1]
        if (nextTab) {
          activeName = nextTab.name
        }
      }
    })
  }
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
getModels()
</script>

<style lang="less">
@import '../assets/style/theme.less';

.el-sub-menu__title {
  background-color: @theme-color-primary;
  color: #fff !important;
  border-bottom: none !important;
  border-radius: 0.4rem;

  &:hover {
    background-color: @theme-color-primary !important;
    border: #fff 2px solid !important;
  }

  &.is-active {
    color: @theme-color-primary !important;
    background-color: #fff;
  }
}
</style>

<style lang="less" scoped>
@import '../assets/style/theme.less';
@font-face {
  font-family: MAIN;
  src: url('../assets/font/Songti.ttc');
  font-weight: normal;
  font-style: normal;
}

.main {
  height: 6rem;
  color: #fff;
  background: @theme-color-primary;
  box-sizing: border-box;
  font-size: 1.2rem;
  font-weight: 600;

  .row1 {
    height: 3rem;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    padding-top: 1rem;

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
    height: 2rem;
    margin-top: 0.125rem;
  }
  .row3 {
    height: 1rem;
  }
}

.el-menu {
  background-color: @theme-color-primary;
  color: #fff !important;
  border-bottom: none !important;
  border-radius: 0.4rem;
  & > * {
    margin-inline: 0.2rem;
  }
  .el-menu-item {
    background-color: @theme-color-primary;
    color: #fff;
    border-radius: 0.4rem;
    border-bottom: 0px;

    &:hover {
      background-color: @theme-color-primary;
      color: #fff;
      border: #fff 2px solid;
    }

    &.is-active {
      background-color: #fff;
      color: @theme-color-primary;
    }
  }
}

.el-submenu-item {
  color: @theme-color-primary !important;
  background-color: #fff !important;

  &:hover {
    border: @theme-color-primary 2px solid !important;
    background-color: none !important;
  }

  &.is-active {
    background-color: @theme-color-primary !important;
    color: #fff !important;
  }
}

.menu-link-item {
  color: #fff;
  border-bottom: 1px solid #fff;
  border-radius: 0;
  margin-inline: 1rem;
  padding: 0.5rem;
  border-bottom: 2px solid #fff;
}

.pop-menu-button {
  width: 100%;
}
</style>
