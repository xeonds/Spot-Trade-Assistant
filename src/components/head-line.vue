<template>
  <el-header class="main">
    <el-row class="row1">
      <div class="row1-left">期现交易小助手</div>
      <div class="row1-right">
        <div class="row1-item1">撤单通知</div>
        <div class="row1-item2">登录人名称部门</div>
      </div>
    </el-row>
    <el-menu class="row2" mode="horizontal" :default-active="activeIndex" @select="handleSelect">
      <el-sub-menu index="2">
        <template #title>资料</template>
        <el-menu-item class="el-submenu-item" index="2-1">设置公司账套部门</el-menu-item>
        <el-menu-item class="el-submenu-item" index="2-2">设置往来单位资料、部门</el-menu-item>
        <el-menu-item class="el-submenu-item" index="2-3">设置商品资料</el-menu-item>
        <el-menu-item class="el-submenu-item" index="2-4">设置币种、订单模式</el-menu-item>
        <el-menu-item class="el-submenu-item" index="2-5">仓储协议、费率登记</el-menu-item>
      </el-sub-menu>
      <el-menu-item index="3">模板</el-menu-item>
      <el-menu-item index="4">贸易</el-menu-item>
      <el-menu-item index="5">货管</el-menu-item>
      <el-menu-item index="6">库管</el-menu-item>
      <el-menu-item index="7">财务</el-menu-item>
      <el-menu-item index="8">期贷</el-menu-item>
      <el-menu-item index="9">统计报表</el-menu-item>
      <el-menu-item index="10">监控</el-menu-item>
    </el-menu>
  </el-header>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  data() {
    return {
      activeIndex: '1',
      route: this.$route
    }
  },
  methods: {
    handleSelect(key: string, keyPath: string[]) {
      this.$router.push(key)
      console.log(key, keyPath)
    }
  }
})
</script>

<style lang="less">
@import '../assets/style/theme.less';

.el-sub-menu__title {
  background-color: @theme-color-primary;
  color: #fff !important;

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

.main {
  height: 6rem;
  color: #fff;
  background: @theme-color-primary;
  box-sizing: border-box;
  font-size: 1.8vh;
  font-weight: 600;

  .row1 {
    height: 3rem;
    display: flex;
    justify-content: space-between;
    padding-top: 1rem;

    .row1-right {
      display: flex;

      .row1-item1 {
        margin-right: 1vw;
      }
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
</style>
