<template>
  <div>
    <el-row class="row-title">
      <el-col :span="12">
        <el-text class="section-title">基本信息</el-text>
      </el-col>
      <el-col :span="12" class="section-option">
        <el-button type="primary" plain @click="isEdit = true">修改</el-button>
      </el-col>
    </el-row>
    <el-row class="row-content">
      <el-col :span="24">
        <el-descriptions :column="3" border>
          <el-descriptions-item label="用户名">{{
            user_info.userName
          }}</el-descriptions-item>
          <el-descriptions-item label="微信号">{{
            user_info.wechat
          }}</el-descriptions-item>
          <el-descriptions-item label="邮箱">{{
            user_info.email
          }}</el-descriptions-item>
          <el-descriptions-item label="手机号">{{
            user_info.phonenumber
          }}</el-descriptions-item>
          <el-descriptions-item label="性别">{{
            user_info.sex == 1 ? '男' : '女'
          }}</el-descriptions-item>
          <el-descriptions-item label="创建时间">{{
            user_info.createTime
          }}</el-descriptions-item>
          <el-descriptions-item label="更新时间">{{
            user_info.updateTime
          }}</el-descriptions-item>
        </el-descriptions>
      </el-col>
    </el-row>
    <el-dialog v-model="isEdit" title="编辑用户信息">
      <el-form label-width="100">
        <el-form-item label="用户名">
          <el-input v-model="user_info.userName"></el-input>
        </el-form-item>
        <el-form-item label="微信号">
          <el-input v-model="user_info.wechat" />
        </el-form-item>
        <el-form-item label="邮箱">
          <el-input v-model="user_info.email" />
        </el-form-item>
        <el-form-item label="手机号">
          <el-input v-model="user_info.phonenumber" />
        </el-form-item>
        <el-form-item label="性别">
          <el-input v-model="user_info.sex" />
        </el-form-item>
        <el-form-item label="创建时间">
          <el-input v-model="user_info.createTime" />
        </el-form-item>
        <el-form-item label="更新时间">
          <el-input v-model="user_info.updateTime" />
        </el-form-item>
      </el-form>
      <template #footer>
        <el-button @click="cancelEdit">取 消</el-button>
        <el-button type="primary" @click="confirmEdit">确 定</el-button>
      </template>
    </el-dialog>
  </div>
</template>

<script lang="ts" setup>
import { UserGet, UserRefresh } from '../../http/api/user'
import { ref } from 'vue'
const user = localStorage.getItem('username')
const isEdit = ref(false)
let user_info: any = ref({})

const getUserInfo = () => {
  UserGet({
    username: user
  }).then((res) => {
    user_info.value = res.data[0]
  })
}
const cancelEdit = () => {
  isEdit.value = false
  getUserInfo()
}
const confirmEdit = () => {
  UserRefresh(user, user_info.value).then((res) => {
    if (res.code == 200) {
      isEdit.value = false
      getUserInfo()
      ElMessage.success('修改成功')
    } else {
      ElMessage.error(res.msg)
    }
  })
}

if (user) getUserInfo()
</script>

<style lnag="less">
.section-option {
  text-align: right;
}
</style>
