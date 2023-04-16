<template>
  <div class="table-area">
    <el-table :data="data" row-key="id" align="left" @cell-click="goto">
      <el-table-column
        v-for="(item, index) in col"
        :key="`col_${index}`"
        :prop="col[index].prop"
        :label="item.label"
      >
      </el-table-column>
    </el-table>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

let data = reactive([
  {
    m1: '设置本公司账套、部门',
    m2: '设置合同模板',
    m3: '购销订单录入',
    m4: '收货',
    m5: '入库',
    m6: '付款',
    m7: '保值录入（V1.1）',
    m8: '现货盈亏',
    m9: '现货合同'
  },
  {
    m1: '设置往来单位资料、部门',
    m2: '设置提单模板',
    m3: '合同、印花税',
    m4: '发货',
    m5: '出库',
    m6: '收款',
    m7: '',
    m8: '期现盈亏（V1.1）',
    m9: '现货交易'
  },
  {
    m1: '设置商品资料',
    m2: '设置付款申请模板',
    m3: '采购付款申请',
    m4: '实数录入',
    m5: '',
    m6: '',
    m7: '',
    m8: '现货资金、费用',
    m9: ''
  },
  {
    m1: '设置币种、订单模式',
    m2: '设置对账单模板',
    m3: '销售收款匹配',
    m4: '货物变更及对账',
    m5: '',
    m6: '',
    m7: '',
    m8: '现货开票统计',
    m9: ''
  },
  {
    m1: '仓储协议、费率登记',
    m2: '',
    m3: '余款对账',
    m4: '报关及对账',
    m5: '',
    m6: '',
    m7: '',
    m8: '现货库存明细',
    m9: ''
  },
  {
    m1: '',
    m2: '',
    m3: '结余款',
    m4: '仓储费及对账',
    m5: '',
    m6: '',
    m7: '',
    m8: '',
    m9: ''
  },
  {
    m1: '',
    m2: '',
    m3: '发票确认',
    m4: '对账单付款申请',
    m5: '',
    m6: '',
    m7: '',
    m8: '',
    m9: ''
  }
])

let col = reactive([
  {
    label: '资料',
    prop: 'm1'
  },
  {
    label: '模板',
    prop: 'm2'
  },
  {
    label: '贸易',
    prop: 'm3'
  },
  {
    label: '货管',
    prop: 'm4'
  },
  {
    label: '库管',
    prop: 'm5'
  },
  {
    label: '财务',
    prop: 'm6'
  },
  {
    label: '期货',
    prop: 'm7'
  },
  {
    label: '统计报表',
    prop: 'm8'
  },
  {
    label: '监控',
    prop: 'm9'
  }
])

const goto = (row: any, column: any) => {
  let content = row[column.property]
  if (content == '设置本公司账套、部门') {
    router.push('/main/infomation/1')
  } else if (content == '设置往来单位资料、部门') {
    router.push('/main/infomation/2')
  } else if (content == '设置商品资料') {
    router.push('/main/infomation/3')
  } else if (content == '设置币种、订单模式') {
    router.push('/main/infomation/4')
  } else if (content == '仓储协议、费率登记') {
    router.push('/main/infomation/5')
  }
}
</script>

<style lang="less" scoped>
.t1 {
  margin-top: 5vh;
}

.table-area {
  margin: 0 auto;
  width: 99vw;
}
</style>
