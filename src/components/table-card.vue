<template>
  <el-card>
    <template #header>
      <slot name="header"></slot>
      <el-row v-if="props.data.title != null">
        <el-col :span="12">
          <slot name="header-left"></slot>
        </el-col>
        <el-col :span="12" class="header-title">{{ props.data.title }}</el-col>
      </el-row>
    </template>
    <el-table :data="props.data.table_data">
      <slot name="table-col-start"></slot>
      <slot name="table-col-main"></slot>
      <slot name="table-col-end"></slot>
    </el-table>
  </el-card>
</template>

<script lang="ts" setup>
let props = defineProps(['data'])
</script>

<style lang="less" scoped>
.table-header {
  margin-bottom: 10px;
}
.header-title {
  text-align: right;
  font-size: 1.5rem;
  font-weight: bolder;
  color: var(--el-color-primary);
}
</style>
