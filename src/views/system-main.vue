<template>
  <el-scrollbar id="scroll-container">
    <HeadLine id="view-header" @select="(item) => appendTab(item)" />
    <div id="sub-nav">
      <el-tag
        closable
        v-for="item in nav_list"
        :key="item.index"
        :class="item.route == $route.path ? 'is-active' : ''"
        @close="handleClose(item)"
        @click="() => $router.push(item.route)"
        >{{ item.name }}</el-tag
      >
    </div>
    <div id="view-content">
      <router-view></router-view>
    </div>
    <div id="view-footer">
      <!-- <bottomMarqueen id="marqueen"></bottomMarqueen> -->
      <div id="marqueen"></div>
      <div id="footer">
        <span>{{ getDate() }} &copy;百连V1.0</span>
      </div>
    </div>
  </el-scrollbar>
</template>

<script setup lang="ts">
// import bottomMarqueen from '../components/bottom-marqueen.vue'
import HeadLine from '../components/head-line.vue'
const getDate = () => {
  let date = new Date()
  let year = date.getFullYear()
  let month = date.getMonth() + 1
  let day = date.getDate()
  return `${year}年${month}月${day}日`
}
const nav_list = ref([
  {
    index: '0',
    name: '首页',
    route: '/main/memberManage'
  }
])
const appendTab = (item: any) => {
  console.log(item)
  nav_list.value.push(item)
}
const handleClose = (tag: any) => {
  nav_list.value.splice(nav_list.value.indexOf(tag), 1)
}
</script>

<style lang="less">
#scroll-container {
  width: 100vw;
  height: 100vh;

  #view-header {
    overflow: hidden;
    height: 4.5rem !important;
  }

  #sub-nav {
    height: 2rem;
    padding-inline: 1rem;
    background-color: var(--el-color-secondary);
    display: flex;
    flex-flow: row nowrap;
    justify-content: start;
    align-items: center;
    .el-tag {
      background-color: transparent;
      border: none;
      margin-right: 0.5rem;
      cursor: pointer;
      border-radius: 0;
      .el-tag__close {
        display: none;
      }
      &:hover {
        .el-tag__close {
          display: block;
        }
      }
      &.is-active {
        border-bottom: 2px solid var(--el-color-primary);
      }
    }
  }

  #view-content {
    min-height: calc(100vh - 8.5rem);
    .el-card {
      margin: 0.25rem;
    }
  }

  #view-footer {
    background-color: var(--el-color-secondary);
    display: flex;
    flex-flow: row;
    justify-content: space-between;
    align-items: center;
    height: 2rem;
    padding-inline: 1rem;
    color: var(--el-color-primary);
    #marqueen {
      overflow: hidden;
    }
    #footer {
      align-self: center;
    }
  }
}
.el-card__body {
  padding: 0px;
}
.rows {
  margin-top: 0.5rem;
}
</style>
