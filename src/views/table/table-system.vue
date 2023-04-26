<template>
  <div class="table-area"></div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
</script>

<style lang="less" scoped>
.t1 {
  margin-top: 5vh;
}

.table-area {
  margin: 0 auto;
  width: 99vw;
  height: 70vh;
}
</style>
