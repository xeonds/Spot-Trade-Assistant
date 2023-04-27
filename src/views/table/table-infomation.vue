<template>
  <div class="main">
    <div v-if="route.params.id === '1'">
      <div>2.1设置本公司账套、部门</div>
      <modifyTable
        id="information1"
        name="本公司账套"
        :get_data="infoapi.getZhangTao"
        :add_data="infoapi.addZhangTao1"
        :delete_data="infoapi.deletaZhangTao"
        :modify_data="infoapi.refreshZhangTao"
        :export="infoapi.Partmentexcel"
        :command="['刷新', '新建', '导出']"
        :search="ZhangTaoSearchCondition"
        @fresh="handle_fresh"
        ref="zhangtao"
        @click_row="handle_click"
        :col="table_col.ZhangTao1"
        :features="table_add.ZhangTao1"
        :rules="table_rules.Zhangtao1rules"
        :enable_select="true"
      ></modifyTable>
      <modifyTable
        id="information2"
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
        change_base="company"
      ></modifyTable>
      <modifyTable
        id="information3"
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
        change_base="company"
      ></modifyTable>
    </div>
    <div v-if="route.params.id === '2'">
      <div>2.1设置往来单位账套、部门</div>
      <modifyTable
        id="information1"
        name="往来单位资料"
        :get_data="infoapi.getZhangTao2"
        :add_data="infoapi.addZhangTao2"
        :delete_data="infoapi.deletaZhangTao"
        :modify_data="infoapi.refreshZhangTao"
        :export="infoapi.Partmentexcel"
        :command="['刷新', '新建', '导出']"
        :search="ZhangTaoSearchCondition2"
        @fresh="handle_fresh"
        ref="zhangtao2"
        @click_row="handle_click"
        :col="table_col.ZhangTao2"
        :features="table_add.ZhangTao2"
        :enable_select="true"
        @cancel_select="cancel_select"
      ></modifyTable>
      <modifyTable
        id="information2"
        name="往来单位银行"
        :get_data="infoapi.getBank"
        :add_data="infoapi.addBank"
        :delete_data="infoapi.deletaBank"
        :modify_data="infoapi.refreshBank"
        :command="['刷新', '添加']"
        :search="bankSearchCondition2"
        @fresh="handle_fresh"
        ref="bank2"
        :col="table_col.Bank"
        :features="table_add.Bank"
        change_base="company"
      ></modifyTable>
      <modifyTable
        id="information3"
        name="往来单位部门"
        :get_data="infoapi.getPartment"
        :add_data="infoapi.addPartment"
        :delete_data="infoapi.deletaPartment"
        :modify_data="infoapi.refreshPartment"
        :search="PartmentSearchCondition2"
        @fresh="handle_fresh"
        ref="partment2"
        :command="['刷新', '添加']"
        :col="table_col.Partment"
        :features="table_add.Partment"
        change_base="company"
      ></modifyTable>
    </div>
    <div v-if="route.params.id === '3'">
      <modifyTable
        id="information1"
        name="商品品种"
        :get_data="infoapi.getVariety"
        :add_data="infoapi.addVariety"
        :delete_data="infoapi.deletaVariety"
        :modify_data="infoapi.refreshVariety"
        :command="['刷新', '新建', '导出']"
        :search="VarietySearchCondition"
        @fresh="handle_fresh"
        @click_row="handle_click"
        ref="Variety"
        :col="table_col.Variety"
        :features="table_add.Variety"
        :enable_select="true"
        @cancel_select="cancel_select"
        :option_get="{ variety: varietyOptionsGet }"
      ></modifyTable>
      <modifyTable
        id="information2"
        name="商品规格"
        :get_data="infoapi.getGrade"
        :add_data="infoapi.addGrade"
        :delete_data="infoapi.deletaGrade"
        :modify_data="infoapi.refreshGrade"
        :command="['刷新', '添加']"
        :search="GradeSearchCondition"
        @fresh="handle_fresh"
        ref="Grade"
        :col="table_col.Grade"
        :features="table_add.Grade"
        change_base="variety"
        :option_get="{ variety: varietyOptionsGet }"
        :enAddBeforeSelect="true"
      ></modifyTable>
      <modifyTable
        id="information3"
        name="商品商标"
        :get_data="infoapi.getTrademark"
        :add_data="infoapi.addTrademark"
        :delete_data="infoapi.deletaTrademark"
        :modify_data="infoapi.refreshTrademark"
        :command="['刷新', '添加']"
        :search="TrademarkSearchCondition"
        @fresh="handle_fresh"
        ref="Trademark"
        :col="table_col.Trademark"
        :features="table_add.Trademark"
        change_base="variety"
        :option_get="{ variety: varietyOptionsGet }"
        :enAddBeforeSelect="true"
      ></modifyTable>
    </div>
    <div v-if="route.params.id === '4'">
      <modifyTable
        id="information1"
        name="币种"
        :get_data="infoapi.getCurrency"
        :add_data="infoapi.addCurrency"
        :delete_data="infoapi.deletaCurrency"
        :modify_data="infoapi.refreshCurrency"
        :command="['刷新', '新建', '导出']"
        :search="CurrencySearchCondition"
        @fresh="handle_fresh"
        ref="Currency"
        :col="table_col.Currency"
        :features="table_add.Currency"
      ></modifyTable>
      <modifyTable
        id="information2"
        name="订单模式"
        :get_data="infoapi.getOrders"
        :add_data="infoapi.addOrders"
        :delete_data="infoapi.deletaOrders"
        :modify_data="infoapi.refreshOrders"
        :command="['刷新', '添加']"
        :search="OrdersSearchCondition"
        @fresh="handle_fresh"
        ref="Orders"
        :col="table_col.Orders"
        :features="table_add.Orders"
      ></modifyTable>
      <div class="union">
        <modifyTable
          id="information3"
          name="海关款项类别"
          :get_data="infoapi.getType"
          :add_data="infoapi.addType4"
          :delete_data="infoapi.deletaType"
          :modify_data="infoapi.refreshType4"
          :command="['刷新', '添加']"
          class="item"
          :search="TypeSearchCondition"
          @fresh="handle_fresh"
          ref="Type"
          :col="table_col.Type"
          :features="table_add.Type"
          width="49"
        ></modifyTable>
        <modifyTable
          id="information4"
          name="仓储款项类别"
          :get_data="infoapi.getType"
          :add_data="infoapi.addType3"
          :delete_data="infoapi.deletaType"
          :modify_data="infoapi.refreshType3"
          :command="['刷新', '添加']"
          class="item"
          :search="TypeSearchCondition2"
          @fresh="handle_fresh"
          ref="Type2"
          :col="table_col.Type"
          :features="table_add.Type"
          width="49"
        ></modifyTable>
      </div>
    </div>
    <div v-if="route.params.id === '5'">
      <modifyTable
        id="information1"
        name="仓储协议"
        :get_data="infoapi.getSta"
        :add_data="infoapi.addSta"
        :delete_data="infoapi.deletaSta"
        :modify_data="infoapi.refreshSta"
        :command="['刷新', '新建', '导出']"
        :search="StaSearchCondition"
        @fresh="handle_fresh"
        ref="Sta"
        :col="table_col.Sta"
        :features="table_add.Sta"
      ></modifyTable>
      <modifyTable
        id="information2"
        name="签约品种"
        :get_data="infoapi.getSvar"
        :add_data="infoapi.addSvar"
        :delete_data="infoapi.deletaSvar"
        :modify_data="infoapi.refreshSvar"
        :command="['刷新', '添加']"
        :search="SvarSearchCondition"
        @fresh="handle_fresh"
        ref="Svar"
        :col="table_col.Svar"
        :features="table_add.Svar"
      ></modifyTable>
      <div class="union">
        <modifyTable
          id="information3"
          name="收费项目"
          :get_data="infoapi.getItem"
          :add_data="infoapi.addItem"
          :delete_data="infoapi.deletaItem"
          :modify_data="infoapi.refreshItem"
          :command="['刷新', '添加']"
          class="item"
          :search="ItemSearchCondition"
          @fresh="handle_fresh"
          ref="Item"
          :col="table_col.Item"
          :features="table_add.Item"
          width="50"
        ></modifyTable>
        <modifyTable
          id="information4"
          name="仓储费"
          :get_data="infoapi.getStof"
          :add_data="infoapi.addStof"
          :delete_data="infoapi.deletaStof"
          :modify_data="infoapi.refreshStof"
          :command="['刷新', '添加']"
          class="item"
          :search="StofSearchCondition"
          @fresh="handle_fresh"
          ref="Stof"
          :col="table_col.Stof"
          :features="table_add.Stof"
          width="50"
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
import * as table_rules from '../../assets/table_info/rule'
const route = useRoute()

