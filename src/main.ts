import { createApp } from 'vue'
import './style.css'
import router from './router'
import App from './App.vue'
import elTableInfiniteScroll from 'el-table-infinite-scroll'

const app = createApp(App).use(router).use(elTableInfiniteScroll)
app.mount('#app')
