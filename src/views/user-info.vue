<template>
  <div id="profile">
    <el-container>
      <el-header id="profile-header">
        <el-page-header @back="onBack">
          <template #breadcrumb>
            <el-breadcrumb separator="/">
              <el-breadcrumb-item :to="{ path: '/main/' }">
                主页
              </el-breadcrumb-item>
              <el-breadcrumb-item
                ><a href="/user">个人中心</a></el-breadcrumb-item
              ><el-breadcrumb-item>{{ username }}</el-breadcrumb-item>
            </el-breadcrumb>
          </template>
          <template #content>
            <div class="flex-item-center">
              <el-avatar
                class="mr-3"
                :size="32"
                src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
              />
              <span class="text-large font-600 mr-3">欢迎，{{ username }}</span>
              <el-tag style="margin-inline: 1rem">{{ role }}</el-tag>
            </div>
          </template>
          <template #extra>
            <div class="logo">百连贸易系统</div>
          </template>
        </el-page-header>
      </el-header>
      <el-container id="profile-container">
        <el-aside width="16rem" id="profile-aside">
          <el-menu default-active="1" router>
            <el-menu-item index="1" route="/user/">
              <span>基本信息</span>
            </el-menu-item>
            <el-menu-item index="2" route="/user/password">
              <span>修改密码</span>
            </el-menu-item>
          </el-menu>
        </el-aside>
        <el-main id="profile-main">
          <el-scrollbar>
            <router-view></router-view>
          </el-scrollbar>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import serviceAxios from '../http'

const user = localStorage.getItem('username')
let username = ref('')
let role = ref('')

const onBack = () => {
  window.location.href = '/main/memberManage'
}

if (user) {
  username.value = user
  serviceAxios({
    url: '/user/page',
    method: 'GET',
    data: {
      username: user
    }
  })
    .then((res) => {
      const res_user = res.data.filter((item: any) => item.userName == user)[0]
      if (res_user.roles.length == 0) {
        role.value = '普通用户'
      } else {
        role.value = res_user.roles[0].name
      }
    })
    .catch((err) => {
      console.log(err)
    })
}
</script>

<style scoped lang="less">
@font-face {
  font-family: MAIN;
  src: url('../font/Songti.ttc');
  font-weight: normal;
  font-style: normal;
}
#profile {
  height: 100vh;
  width: 100vw;
  background-color: #f5f7fa;
  #profile-header {
    height: 8rem;
    padding: 2rem;
  }
  #profile-container {
    height: calc(100vh - 8rem);
    #profile-aside {
      padding-inline: 1rem;
      & > * {
        background-color: transparent;
        border-right: none;
      }
    }
    #profile-main {
      background-color: #ffffff;
      box-shadow: 0 0 1rem 0 rgba(136, 152, 170, 0.15);
      border-top-left-radius: 0.5rem;
    }
  }
}

.flex-item-center {
  display: flex;
  align-items: center;
}
.logo {
  font-family: MAIN;
  font-size: 1.2rem;
}
.el-menu-item {
  border-radius: 0.5rem;
  margin-bottom: 20px;
}
.is-active {
  background-color: #2d50a1 !important;
  color: #ffffff !important;
}
</style>
