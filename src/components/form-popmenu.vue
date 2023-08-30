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
  position: fixed;
  z-index: 999;
  display: flex;
  width: 6rem;
  background-color: #fff;
  box-shadow: 0 0 10px rgb(0 0 0 / 20%);
  flex-flow: column;

  .menu-item {
    width: 100%;
  }
}
</style>
