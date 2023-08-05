<template>
  <!-- 使用透传将v-model绑定到dialog元素上，从而控制组件显示 -->
  <el-dialog :title="props.title" style="width: 80%">
    <el-form :model="data" style="display: flex; flex-wrap: wrap">
      <el-form-item
        :label="item.label"
        :label-width="160"
        v-for="item in col"
        :key="item.label"
        style="width: 24rem"
        :prop="item.prop"
      >
        <el-date-picker
          v-model="data[item.prop]"
          type="date"
          placeholder="选择日期"
          v-if="item.type == 'date'"
        />
        <el-input v-model="data[item.prop]" v-if="item.type == 'string'" />
        <el-input
          v-model.number="data[item.prop]"
          type="number"
          v-if="item.type == 'number'"
        />
        <el-radio-group v-model="data[item.prop]" v-if="item.type == 'select'">
          <el-radio
            v-for="option in item.options"
            :key="option.label"
            :label="option.value"
            >{{ option.label }}</el-radio
          >
        </el-radio-group>
        <el-select
          v-model="data[item.prop]"
          multiple
          placeholder="选择"
          style="width: 240px"
          v-if="item.type == 'multiselect'"
        >
          <el-option
            v-for="option in item.options"
            :key="option.value"
            :label="option.label"
            :value="option.value"
          />
        </el-select>
        <el-select
          v-model="data[item.prop]"
          placeholder="选择"
          style="width: 240px"
          v-if="item.type == 'singleselect'"
        >
          <el-option
            v-for="option in item.options"
            :key="option.value"
            :label="option.label"
            :value="option.value"
          />
        </el-select>
      </el-form-item>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="emit('close')" type="primary" plain>
          取消
        </el-button>
        <el-button @click="() => emit('submit', data)" type="primary"
          >确定</el-button
        >
      </span>
    </template>
  </el-dialog>
</template>

<script lang="ts" setup>
let props = defineProps(['visible', 'title', 'col'])
let emit = defineEmits(['submit', 'close'])
let data = reactive(<any>[])
let col = reactive(<any>props.col)
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
