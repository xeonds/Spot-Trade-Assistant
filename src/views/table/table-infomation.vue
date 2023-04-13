<template>
  <div v-if="route.params.id === '1'">
    <modifyTable
      name="本公司账套"
      :get_data="infoapi.getZhangTao"
      :add_data="infoapi.addZhangTao"
      :delete_data="infoapi.deletaZhangTao"
      :modify_data="infoapi.refreshZhangTao"
      :export="infoapi.Partmentexcel"
      :command="['刷新', '新建', '导出']"
      @click_row="handle_click"
    ></modifyTable>
    <modifyTable
      name="本公司开户银行"
      :get_data="infoapi.getBank"
      :add_data="infoapi.addBank"
      :delete_data="infoapi.deletaBank"
      :modify_data="infoapi.refreshBank"
      :command="['刷新', '添加']"
      :search="bankSearchCondition"
      @fresh="hadle_fresh"
      :isunion="true"
      ref="bank"
    ></modifyTable>
    <modifyTable
      name="本公司业务部门"
      :get_data="infoapi.getPartment"
      :add_data="infoapi.addPartment"
      :delete_data="infoapi.deletaPartment"
      :modify_data="infoapi.refreshPartment"
      :command="['刷新', '添加']"
    ></modifyTable>
  </div>
  <div v-if="route.params.id === '2'">
    <modifyTable
      name="往来单位资料"
      :get_data="infoapi.getZhangTao"
      :add_data="infoapi.addZhangTao"
      :delete_data="infoapi.deletaZhangTao"
      :modify_data="infoapi.refreshZhangTao"
      :command="['刷新', '新建', '导出']"
    ></modifyTable>
    <modifyTable
      name="往来单位银行"
      :get_data="infoapi.getBank"
      :add_data="infoapi.addBank"
      :delete_data="infoapi.deletaBank"
      :modify_data="infoapi.refreshBank"
      :command="['刷新', '添加']"
    ></modifyTable>
    <modifyTable
      name="往来部门"
      :get_data="infoapi.getPartment"
      :add_data="infoapi.addPartment"
      :delete_data="infoapi.deletaPartment"
      :modify_data="infoapi.refreshPartment"
      :command="['刷新', '添加']"
    ></modifyTable>
  </div>
  <div v-if="route.params.id === '3'">
    <modifyTable
      name="商品品种"
      :get_data="infoapi.getVariety"
      :add_data="infoapi.addVariety"
      :delete_data="infoapi.deletaVariety"
      :modify_data="infoapi.refreshVariety"
      :command="['刷新', '新建', '导出']"
    ></modifyTable>
    <modifyTable
      name="商品规格"
      :get_data="infoapi.getGrade"
      :add_data="infoapi.addGrade"
      :delete_data="infoapi.deletaGrade"
      :modify_data="infoapi.refreshGrade"
      :command="['刷新', '添加']"
    ></modifyTable>
    <modifyTable
      name="商品商标"
      :get_data="infoapi.getTrademark"
      :add_data="infoapi.addTrademark"
      :delete_data="infoapi.deletaTrademark"
      :modify_data="infoapi.refreshTrademark"
      :command="['刷新', '添加']"
    ></modifyTable>
  </div>
  <div v-if="route.params.id === '4'">
    <modifyTable
      name="币种"
      :get_data="infoapi.getCurrency"
      :add_data="infoapi.addCurrency"
      :delete_data="infoapi.deletaCurrency"
      :modify_data="infoapi.refreshCurrency"
      :command="['刷新', '新建', '导出']"
    ></modifyTable>
    <modifyTable
      name="订单模式"
      :get_data="getTypeUnion1"
      :add_data="infoapi.addOrders"
      :delete_data="infoapi.deletaOrders"
      :modify_data="infoapi.refreshOrders"
      :command="['刷新', '添加']"
    ></modifyTable>
    <div class="union">
      <modifyTable
        name="海关款项类别"
        :get_data="getTypeUnion2"
        :add_data="infoapi.addType"
        :delete_data="infoapi.deletaType"
        :modify_data="infoapi.refreshType"
        :command="['刷新', '添加']"
        class="item"
      ></modifyTable>
      <modifyTable
        name="仓储款项类别"
        :get_data="infoapi.getType"
        :add_data="infoapi.addType"
        :delete_data="infoapi.deletaType"
        :modify_data="infoapi.refreshType"
        :command="['刷新', '添加']"
        class="item"
      ></modifyTable>
    </div>
  </div>
  <div v-if="route.params.id === '5'">
    <modifyTable
      name="仓储协议"
      :get_data="infoapi.getSta"
      :add_data="infoapi.addSta"
      :delete_data="infoapi.deletaSta"
      :modify_data="infoapi.refreshSta"
      :command="['刷新', '新建', '导出']"
    ></modifyTable>
    <modifyTable
      name="签约品种"
      :get_data="infoapi.getSvar"
      :add_data="infoapi.addSvar"
      :delete_data="infoapi.deletaSvar"
      :modify_data="infoapi.refreshSvar"
      :command="['刷新', '添加']"
    ></modifyTable>
    <div class="union">
      <modifyTable
        name="收费项目"
        :get_data="infoapi.getItem"
        :add_data="infoapi.addItem"
        :delete_data="infoapi.deletaItem"
        :modify_data="infoapi.refreshItem"
        :command="['刷新', '添加']"
        class="item"
      ></modifyTable>
      <modifyTable
        name="仓储费"
        :get_data="infoapi.getStof"
        :add_data="infoapi.addStof"
        :delete_data="infoapi.deletaStof"
        :modify_data="infoapi.refreshStof"
        :command="['刷新', '添加']"
        class="item"
      ></modifyTable>
    </div>
  </div>
</template>

<script lang="ts" setup>
import modifyTable from '../../components/modify-table.vue'
import * as infoapi from '../../http/api/infomation'
import { useRoute } from 'vue-router'
const route = useRoute()

let bank = ref()

// 条件按筛选处理
//银行
let bankSearchCondition: infoapi.BankGet = reactive({
  company: '0',
  name: '',
  swcode: '',
  accounts: '',
  taxsign: 'false',
  pageNumber: '0',
  pageSize: '0',
  sort: '',
  order: ''
})

const handle_click = (row: any, col: any) => {
  if (route.params.id === '1') {
    console.log(row.id)
    bankSearchCondition.company = row.id.toString()
    bank.value.get_data()
  }
}

const hadle_fresh = (name: string) => {
  if (name == '本公司开户银行') {
    bankSearchCondition.company = '0'
    bank.value.get_data()
  }
}

//款项
let typeSearchCondition: infoapi.TypeGet = {
  money: '',
  type: '',
  pageNumber: '',
  pageSize: '',
  sort: '',
  order: ''
}
const getTypeUnion1 = () => {
  let temp = typeSearchCondition
  temp.type = '3'
  return infoapi.getType(temp)
}

const getTypeUnion2 = () => {
  let temp = typeSearchCondition
  temp.type = '4'
  return infoapi.getType(temp)
}
</script>

<style lang="less" scoped>
.union {
  display: flex;

  .item {
    width: 50vw;
  }
}
</style>
