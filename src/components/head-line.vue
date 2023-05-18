<template>
  <el-header class="main">
    <el-row class="row1">
      <div class="logo">百连贸易系统</div>
      <div class="row1-right">
        <el-popover placement="bottom" trigger="click">
          <template #reference>
            <el-link class="link-item"
              >欢迎，{{ username }}，{{ role }}</el-link
            >
          </template>
          <el-button class="pop-menu-button" @click="logout">登出</el-button>
        </el-popover>
        <el-link class="link-item">撤单通知</el-link>
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
        <el-menu-item class="el-submenu-item" index="3-1" route="/main/model"
          >合同模板</el-menu-item
        >
        <el-menu-item class="el-submenu-item" index="3-2" route="/main/model"
          >提单模板</el-menu-item
        >
        <el-menu-item class="el-submenu-item" index="3-3" route="/main/model"
          >付款申请模板</el-menu-item
        >
        <el-menu-item class="el-submenu-item" index="3-4" route="/main/model"
          >对账单模板</el-menu-item
        >
      </el-sub-menu>
      <el-sub-menu index="4">
        <template #title>贸易</template>
        <el-menu-item class="el-submenu-item" index="4-1" route="/main/trade"
          >购销订单录入</el-menu-item
        >
        <el-menu-item class="el-submenu-item" index="4-2" route="/main/trade"
          >合同</el-menu-item
        >
        <el-menu-item class="el-submenu-item" index="4-3" route="/main/trade"
          >采购付款申请</el-menu-item
        >
        <el-menu-item class="el-submenu-item" index="4-4" route="/main/trade"
          >销售收款匹配</el-menu-item
        >
        <el-menu-item class="el-submenu-item" index="4-5" route="/main/trade"
          >余款对账</el-menu-item
        >
        <el-menu-item class="el-submenu-item" index="4-6" route="/main/trade"
          >结余款</el-menu-item
        >
        <el-menu-item class="el-submenu-item" index="4-7" route="/main/trade"
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
        <template #title>期贷</template>
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
let username = ref('')
let role = ref('')

const logout = () => {
  basicLogout()
  localStorage.removeItem('username')
  localStorage.removeItem('token')
  router.replace('/login')
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
</script>

<style lang="less">
@import '../assets/style/theme.less';

.el-sub-menu__title {
  background-color: @theme-color-primary;
  color: #fff !important;
  border: none !important;

  &:hover {
    color: @theme-color-primary !important;
    background-color: #fff;
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
  src: url('../font/Songti.ttc');
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
    margin-top: 0.5rem;
  }
}

.el-menu {
  background-color: @theme-color-primary;
  color: #fff !important;
  border: none;

  .el-menu-item {
    background-color: @theme-color-primary;
    color: #fff;

    &:hover {
      background-color: #d0e1ff;
      color: @theme-color-primary;
    }

    &.is-active {
      background-color: #fff;
      color: @theme-color-primary;
      border: none;
    }
  }
}

.el-submenu-item {
  color: @theme-color-primary !important;
  background-color: #fff !important;

  &:hover {
    color: @theme-color-primary !important;
    background-color: @theme-color-secondary !important;
  }

  &.is-active {
    background-color: @theme-color-primary !important;
    color: #fff !important;
  }
}

.link-item {
  color: #fff;
  border-bottom: 1px solid #fff;
  margin-inline: 1rem;
  padding: 0.5rem;
  border-bottom: 2px solid #fff;

  &:hover {
    background-color: #fff;
    color: @theme-color-primary;
    border-bottom: 1px solid @theme-color-primary;
  }
}

.pop-menu-button {
  width: 100%;
}
</style>
