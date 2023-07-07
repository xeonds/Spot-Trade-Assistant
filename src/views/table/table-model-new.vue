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
                  <el-button type="primary" link @click="preview"
                    >预览</el-button
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
          :label="value"
          :label-width="200"
          v-for="(index, value) in form_data"
          :key="index"
          :prop="value"
        >
          <el-input v-model="form_data[value]" />
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

<script>
import Table from '../../components/main-table.vue'
import * as table_col from '../../assets/table_info/table-title'
import * as table_add from '../../assets/table_info/table-add'
import serviceAxios from '../../http'

export default {
  data() {
    return {
      name: '',
      isShow: false,
      data: [],
      form_data: {},
      table_col,
      table_add,
      id: this.$route.params.id
    }
  },
  created() {
    this.getTemplate()
    this.getName()
  },
  components: {
    Table
  },
  watch: {
    $route(to, from) {
      this.id = to.params.id
      this.getName()
      this.getTemplate()
    }
  },
  methods: {
    preview() {
      ElMessage({
        message: '开发中',
        type: 'info'
      })
    },
    async getTemplate() {
      let res = await serviceAxios.get(`/template/category/${this.id}`)
      this.data.length = 0
      for (let item in res) {
        this.data.push(res[item])
      }
    },
    showGenerateTemplate(id) {
      this.isShow = true
      serviceAxios.get(`/template/generate/${id}`).then((res) => {
        this.form_data = res
        console.log(this.form_data)
      })
    },
    async getName() {
      const res = await serviceAxios.get(`/template/category`)
      this.name = res[this.id - 1].name
    },
    genearteTemplate() {
      serviceAxios
        .post(`/template/export/${this.form_data.id}`, this.form_data)
        .then((res) => {
          this.isShow = false
          ElMessage.success('生成成功')
        })
        .catch((err) => {
          ElMessage.error('生成失败')
        })
    }
  }
}
</script>

<style lang="less">
.table-rows {
  .el-row {
    margin: 1rem;
  }
}
</style>
