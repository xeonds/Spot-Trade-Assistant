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
    <el-dialog
      v-model="isShow"
      :title="form_data['name'].split('.xlsx')[0] + ' 基础信息'"
      width="80%"
    >
      <el-form label-width="100">
        <el-form-item label="签订地点">
          <el-input v-model="form_data.place" clearable style="width: 300px" />
        </el-form-item>
        <el-form-item label="合同条款">
          <div
            v-for="(_clause, index) in form_data.clauses"
            :key="index"
            style="width: 100%"
          >
            <div style="width: 100%; padding-bottom: 1rem">
              <div style="display: flex; flex-flow: row">
                <el-input
                  v-model="form_data.clauses[index]"
                  type="textarea"
                  :rows="2"
                  style="padding-right: 1rem"
                />
                <el-button type="danger" plain @click="removeClause(index)"
                  >删除</el-button
                >
              </div>
            </div>
          </div>
          <el-button type="primary" plain @click="addClause"
            >添加条款</el-button
          >
        </el-form-item>
      </el-form>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="isShow = false" class="cancel" plain
            >取消</el-button
          >
          <el-button
            type="primary"
            @click="genearteTemplate"
            class="comfirm"
            plain
            >导出</el-button
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
import download from '../../utils/download'

export default {
  data() {
    return {
      name: '',
      isShow: false,
      data: [],
      label_data: {
        no: '编号',
        date: '日期',
        location: '签订地点',
        template: '模板内容',
        place: '签订地点',
        firstParty: '甲方',
        secondParty: '乙方'
      },
      shortcuts: [
        {
          text: '今天',
          value: new Date()
        },
        {
          text: '昨天',
          value: () => {
            const date = new Date()
            date.setTime(date.getTime() - 3600 * 1000 * 24)
            return date
          }
        },
        {
          text: '一周前',
          value: () => {
            const date = new Date()
            date.setTime(date.getTime() - 3600 * 1000 * 24 * 7)
            return date
          }
        }
      ],
      form_data: {
        id: 1,
        name: '',
        categoryId: 1,
        fileSrc: '',
        firstParty: {
          name: '',
          proxy: null,
          phone: null,
          fax: null
        },
        secondParty: {
          name: null,
          proxy: null,
          phone: null,
          fax: null
        },
        date: '',
        place: null,
        no: null,
        clauses: [
          '一、经双方友好协商，货物名称、商标、型号、厂家、数量、价格、金额签订如上。',
          '二、质量、验收标准：按照产品国家标准或参考生产厂商提供的质保单，如不符合，乙方有权要求甲方换货并承担全部相关费用。溢短装为2%，合理磅差为±2‰，以仓库方提供的磅码单为结算依据，若重量相差过大，以双方确认的第三方过磅为准，对超出合理磅差部分，双方同意多退少补。',
          '三、结算方式及期限：本合同签订当日，乙方支付货款。甲方在收到货款当日向乙方提供提货单或仓单，自本合同签订一个月内甲方向乙方开具增值税发票。'
        ]
      },
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
    $route(to, _from) {
      this.id = to.params.id
      this.getName()
      this.getTemplate()
    }
  },
  methods: {
    addClause() {
      this.form_data.clauses.push('')
    },
    removeClause(index) {
      this.form_data.clauses.splice(index, 1)
    },
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
      })
    },
    async getName() {
      const res = await serviceAxios.get(`/template/category`)
      this.name = res[this.id - 1].name
    },
    genearteTemplate() {
      serviceAxios({
        method: 'POST',
        url: `/template/export/${this.form_data.id}`,
        headers: {
          Accept: 'application/vnd.ms-excel',
          'Content-Type': 'application/json',
          Token: localStorage.getItem('token')
        },
        data: this.form_data,
        responseType: 'blob'
      })
        .then((res) => {
          this.isShow = false
          download(
            res,
            'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
            this.form_data.name
          )
          ElMessage.success('生成成功')
        })
        .catch((err) => {
          ElMessage.error('生成失败：' + err)
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
