<template>
  <el-card>
    <div slot="header" class="card-header">
      <slot name="header">
        <h3>默认标题</h3>
        <div class="card-header-buttons">
          <el-button type="primary" icon="el-icon-plus">添加</el-button>
          <el-button type="danger" icon="el-icon-delete">删除</el-button>
        </div>
      </slot>
    </div>
    <el-table :data="tableData">
      <el-table-column prop="name" label="姓名"></el-table-column>
      <el-table-column prop="age" label="年龄"></el-table-column>
      <el-table-column prop="gender" label="性别"></el-table-column>
    </el-table>
  </el-card>
</template>

<style></style>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'TableBlock',
  props: {
    tableData: {
      type: Array,
      default: () => []
    }
  }
})
</script>

<style lang="less" scoped>
.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.card-header-buttons {
  display: flex;
  gap: 10px;
}

.el-card {
  border: 1px solid #000;
  box-shadow: none;
  padding: 0;

  .el-table {
    margin: 0;
  }
}
</style>
