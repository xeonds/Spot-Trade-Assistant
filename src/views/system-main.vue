<template>
  <el-scrollbar id="scroll-container">
    <HeadLine id="view-header" />
    <div id="sub-nav"></div>
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
</script>

<style lang="less">
#scroll-container {
  width: 100vw;
  height: 100vh;

  #view-header {
    overflow: hidden;
    height: 6rem !important;
  }

  #sub-nav {
    height: 2rem;
    padding-inline: 1rem;
    background-color: var(--el-color-secondary);
    display: flex;
    flex-flow: row nowrap;
    justify-content: start;
    align-items: center;
  }

  #view-content {
    min-height: calc(100vh - 11rem);
    padding: 0.5rem;
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