const varietyOptionsGet = async () => {
  let res = await infoapi.getallVariety({})
  let temp: any[] = []
  res.data.forEach((element: any) => {
    temp.push({
      label: element.name,
      value: element.id
    })
  })
  return temp
}

//表1
//子表示例对象
let zhangtao = ref()
let bank = ref()
let partment = ref()
// 条件按筛选处理
let ZhangTaoSearchCondition: { [kye: string]: string | number } = reactive({})
//银行
let bankSearchCondition: { [kye: string]: string | number } = reactive({})
bankSearchCondition.company = 5
//部门
let PartmentSearchCondition: { [kye: string]: string | number } = reactive({})
PartmentSearchCondition.company = 5

//表2
let zhangtao2 = ref()
let bank2 = ref()
let partment2 = ref()
// 条件按筛选处理
let ZhangTaoSearchCondition2: { [kye: string]: string | number } = reactive({})
//银行
let bankSearchCondition2: { [kye: string]: string | number } = reactive({})
//部门
let PartmentSearchCondition2: { [kye: string]: string | number } = reactive({})

//表3
let Variety = ref()
let Grade = ref()
let Trademark = ref()
// 条件按筛选处理
let VarietySearchCondition: { [kye: string]: string | number } = reactive({})
//银行
let GradeSearchCondition: { [kye: string]: string | number } = reactive({})
//部门
let TrademarkSearchCondition: { [kye: string]: string | number } = reactive({})

