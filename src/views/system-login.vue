<template>
  <div class="main">
    <div class="box">
      <div class="title">用户登录</div>
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
        <!-- <el-form-item label="验证码" prop="verify">
          <el-row :gutter="20">
            <el-col :span="12" :offset="0">
              <el-input
                v-model="formEl.verify"
                placeholder="请输入验证码"
              ></el-input
            ></el-col>
            <el-col :span="12" :offset="0">
              <sIdentify
                :identifyCode="codeofverify"
                @click="changecode"
              ></sIdentify>
            </el-col>
          </el-row>
        </el-form-item> -->
        <el-form-item>
          <el-button type="primary" @click="onSubmit(form)" :loading="isloading"
            >登录</el-button
          >
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script setup lang="ts">
// import sIdentify from '../components/sIdentify.vue'
import { useRouter } from 'vue-router'
import { login } from '../http/api/utils'
const router = useRouter()
let isloading = ref(false)
// 生成验证码
// let codes = '1234567890'
// const gencode = () => {
//   let code = ''
//   for (let i = 0; i < 4; i++) {
//     let index = Math.floor(Math.random() * codes.length)
//     code += codes.slice(index, index + 1)
//   }
//   return code
// }
// // 验证码
// let codeofverify = ref(gencode())
// const changecode = () => {
//   codeofverify.value = gencode()
// }

const form = ref()
let formEl = reactive({
  username: '',
  password: ''
  // verify: ''
})

// const checkCode = (rule: any, value: any, callback: any) => {
//   if (value !== codeofverify.value) {
//     callback(new Error('请输入正确验证码'))
//   } else {
//     callback()
//   }
// }

const rules = reactive({
  username: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
  password: [{ required: true, message: '请输入密码', trigger: 'blur' }]
  // verify: [
  //   { required: true, message: '请输入验证码', trigger: 'blur' },
  //   { validator: checkCode, trigger: 'blur' }
  // ]
})

const onSubmit = async (form: any) => {
  isloading.value = true
  await form.validate((valid: any) => {
    if (valid) {
      login(formEl.username, formEl.password).then(
        (res: any) => {
          localStorage.setItem('token', res.token)
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
  localStorage.clear()
})
</script>

<style lang="less" scoped>
.main {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;

  .box {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 480px;
    height: 280px;
    background-color: #fff;
    border-radius: 20px;
    box-shadow: 2px 2px 2px 2px #bbb;
    flex-direction: column;

    .title {
      font-size: 18px;
      font-weight: 600;
    }
  }
}
</style>
