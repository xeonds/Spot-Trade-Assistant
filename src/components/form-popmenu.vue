<template>
  <div
    class="menu"
    :style="{ left: `${position.x}px`, top: `${position.y}px` }"
  >
    <div v-for="item in props.menuList" :key="item.prop">
      <el-button
        type="primary"
        text
        class="menu-item"
        @click="emit('menu', item.prop)"
      >
        {{ item.label }}
      </el-button>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  menuList: { label: string; prop: string }[]
  position: { x: number; y: number }
}>()
const emit = defineEmits(['menu'])
</script>

<style scoped>
.menu {
  display: flex;
  flex-flow: column;
  position: fixed;
  z-index: 999;
  width: 6rem;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  .menu-item {
    width: 100%;
  }
}
</style>
