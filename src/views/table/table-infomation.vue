<template>
  <div class="main">
    <div v-if="route.params.id === '1'">
      <div>2.1设置本公司账套、部门</div>
      <modifyTable
        name="本公司账套"
        :get_data="infoapi.getZhangTao"
        :add_data="infoapi.addZhangTao"
        :delete_data="infoapi.deletaZhangTao"
        :modify_data="infoapi.refreshZhangTao"
        :export="infoapi.Partmentexcel"
        :command="['刷新', '新建', '导出']"
        :search="ZhangTaoSearchCondition"
        @fresh="handle_fresh"
        ref="zhangtao"
        @click_row="handle_click"
        :col="table_col.ZhangTao"
        :features="table_add.ZhangTao"
      ></modifyTable>
      <modifyTable
        name="本公司开户银行"
        :get_data="infoapi.getBank"
        :add_data="infoapi.addBank"
        :delete_data="infoapi.deletaBank"
        :modify_data="infoapi.refreshBank"
        :command="['刷新', '添加']"
        :search="bankSearchCondition"
        @fresh="handle_fresh"
        ref="bank"
        :col="table_col.Bank"
        :features="table_add.Bank"
      ></modifyTable>
      <modifyTable
        name="本公司业务部门"
        :get_data="infoapi.getPartment"
        :add_data="infoapi.addPartment"
        :delete_data="infoapi.deletaPartment"
        :modify_data="infoapi.refreshPartment"
        :search="PartmentSearchCondition"
        @fresh="handle_fresh"
        ref="partment"
        :command="['刷新', '添加']"
        :col="table_col.Partment"
        :features="table_add.Partment"
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
        :get_data="infoapi.getOrders"
        :add_data="infoapi.addOrders"
        :delete_data="infoapi.deletaOrders"
        :modify_data="infoapi.refreshOrders"
        :command="['刷新', '添加']"
      ></modifyTable>
      <div class="union">
        <modifyTable
          name="海关款项类别"
          :get_data="infoapi.getOrders"
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
  </div>
</template>

<script lang="ts" setup>
import modifyTable from '../../components/modify-table.vue'
import * as infoapi from '../../http/api/infomation'
import { useRoute } from 'vue-router'
import * as table_col from '../../assets/table_info/table-title'
import * as table_add from '../../assets/table_info/table-add'

const route = useRoute()

//子表示例对象

let zhangtao = ref()
let bank = ref()
let partment = ref()
// 条件按筛选处理
let ZhangTaoSearchCondition: { [kye: string]: string | number } = reactive({})

//银行
let bankSearchCondition: { [kye: string]: string | number } = reactive({})

//部门
let PartmentSearchCondition: { [kye: string]: string | number } = reactive({})

//联动表
const handle_click = (row: any, col: any) => {
  if (route.params.id === '1') {
    console.log(row.id)
    bankSearchCondition['company'] = row.id.toString()
    bank.value.refresh_data()
    PartmentSearchCondition['comoany'] = row.id.toString()
    partment.value.refresh_data()
  }
}

const handle_fresh = (name: string) => {
  if (name == '本公司账套') {
    zhangtao.value.refresh_data()
  } else if (name == '本公司开户银行') {
    delete bankSearchCondition['company']
    bank.value.refresh_data()
  } else if (name == '本公司业务部门') {
    delete PartmentSearchCondition['company']
    partment.value.refresh_data()
  }
}
</script>

<style lang="less" scoped>
.main {
  padding: 1vh 0.5vw;
  margin: 0.5vh auto;
  margin-bottom: 0;
  width: 99vw;
  border: 1px solid #000;
  box-sizing: border-box;

  .union {
    display: flex;

    .item {
      width: 50vw;
    }
  }
}
</style>
