<template>
  <HeadLine />
  <router-view></router-view>
  <bottomMarqueen class="marqueen"></bottomMarqueen>
</template>

<script setup lang="ts">
import HeadLine from '../components/head-line.vue'
import bottomMarqueen from '../components/bottom-marqueen.vue'
</script>

<style lang="less">
.marqueen {
  height: 4vh;
}

@font-face {
  font-family: MAIN;
  src: url('../font/仿宋_GB2312_1.ttf');
  font-weight: normal;
  font-style: normal;
}

body {
  font-family: MAIN, sans-serif;
}

.logo {
  padding: 1.5em;
  height: 6em;
  transition: filter 300ms;
  will-change: filter;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
