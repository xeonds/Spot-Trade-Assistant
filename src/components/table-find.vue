<template>
  <el-form :inline="true">
    <el-form-item>
      <el-input
        v-model="query_string"
        placeholder="输入关键字，用空格隔开"
        clearable
      >
        <template #append>
          <el-button type="primary" plain @click="submit">查询</el-button>
        </template>
      </el-input>
    </el-form-item>
  </el-form>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const props = defineProps(['data'])
const emits = defineEmits(['submit'])
let query_string = ref('')

const submit = () => {
  let res: any = []
  console.log(props.data)
  props.data.filter((item: any) => {
    if (query_string.value) {
      let query_list = query_string.value.split(' ')
      query_list.forEach((query: string) => {
        if (item.name.includes(query)) {
          res.push(item)
          return
        }
      })
    } else {
      res = props.data
    }
  })
  console.log('query success')
  emits('submit', res)
}
</script>
