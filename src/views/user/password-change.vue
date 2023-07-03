<template>
  <div>
    <el-row class="row-title">
      <el-col :span="24">
        <el-text class="section-title">修改密码</el-text>
      </el-col>
    </el-row>
    <el-row class="row-content">
      <el-col :span="24">
        <el-form
          ref="resetForm"
          :model="resetData"
          :rules="resetRules"
          label-width="100px"
        >
          <el-form-item label="原密码" prop="oldPassword">
            <el-input
              type="password"
              v-model="resetData.oldPassword"
              :style="{ width: '24rem' }"
            ></el-input>
          </el-form-item>
          <el-form-item label="新密码" prop="newPassword">
            <el-input
              type="password"
              v-model="resetData.newPassword"
              :style="{ width: '24rem' }"
            ></el-input>
          </el-form-item>
          <el-form-item label="确认新密码" prop="confirmPassword">
            <el-input
              type="password"
              v-model="resetData.confirmPassword"
              :style="{ width: '24rem' }"
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="resetPassword" plain
              >重置密码</el-button
            >
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { ElMessage } from 'element-plus'

export default {
  data() {
    return {
      resetData: {
        oldPassword: '',
        newPassword: '',
        confirmPassword: ''
      },
      resetRules: {
        oldPassword: [
          { required: true, message: '请输入原密码', trigger: 'blur' }
        ],
        newPassword: [
          { required: true, message: '请输入新密码', trigger: 'blur' },
          { min: 6, message: '密码长度不能少于6个字符', trigger: 'blur' }
        ],
        confirmPassword: [
          { required: true, message: '请再次输入新密码', trigger: 'blur' },
          {
            validator: (rule, value, callback) => {
              if (value === this.resetData.newPassword) {
                callback()
              } else {
                callback(new Error('两次输入的密码不一致'))
              }
            },
            trigger: 'blur'
          }
        ]
      }
    }
  },
  methods: {
    resetPassword() {
      this.$refs.resetForm.validate((valid) => {
        if (valid) {
          ElMessage({
            message: '密码重置成功',
            type: 'success'
          })
        } else {
          ElMessage({
            message: '密码重置失败',
            type: 'error'
          })
          return false
        }
      })
    }
  }
}
</script>
