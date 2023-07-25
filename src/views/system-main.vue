<template>
  <el-scrollbar id="scroll-container">
    <HeadLine id="view-header" />
    <div id="view-content">
      <router-view></router-view>
    </div>
    <div id="view-footer">
      <!-- <bottomMarqueen id="marqueen"></bottomMarqueen> -->
      <div id="marqueen"></div>
      <div id="footer">
        <el-text style="color: white">{{ getDate() }} &copy;百连V1.0</el-text>
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
    height: 8rem !important;
  }

  #view-content {
    min-height: calc(100vh - 12rem);
    padding: 1rem;
  }

  #view-footer {
    background-color: var(--el-color-primary);
    display: flex;
    flex-flow: row;
    justify-content: space-between;
    align-items: center;
    height: 4rem;
    padding-inline: 1rem;
    color: white;
    #marqueen {
      overflow: hidden;
    }
    #footer {
      align-self: center;
    }
  }
}
</style>
