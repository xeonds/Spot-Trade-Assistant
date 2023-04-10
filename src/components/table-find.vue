<template>
  <div class="find">
    <div class="title">查找</div>
    <div class="search">
      <div class="search-item" v-for="(item, index) in search" :key="index">
        <div class="item-name">{{ item }}</div>
        <div class="item-input">
          <input type="text" v-bind="search_form[item]" />
        </div>
      </div>
    </div>
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
.title {
  font-weight: 600;
  margin: auto 0;
  width: 4vw;
}

.find {
  display: flex;
  padding: 0.5vw;
  padding-left: 1vw;
  margin: 0 auto;
  width: 100%;
  background-color: #e7e6e6;
  font-weight: 500;
  box-sizing: border-box;

  .search {
    display: flex;
    flex-wrap: wrap;

    .search-item {
      display: flex;
      justify-content: space-between;
      margin-left: 2vw;
      width: 11vw;
    }

    .item-input {
      margin-left: 0.5vw;
      width: 6vw;

      input {
        width: 100%;
        text-indent: 5px;
      }
    }
  }
}
</style>
