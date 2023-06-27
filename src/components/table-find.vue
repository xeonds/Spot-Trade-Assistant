<template>
  <div class="find-item">
    <div id="title">查找</div>

    <el-form
      style="
        display: flex;
        justify-content: space-around;
        align-items: center;
        width: 90vw;
      "
    >
      <el-scrollbar style=" width: 70vw;height: 4rem">
        <div
          style="
            display: flex;
            justify-content: flex-start;
            align-items: center;
          "
        >
          <el-form-item
            v-for="(item, index) in search"
            :label="item"
            :key="index"
            class="form-item"
          >
            <el-input :placeholder="item" v-bind="search_form[item]" />
          </el-form-item>
        </div>
      </el-scrollbar>
      <el-button type="primary" @click="submit" plain>查找</el-button>
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

const emits = defineEmits(['submit'])

let search = reactive(<string[]>props.search_item)
let search_form: SearchItem = reactive({})

for (let i = 0; i < search.length; i++) {
  search_form[search[i]] = ''
}

const submit = () => {
  console.log(search_form);
  
  emits('submit', search_form)
}
</script>

<style lang="less" scoped>
.find-item {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 1.5vh;
  height: 2rem;
  flex-flow: row;

  #title {
    font-weight: 600;
    margin: auto 0;
    width: 4rem;
  }
}

.form-item {
  margin: 1rem;
  flex-shrink: 0;
  width: 10rem;
}
</style>
