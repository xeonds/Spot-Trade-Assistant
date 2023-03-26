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
      <div
        :class="['row2-item', route.fullPath == item.route ? 'select' : '']"
        v-for="(item, index) in items"
        :key="index"
        @click="goto(item.route)"
      >
        {{ item.name }}
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'
import { useRoute, useRouter } from 'vue-router'
const router = useRouter()
const route = useRoute()

let items = reactive([
  {
    name: '系统',
    route: '/system'
  },
  {
    name: '资料',
    route: '/infomation'
  },
  {
    name: '模板',
    route: '/model'
  },
  {
    name: '贸易',
    route: '/trade'
  },
  {
    name: '货管',
    route: '/goods-manage'
  },
  {
    name: '库管',
    route: '/storehouse-manage'
  },
  {
    name: '财务',
    route: '/finance'
  },
  {
    name: '期货',
    route: '/futures'
  },
  {
    name: '统计报表',
    route: '/statistics'
  },
  {
    name: '监控',
    route: '/spy'
  }
])

const goto = (path: string) => {
  router.replace({ path })
}
</script>

<style lang="less" scoped>
.main {
  padding: 1vh 1vw;
  height: 8vh;
  font-size: 1.5vh;
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
    display: flex;
    margin-top: 0.5vh;

    .row2-item {
      padding: 0.2vh 0.2vw;
      margin-right: 0.7vw;
    }

    .row2-item:hover {
      background: #fff;
    }
  }
}

.select {
  color: #2f5496;
  background: #fff !important;
}
</style>
