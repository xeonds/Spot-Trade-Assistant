<template>
  <el-scrollbar id="scroll-container">
    <HeadLine id="view-header" />
    <el-row class="row3"> </el-row>
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
const getDate = () => {
  let date = new Date()
  let year = date.getFullYear()
  let month = date.getMonth() + 1
  let day = date.getDate()
  return `${year}年${month}月${day}日`
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
</script>

<style lang="less">
#scroll-container {
  width: 100vw;
  height: 100vh;

  #view-header {
    overflow: hidden;
    height: 6rem !important;
  }

  .row3 {
    height: 2rem;
    background-color: var(--el-color-secondary);
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
