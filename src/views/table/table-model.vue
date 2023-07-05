<template>
  <div class="table-rows">
    <el-row>
      <el-col :span="24">
        <Table
          class="model-box"
          id="table-model"
          :col="table_col.ModelInfo"
          :table_data="data"
          :contain_top="true"
          :name="`合同模板-${name}`"
          :height="64"
        >
          <template #table-extend-start>
            <el-table-column type="selection" width="55" align="center">
              <template #header>选择</template>
            </el-table-column>
          </template>
          <template #table-extend-end>
            <el-table-column label="操作" width="240" align="center">
              <template #default>
                <div class="table-op-group">
                  <el-button type="primary" link @click="showGenerateTemplate()"
                    >生成</el-button
                  >
                </div>
              </template>
            </el-table-column>
          </template>
        </Table>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts" setup>
import Table from '../../components/main-table.vue'
import * as table_col from '../../assets/table_info/table-title'
import { useRoute } from 'vue-router'
import serviceAxios from '../../http'
const route = useRoute()
const name = ref('')
let generateTemplate = ref(false)
let data = ref([])

const getTemplate = async () => {
  const res = await serviceAxios.get(`/template/category/${route.params.id}`)
  data.value = res[0]
  console.log(data.value)
}
const showGenerateTemplate = () => {
  generateTemplate.value = true
}
const getName = async () => {
  const res = await serviceAxios.get(`/template/category`)
  name.value = res[route.params.id - 1].name
}
onMounted(() => {
  getTemplate()
  getName()
})
watch(
  () => route.params.id,
  () => {
    getTemplate()
    getName()
  }
)
</script>

<style lang="less">
.table-rows {
  .el-row {
    margin: 1rem;
  }
}
</style>
