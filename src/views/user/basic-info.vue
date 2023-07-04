<template>
  <div>
    <el-row class="row-title">
      <el-col :span="12">
        <el-text class="section-title">基本信息</el-text>
      </el-col>
      <el-col :span="12" class="section-option">
        <el-button type="primary" plain>修改</el-button>
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
  </div>
</template>

<script lang="ts" setup>
import { UserGet } from '../../http/api/user'
const user = localStorage.getItem('username')
let user_info: any = ref({})

if (user) {
  UserGet({
    username: user
  }).then((res) => {
    user_info.value = res.data[0]
  })
}
</script>
