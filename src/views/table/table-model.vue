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
          :enable_select="false"
          :name="`合同模板-${name}`"
          :height="64"
        >
          <template #table-extend-end>
            <el-table-column label="操作" width="240" align="center">
              <template #default="scope">
                <div class="table-op-group">
                  <el-button
                    type="primary"
                    link
                    @click="showGenerateTemplate(scope.row.id)"
                    >生成</el-button
                  >
                </div>
              </template>
            </el-table-column>
          </template>
        </Table>
      </el-col>
    </el-row>
    <el-dialog v-model="isShow" title="编辑">
      <el-form>
        <el-form-item
          :label="item.label"
          :label-width="200"
          v-for="item in table_add.ModelInfo"
          :key="item.label"
          :prop="item.prop"
        >
          <el-input v-model="add_form[item.prop]" />
        </el-form-item>
      </el-form>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="isShow = false" class="cancel" plain
            >取消</el-button
          >
          <el-button @click="genearteTemplate" class="comfirm" plain
            >确定</el-button
          >
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script lang="ts" setup>
import Table from '../../components/main-table.vue'
import * as table_col from '../../assets/table_info/table-title'
import * as table_add from '../../assets/table_info/table-add'
import { useRoute } from 'vue-router'
import { ElMessage } from 'element-plus'
import serviceAxios from '../../http'
const route = useRoute()
const name = ref('')
let isShow = ref(false)
let data: any[] = reactive([])
let add_form: any = reactive([])
const getTemplate = async () => {
  let res: any = await serviceAxios.get(`/template/category/${route.params.id}`)
  for (let item in res) {
    data.push(res[item])
  }
}
const showGenerateTemplate = (id: string) => {
  isShow.value = true
  serviceAxios.get(`/template/generate/${id}`).then((res: any) => {
    add_form = res
    console.log(add_form)
  })
}
const getName = async () => {
  const res: any = await serviceAxios.get(`/template/category`)
  const id: any = route.params.id
  name.value = res[id - 1].name
}
const genearteTemplate = () => {
  serviceAxios({ url: `/template/export/${add_form.id}`, data: add_form })
    .then((res) => {
      isShow.value = false
      data = []
    })
    .catch((err) => {
      ElMessage.error('生成失败')
    })
}
onMounted(() => {
  getTemplate()
  getName()
})
watch(
  () => route.params.id,
  () => {
    data = []
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
