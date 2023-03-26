<template>
  <div class="main">
    <div class="top" v-if="props.contain_top">
      <div class="name">{{ props.name }}</div>

      <div v-if="props.contain_command" class="command">
        <div
          class="command-item title"
          v-for="(item, index) in command"
          :key="index"
          @click="emits('handle', index)"
        >
          {{ item }}
        </div>
      </div>
    </div>

    <div class="table-area">
      <table cellspacing="0">
        <thead :style="{ backgroundColor: props.color || '#fff' }">
          <tr>
            <th v-for="title in props.label" :key="title">{{ title }}</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in form_data" :key="index">
            <td v-for="field in items" :key="field">{{ item[field] }}</td>

            <td v-if="props.haveslot"><slot name="tr_extend"> </slot></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { defineProps, reactive, defineEmits } from 'vue'

let emits = defineEmits(['handle'])
let props = defineProps({
  contain_command: Boolean,
  table_data: Object,
  property: Object,
  label: Object,
  command: Object,
  name: String,
  color: String,
  contain_top: Boolean,
  haveslot: Boolean
})

let form_data = reactive(<any>props.table_data)
let items = reactive(<any>props.property)
let command = reactive(<any>props.command)
</script>

<style lang="less" scoped>
.title {
  font-weight: 600;
}

.main {
  margin: 0 auto;
  width: 100%;

  .top {
    position: relative;
    padding: 1vh 1vw;
    min-height: 5vh;
    box-sizing: border-box;
    background-color: #e7e6e6;

    .name {
      position: absolute;
      right: 2vw;
      bottom: 2vh;
      font-weight: 700;
      font-size: 2.2vh;
    }

    .command {
      display: flex;
      margin-top: auto 0;

      .command-item {
        margin-right: 2vw;
      }
    }
  }

  .table-area {
    table {
      border-collapse: collapse;
      width: 100%;
    }

    tr {
      height: 4vh;
    }

    th {
      padding: 1vh 1vw;
      font-size: 0.7vw;
      border: 1px solid black;
      font-weight: 800;
    }

    td {
      padding: 1vh 1vw;
      border: 1px solid black;
    }
  }
}
</style>
