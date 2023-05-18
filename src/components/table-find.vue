<template>
  <div class="find-item">
    <div id="title">查找</div>
    <el-form :inline="true" class="form-inline">
      <el-form-item
        v-for="(item, index) in search"
        :label="item"
        :key="index"
        class="form-item"
      >
        <el-input :placeholder="item" v-bind="search_form[item]" />
      </el-form-item>
      <el-button type="primary" plain>查找</el-button>
    </el-form>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'

interface SearchItem {
  [index: string]: string
}

const props = defineProps({
  search_item: Object
})

let search = reactive(<string[]>props.search_item)
let search_form: SearchItem = reactive({})

for (let i = 0; i < search.length; i++) {
  search_form[search[i]] = ''
}
</script>

<style lang="less" scoped>
.find-item {
  height: 2rem;
  display: flex;
  flex-flow: row;
  align-items: center;
  justify-content: flex-start;
  #title {
    font-weight: 600;
    margin: auto 0;
    width: 4rem;
  }
}

.form-item {
  margin: 1rem;
  margin-left: 0;
  width: 10rem;
}
</style>
