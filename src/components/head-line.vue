<template>
  <div class="main">
    <div class="row1">
      <div class="row1-left">期现交易小助手</div>
      <div class="row1-right">
        <div class="row1-item1">撤单通知</div>
        <div class="row1-item2">登录人名称部门</div>
      </div>
    </div>
    <div class="row2">
      <el-menu
        class="el-menu-demo"
        mode="horizontal"
        router
        style="height: 100%"
        background-color="#2f5496"
        text-color="black"
      >
        <el-sub-menu>
          <template #title>资料</template>
          <el-menu-item
            index="/main/infomation/1"
            :style="{
              color: route.params.id == '1' ? '#fff' : '#2f5496',
              'background-color': route.params.id == '1' ? '#2f5496' : '#fff'
            }"
            class="el-item"
            >设置公司账套部门</el-menu-item
          >
          <el-menu-item
            index="/main/infomation/2"
            :style="{
              color: route.params.id == '2' ? '#fff' : '#2f5496',
              'background-color': route.params.id == '2' ? '#2f5496' : '#fff'
            }"
            class="el-item"
            >设置往来单位资料、部门</el-menu-item
          >
          <el-menu-item
            index="/main/infomation/3"
            :style="{
              color: route.params.id == '3' ? '#fff' : '#2f5496',
              'background-color': route.params.id == '3' ? '#2f5496' : '#fff'
            }"
            class="el-item"
            >设置商品资料</el-menu-item
          >
          <el-menu-item
            index="/main/infomation/4"
            :style="{
              color: route.params.id == '4' ? '#fff' : '#2f5496',
              'background-color': route.params.id == '4' ? '#2f5496' : '#fff'
            }"
            class="el-item"
            >设置币种、订单模式</el-menu-item
          >
          <el-menu-item
            index="/main/infomation/5"
            :style="{
              color: route.params.id == '5' ? '#fff' : '#2f5496',
              'background-color': route.params.id == '5' ? '#2f5496' : '#fff'
            }"
            class="el-item"
            >仓储协议、费率登记</el-menu-item
          >
        </el-sub-menu>
        <el-menu-item index="/main/memberManage" style="color: #fff !important"
          >管理成员</el-menu-item
        >
      </el-menu>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'
import { useRoute, useRouter } from 'vue-router'
const router = useRouter()
const route = useRoute()
console.log(route)
</script>
<style>
.el-sub-menu__title {
  color: #fff !important;
}
.el-menu-item:hover {
  background-color: #2f5496 !important;
  color: white !important;
}
</style>
<style lang="less" scoped>
.main {
  padding: 1vh 1vw;
  height: 7.5vh;
  font-size: 1.8vh;
  color: #fff;
  background: #2f5496;
  box-sizing: border-box;
  font-weight: 600;

  .row1 {
    display: flex;
    justify-content: space-between;
    margin-bottom: 1vh;

    .row1-right {
      display: flex;

      .row1-item1 {
        margin-right: 1vw;
      }
    }
  }

  .row2 {
    height: 3vh;
  }
}

.select {
  color: #2f5496;
  background: #fff !important;
}
</style>