//表4
let Currency = ref()
let Orders = ref()
let Type = ref()
let Type2 = ref()
// 条件按筛选处理
let CurrencySearchCondition: { [kye: string]: string | number } = reactive({})
//银行
let OrdersSearchCondition: { [kye: string]: string | number } = reactive({})
//部门
let TypeSearchCondition: { [kye: string]: string | number } = reactive({})
TypeSearchCondition.money = 4
let TypeSearchCondition2: { [kye: string]: string | number } = reactive({})
TypeSearchCondition2.money = 3

//表5
let Sta = ref()
let Svar = ref()
let Item = ref()
let Stof = ref()
// 条件按筛选处理
let StaSearchCondition: { [kye: string]: string | number } = reactive({})
//银行
let SvarSearchCondition: { [kye: string]: string | number } = reactive({})
//部门
let ItemSearchCondition: { [kye: string]: string | number } = reactive({})
let StofSearchCondition: { [kye: string]: string | number } = reactive({})
//联动表
const handle_click = (row: any, col: any) => {
  if (route.params.id === '1') {
    bank.value.refresh_data()
    partment.value.refresh_data()
  }
  if (route.params.id === '2') {
    bankSearchCondition2['company'] = row.id
    bank2.value.refresh_data()
    PartmentSearchCondition2['company'] = row.id
    partment2.value.refresh_data()
  }
  if (route.params.id === '3') {
    GradeSearchCondition['variety'] = row.id
    Grade.value.refresh_data()
    TrademarkSearchCondition['variety'] = row.id
    Trademark.value.refresh_data()
  }
}

const handle_fresh = (name: string) => {
  if (name == '本公司账套') {
    zhangtao.value.refresh_data()
  } else if (name == '本公司开户银行') {
    bank.value.refresh_data()
  } else if (name == '本公司业务部门') {
    partment.value.refresh_data()
  } else if (name == '往来单位资料') {
    zhangtao2.value.refresh_data()
  } else if (name == '往来单位银行') {
    delete bankSearchCondition2['company']
    bank2.value.refresh_data()
  } else if (name == '往来单位部门') {
    delete PartmentSearchCondition2['company']
    partment2.value.refresh_data()
  } else if (name == '商品品种') {
    Variety.value.refresh_data()
  } else if (name == '商品规格') {
    delete GradeSearchCondition['variety']
    Grade.value.refresh_data()
  } else if (name == '商品商标') {
    delete TrademarkSearchCondition['variety']
    Trademark.value.refresh_data()
  } else if (name == '币种') {
    Currency.value.refresh_data()
  } else if (name == '订单模式') {
    Orders.value.refresh_data()
  } else if (name == '海关款项类别') {
    Type.value.refresh_data()
  } else if (name == '仓储款项类别') {
    Type2.value.refresh_data()
  } else if (name == '仓储协议') {
    Sta.value.refresh_data()
  } else if (name == '签约品种') {
    Svar.value.refresh_data()
  } else if (name == '收费项目') {
    Item.value.refresh_data()
  } else if (name == '仓储费') {
    Stof.value.refresh_data()
  }
}

const cancel_select = (name: string) => {
  if (name == '本公司账套') {
    zhangtao.value.refresh_data()
  } else if (name == '往来单位资料') {
    zhangtao2.value.refresh_data()
    delete bankSearchCondition2['company']
    bank2.value.refresh_data()
    delete PartmentSearchCondition2['company']
    partment2.value.refresh_data()
  } else if (name == '商品品种') {
    delete GradeSearchCondition['variety']
    Grade.value.refresh_data()
    delete TrademarkSearchCondition['variety']
    Trademark.value.refresh_data()
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
  }
}
</style>
