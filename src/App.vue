<template>
  <el-config-provider :locale="zhCn">
    <router-view></router-view>
  </el-config-provider>
</template>

<script setup lang="ts">
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
</script>
<style lang="less">
@import url('./assets/style/theme.less');

:root {
  --el-color-primary: @theme-color-primary;
  --el-color-secondary: @theme-color-secondary;
}
</style>
