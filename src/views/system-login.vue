<template>
  <el-container>
    <el-card class="login">
      <el-text class="login-text">用户登录</el-text>
      <el-form :model="formEl" ref="form" label-width="80px" :inline="false" :rules="rules">
        <el-form-item label="用户名" prop="username">
          <el-input v-model="formEl.username" placeholder="请输入用户名"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input v-model="formEl.password" type="password" placeholder="请输入密码"></el-input>
        </el-form-item>
        <el-form-item label="验证码" prop="verify">
          <el-row :gutter="20">
            <el-col :span="12" :offset="0">
              <el-input v-model="formEl.verify" placeholder="请输入验证码"></el-input></el-col>
            <el-col :span="12" :offset="0">
              <sIdentify :identifyCode="codeofverify" @click="changeCode"></sIdentify>
            </el-col>
          </el-row>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit(form)" :loading="isloading">登录</el-button>
        </el-form-item>
      </el-form>
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
  password: '',
  verify: ''
})
let isloading = ref(false)
let codes = '1234567890'

// 生成验证码
const gencode = () => {
  let code = ''
  for (let i = 0; i < 4; i++) {
    let index = Math.floor(Math.random() * codes.length)
    code += codes.slice(index, index + 1)
  }
  return code
}

// 验证码
let codeofverify = ref(gencode())
const changeCode = () => {
  codeofverify.value = gencode()
}

const checkCode = (rule: any, value: any, callback: any) => {
  if (value !== codeofverify.value) {
    callback(new Error('请输入正确验证码'))
  } else {
    callback()
  }
}

const rules = reactive({
  username: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
  password: [{ required: true, message: '请输入密码', trigger: 'blur' }],
  verify: [
    { required: true, message: '请输入验证码', trigger: 'blur' },
    { validator: checkCode, trigger: 'blur' }
  ]
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
          router.replace('/main/system')
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
  router.replace('/main/system')
} else {
  localStorage.clear()
}
</script>

<style lang="less" scoped>
.el-container {
  height: 80vh;
  width: 100vw;
  display: flex;
  flex-flow: row;
  justify-content: center;
  align-items: center;

  .login {
    width: 24rem;
    display: flex;
    flex-flow: column;
    justify-content: space-around;

    .login-text {
      text-align: center;
      font-size: 1.5rem;
      margin: 0.5rem;
    }

    .el-form {
      margin-top: 1rem;
    }
  }
}
</style>
