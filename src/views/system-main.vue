<template>
  <HeadLine id="view-header" />
  <router-view id="view-content"></router-view>
  <div id="view-footer">
    <bottomMarqueen id="marqueen"></bottomMarqueen>
    <div id="version">{{ getDate() }} &copy;百连V1.0</div>
  </div>
</template>

<script setup lang="ts">
import bottomMarqueen from '../components/bottom-marqueen.vue'
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
#view-header {
  overflow: hidden;
  max-height: 6rem !important;
}

#view-footer {
  display: flex;
  flex-flow: row;
  justify-content: space-between;

  #marqueen {
    overflow: hidden;
    margin-top: 2rem;
    margin-inline: 1rem;
    width: calc(100vw - 16rem);
    height: 2rem;
    max-height: 3rem !important;
  }

  #version {
    margin-top: 2rem;
    width: 14rem;
    height: 2rem;
    text-align: center;
  }
}
</style>
