<template>
  <el-container>
    <el-card class="login">
      <template #header>
        <el-text class="login-text">用户登录</el-text>
      </template>
      <div class="content">
        <el-form
          :model="formEl"
          ref="form"
          label-width="80px"
          :inline="false"
          :rules="rules"
        >
          <el-form-item label="用户名" prop="username">
            <el-input
              v-model="formEl.username"
              placeholder="请输入用户名"
            ></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="password">
            <el-input
              v-model="formEl.password"
              type="password"
              placeholder="请输入密码"
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-button
              type="primary"
              @click="onSubmit(form)"
              :loading="isloading"
              >登录</el-button
            >
          </el-form-item>
        </el-form>
      </div>
    </el-card>
  </el-container>
</template>

<script setup lang="ts">
// import sIdentify from '../components/sIdentify.vue'
import { useRouter } from 'vue-router'
import { login } from '../http/api/utils'
import loginStatusJudge from '../utils/loginStatus'

const router = useRouter()
const form = ref()
let formEl = reactive({
  username: '',
  password: ''
})
let isloading = ref(false)
let codes = '1234567890'

const rules = reactive({
  username: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
  password: [{ required: true, message: '请输入密码', trigger: 'blur' }]
})

const onSubmit = async (form: any) => {
  isloading.value = true
  await form.validate((valid: any) => {
    if (valid) {
      login(formEl.username, formEl.password).then(
        (res: any) => {
          localStorage.setItem('username', formEl.username)
          localStorage.setItem('token', res.token)
          localStorage.setItem('lastLoginTime', String(new Date().getTime()))
          router.replace('/main/memberManage')
        },
        (msg: any) => {
          isloading.value = false
        }
      )
    } else {
      isloading.value = false
    }
  })
}

onMounted(() => {
  //绑定监听事件
  window.addEventListener('keydown', (e) => {
    if (e.key == 'Enter') {
      onSubmit(form.value)
    }
  })
})

if (loginStatusJudge()) {
  router.replace('/main/memberManage')
} else {
  localStorage.clear()
}
</script>

<style lang="less" scoped>
.el-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 80vh;
  flex-flow: row;
  .content {
    .login {
      display: flex;
      justify-content: space-around;
      width: 24rem;
      flex-flow: column;

      .login-text {
        margin: 0.5rem;
        font-size: 1.5rem;
        text-align: center;
      }

      .el-form {
        margin-top: 1rem;
      }
    }
  }
}
</style>
