<template>
  <formPopmenu
    :menu-list="menuList"
    :position="position"
    v-show="isVisible.clickMenu"
    @menu="handleCtxMenu"
  />
  <div v-if="route.params.id==='1'">
    <el-row>
      <el-col>
        <modifyTable
          :data="data['1-1']"
          :command="['刷新']"
          name="采购订单"
          id="store1"
          :col="tableCol.Caigoudingdan"
          :height="25"
          :selectable="true"
          @load="handlepageload('1-1')"
          @handle="(a:number)=>handle('1-1', a)"
          @menu="menu"
          v-loading="isLoading['1-1']"
        >
          <template #command>
            <tableFind :form-data="data['1-1']" @submit="console.log" />
          </template>
        </modifyTable>
      </el-col>
    </el-row>
    <el-row>
      <el-col>
        <modifyTable
          :data="data['1-2']"
          :command="['刷新', '现货签收']"
          name="现货收货记录"
          id="trade2"
          :col="tableCol.Caigoudingdan"
          :height="25"
          :selectable="true"
          @load="handlepageload('1-2')"
          @handle="(a:number)=>handle('1-2', a)"
          @menu="menu"
          v-loading="isLoading['1-2']"
        >
          <template #command>
            <tableFind :form-data="data['1-2']" @submit="console.log" />
          </template>
        </modifyTable>
      </el-col>
    </el-row>
    <el-row>
      <el-col>
        <modifyTable
          :data="data['1-3']"
          :command="['刷新', '远期登记']"
          name="远期收货记录"
          id="trade3"
          :col="tableCol.Caigoudingdan"
          :height="25"
          :selectable="true"
          @load="handlepageload('1-3')"
          @handle="(a:number)=>handle('1-3', a)"
          @menu="menu"
          v-loading="isLoading['1-3']"
        >
          <template #command>
            <tableFind :form-data="data['1-3']" @submit="console.log" />
          </template>
        </modifyTable>
      </el-col>
    </el-row>
  </div>
  <div v-if="route.params.id==='2'">
    <el-row>
      <el-col></el-col>
    </el-row>
  </div>
  <div v-if="route.params.id==='3'">
    <el-row>
      <el-col></el-col>
    </el-row>
  </div>
  <div v-if="route.params.id==='4'">
    <el-row>
      <el-col></el-col>
    </el-row>
  </div>
  <div v-if="route.params.id==='5'">
    <el-row>
      <el-col></el-col>
    </el-row>
  </div>
  <div v-if="route.params.id==='6'">
    <el-row>
      <el-col></el-col>
    </el-row>
  </div>
  <div v-if="route.params.id==='7'">
    <el-row>
      <el-col></el-col>
    </el-row>
  </div>
</template>

<script lang="ts" setup>
import {useRouter} from 'vue-router'
import {ref,reactive} from 'vue'
import modifyTable from '@/components/modify-table2.vue';
import formDialog from '@/components/form-dialog.vue';
import formPopmenu from '../../components/form-popmenu.vue'
import tableFind from '@/components/table-find.vue';
import * as tableCol from '@/assets/table_info/table-title'
import * as tradeAPI from '@/http/api/trade'

const router = useRouter()
const route = router.currentRoute
const data = ref(<any>{})
const isLoading = ref(<any>{})
const isVisible = ref(<any>{})
const pagenumber = reactive(<any>{})

// menu vars & handlers
const menuList = ref([
  { prop: 'refresh', label: '刷新' },
  { prop: 'update', label: '修改' },
  { prop: 'delete', label: '删除' }
])
const position = ref({ x: 0, y: 0 })
const handleCtxMenu = (menuLabel: string) => {
  switch (menuLabel) {
    case 'refresh':
      handleRefresh('1-1')
      break
    case 'update':
      isVisible.value.dialogUpdate = true
      break
    case 'delete':
      isVisible.value.dialogDelete = true
      break
  }
  isVisible.value.clickMenu = false
  ElMessage({
    message: '开发中：点击了' + menuLabel,
    type: 'info'
  })
}
const menu = (_a: any, _b: any, _c: any, event: any) => {
  event.preventDefault()
  position.value.x = event.clientX
  position.value.y = event.clientY
  isVisible.value.clickMenu = true
  document.addEventListener('click', () => {
    isVisible.value.clickMenu = false
  })
}
const handlepageload = async (id: string) => {
  let res: any = []
  switch (id) {
    case '1-1':
      pagenumber['1-1'] = pagenumber['1-1'] + 1
      res = await tradeAPI.getTrade({
        pageNumber: pagenumber['1-1'],
        pageSize: '10',
        sort: 'date',
        order: 'desc'
      })
      break
    case '1-2':
      pagenumber['1-2'] = pagenumber['1-2'] + 1
      res = await tradeAPI.getPosition({
        pageNumber: pagenumber['1-2'],
        pageSize: '10',
        sort: 'date',
        order: 'desc'
      })
      break
    case '2-1':
      pagenumber['2-1'] = pagenumber['2-1'] + 1
      res = await tradeAPI.getTrade2({
        pageNumber: pagenumber['2-1'],
        pageSize: '10',
        sort: 'date',
        order: 'desc'
      })
      break
    case '2-2':
      pagenumber['2-2'] = pagenumber['2-2'] + 1
      res = await tradeAPI.getContract({
        pageNumber: pagenumber['2-2'],
        pageSize: '10',
        sort: 'date',
        order: 'desc'
      })
      break
    case '2-3':
      pagenumber['2-3'] = pagenumber['2-3'] + 1
      res = await tradeAPI.getRequest({
        pageNumber: pagenumber['2-3'],
        queryType: '1',
        pageSize: '10',
        sort: 'date',
        order: 'desc'
      })
      break
    case '3-1':
      pagenumber['3-1'] = pagenumber['3-1'] + 1
      res = await tradeAPI.getCaigouliebiao({
        ps: '1',
        pageNumber: pagenumber['3-1'],
        pageSize: '10',
        sort: 'date',
        order: 'desc'
      })
      break
    case '3-2':
      pagenumber['3-2'] = pagenumber['3-2'] + 1
      res = await tradeAPI.getFukuan({
        queryType: '2',
        pageNumber: pagenumber['3-2'],
        pageSize: '10',
        sort: 'date',
        order: 'desc'
      })
      break
    case '4-1':
      pagenumber['4-1'] = pagenumber['4-1'] + 1
      res = await tradeAPI.getSales({
        pageNumber: pagenumber['4-1'],
        pageSize: '10',
        sort: 'date',
        order: 'desc'
      })
      break
    case '4-2':
      pagenumber['4-2'] = pagenumber['4-2'] + 1
      res = await tradeAPI.getShoukuan({
        pageNumber: pagenumber['4-2'],
        pageSize: '10',
        sort: 'date',
        order: 'desc'
      })
      break
  }
  if (res.data.length != 0) {
    res.data.forEach((item: any) => {
      data[id].push(item)
    })
  }
  isLoading[id] = false
}
const handleRefresh = (id: string) => {
  pagenumber[id] = 0
  data[id].length = 0
  handlepageload(id)
}
const handle = (id: string, a: number) => {
  switch (id) {
  }
}
</script>

<style lang="less" scoped>
</style>
