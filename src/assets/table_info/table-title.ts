export const ZhangTao1 = [
  { label: '账套代码', prop: 'code', fold: false },
  { label: '账套简称', prop: 'shortname', fold: false },
  { label: '账套全称', prop: 'fullname', fold: false },
  { label: '纳税人识别号', prop: 'taxid', fold: false },
  { label: '税票登记地址', prop: 'taxaddr', fold: false },
  { label: '税票登记电话', prop: 'taxphone', fold: false },
  { label: '最大票额', prop: 'invmax', fold: false },
  { label: '开提单方式', prop: 'ladmet', fold: false }
]

export const ZhangTao2 = [
  { label: '往来单位代码', prop: 'code', fold: false },
  { label: '往来单位简称', prop: 'shortname', fold: false },
  { label: '往来单位全称', prop: 'fullname', fold: false },
  { label: '纳税人识别号', prop: 'taxid', fold: false },
  { label: '税票登记地址', prop: 'taxaddr', fold: false },
  { label: '税票登记电话', prop: 'taxphone', fold: false },
  { label: '最大票额', prop: 'invmax', fold: false },
  { label: '开提单方式', prop: 'ladmet', fold: false }
]

export const Bank = [
  //TODO
  { label: '账套全称', prop: 'fullname', fold: false },
  { label: '开户银行名称', prop: 'name', fold: false },
  { label: '开户银行账号', prop: 'accounts', fold: false },
  { label: '开户行行号', prop: 'swcode', fold: false },
  { label: '税票账号标志', prop: 'taxsign', fold: false }
]

export const Bank2 = [
  //TODO
  { label: '往来单位全称', prop: 'fullname', fold: false },
  { label: '开户银行名称', prop: 'name', fold: false },
  { label: '开户银行账号', prop: 'accounts', fold: false },
  { label: '开户行行号', prop: 'swcode', fold: false },
  { label: '税票账号标志', prop: 'taxsign', fold: false }
]

export const Partment = [
  { label: '部门代码', prop: 'code', fold: false },
  { label: '部门名称', prop: 'name', fold: false },
  { label: '联系人', prop: 'contact', fold: false },
  { label: '电话', prop: 'tphone', fold: false },
  { label: '手机', prop: 'mphone', fold: false },
  { label: '传真', prop: 'fax', fold: false },
  { label: '邮箱', prop: 'email', fold: false },
  { label: '邮寄地址', prop: 'address', fold: false },
  { label: '邮政编码', prop: 'postcode', fold: false },
  { label: '通知方式', prop: 'notmet', fold: false },
  { label: '通知号码', prop: 'notno', fold: false }
]
//表3

export const Variety = [
  { label: '品种', prop: 'name', fold: false },
  { label: '代码', prop: 'code', fold: false },
  { label: '期货每手数量', prop: 'nof', fold: false },
  { label: '重量单位', prop: 'unit', fold: false },
  { label: '实数结算标志', prop: 'relset', fold: false },
  { label: '增值税率', prop: 'vat', fold: false },
  { label: '进口关税', prop: 'tariff', fold: false }
]

export const Grade = [
  { label: '品种', prop: 'variety', fold: false },
  { label: '规格', prop: 'name', fold: false },
  { label: '代码', prop: 'code', fold: false },
  { label: '含量', prop: 'content', fold: false },
  { label: '外形尺寸', prop: 'size', fold: false },
  { label: '计量标准（块/件）', prop: 'meter', fold: false },
  { label: '每（块/件）重量', prop: 'weight', fold: false }
]

export const Trademark = [
  { label: '品种', prop: 'variety', fold: false },
  { label: '商标/品牌', prop: 'name', fold: false },
  { label: '代码', prop: 'code', fold: false },
  { label: '生产国', prop: 'country', fold: false },
  { label: '产地', prop: 'place', fold: false },
  { label: '生产厂商', prop: 'vendor', fold: false }
]

export const Currency = [
  { label: '币种名称', prop: 'name', fold: false },
  { label: '币种属性', prop: 'isLocal', fold: false }
]

export const Orders = [
  { label: '订单模式', prop: 'mode', fold: false },
  { label: '价格修改模式', prop: 'psign', fold: false }
]

export const Type = [{ label: '类别', prop: 'type', fold: false }]
//表5

export const Sta = [
  { label: '账套简称', prop: 'ourcompany', fold: false },
  { label: '仓库简称', prop: 'storage', fold: false },
  { label: '仓储协议号', prop: 'agreeno', fold: false },
  { label: '协议有效期', prop: 'expdate', fold: false },
  { label: '有效状态', prop: 'expsign', fold: false },
  { label: '签约日期', prop: 'condate', fold: false },
  { label: '协议扫描件', prop: 'scan', fold: false }
]

export const Svar = [
  { label: '品种', prop: 'sta', fold: false },
  { label: '规格', prop: 'grad', fold: false },
  { label: '收费币种', prop: 'country', fold: false }
]

export const Item = [
  { label: '项目名称', prop: 'name', fold: false },
  { label: '费率', prop: 'cost', fold: false },
  { label: '费用单位', prop: 'iunit', fold: false }
]

export const Stof = [
  { label: '仓储起始日', prop: 'sday', fold: false },
  { label: '仓储终止日', prop: 'eday', fold: false },
  { label: '费率', prop: 'fee', fold: false },
  { label: '费用单位', prop: 'sunit', fold: false }
]

export const UserInfo = [
  { label: '用户名', prop: 'userName', fold: false },
  { label: '微信号', prop: 'wechat', fold: false },
  { label: '邮箱', prop: 'email', fold: false },
  { label: '手机号', prop: 'phonenumber', fold: false },
  { label: '性别', prop: 'sex', fold: false },
  // {  //   label: '创建时间',//   prop: 'createTime',//   fold: false
  // },
  // {  //   label: '更新时间',//   prop: 'updateTime',//   fold: false
  // },
  {
    label: '用户角色',
    prop: 'roles',
    fold: true,
    son_labels: [
      // {  //   label: 'id',   //   prop: 'id'
      // },
      { label: ' ', prop: ['roles', 'name'] }
    ]
  }
]

export const RoleInfo = [
  { label: '名称', prop: 'name', fold: false },
  { label: '备注', prop: 'remark', fold: false },
  // {  //   label: '状态',//   prop: 'status',//   fold: false
  // },
  {
    label: '拥有该角色的用户',
    prop: 'users',
    fold: true,
    son_labels: [
      { label: '用户名', prop: ['users', 'name'] },
      { label: '角色权限', prop: ['menus', 'menuName'] }
    ]
  }
]

export const MenusInfo = [
  { label: '名称', prop: 'menuName', fold: false },
  { label: '备注', prop: 'remark', fold: false }
  // {  //   label: '状态',//   prop: 'status',//   fold: false
  // }
]

export const ModelInfo = [
  {
    label: '贸易类型',
    prop: 'name',
    fold: false,
    filters: [
      { text: '内贸', value: '内贸' },
      { text: '进口', value: '进口' }
    ],
    filter_method: (value, row, column) => {
      const property = column['prop']
      return row[property] === value
    }
  },
  { label: '订单模式', prop: 'name', fold: false },
  {
    label: '交收方式',
    prop: 'name',
    fold: false,
    filters: [
      { text: '现货', value: '现货' },
      { text: '远期', value: '远期' }
    ],
    filter_method: (value, row, column) => {
      const property = column['prop']
      return row[property] === value
    }
  },
  { label: '购销方向', prop: 'name', fold: false },
  { label: '印花税率', prop: 'name', fold: false }
]

export const FutureInfo = [
  { label: '成交日期', prop: 'f1', fold: false },
  { label: '保值类型', prop: 'f2', fold: false },
  { label: '账套', prop: 'f3', fold: false },
  { label: '业务部门', prop: 'f4', fold: false },
  { label: '期贷公司', prop: 'f5', fold: false },
  { label: '期贷合约', prop: 'f6', fold: false },
  { label: '开/平仓', prop: 'f7', fold: false },
  { label: '买/卖', prop: 'f8', fold: false },
  { label: '品种', prop: 'f9', fold: false },
  { label: '规格', prop: 'f10', fold: false },
  { label: '手数', prop: 'f11', fold: false },
  { label: '每手数量', prop: 'f12', fold: false },
  { label: '单位', prop: 'f13', fold: false },
  { label: '加权价', prop: 'f14', fold: false },
  { label: '平仓盈亏', prop: 'f15', fold: false },
  { label: '币种', prop: 'f16', fold: false },
  { label: '头寸号', prop: 'f17', fold: false },
  { label: '交易单号', prop: 'f18', fold: false },
  { label: '备注', prop: 'f19', fold: false }
]

export const FutureInfo2 = [
  { label: '建仓日期', prop: 'f1', fold: false },
  { label: '保值类型', prop: 'f2', fold: false },
  { label: '账套', prop: 'f3', fold: false },
  { label: '业务部门', prop: 'f4', fold: false },
  { label: '期贷公司', prop: 'f5', fold: false },
  { label: '期贷合约', prop: 'f6', fold: false },
  { label: '买/卖', prop: 'f7', fold: false },
  { label: '品种', prop: 'f8', fold: false },
  { label: '规格', prop: 'f9', fold: false },
  { label: '手数', prop: 'f10', fold: false },
  { label: '每手数量', prop: 'f11', fold: false },
  { label: '单位', prop: 'f12', fold: false },
  { prop: '成本价', fold: false },
  { label: '结算价', prop: 'f14', fold: false },
  { label: '浮动盈亏', prop: 'f15', fold: false },
  { label: '币种', prop: 'f16', fold: false },
  { label: '头寸号', prop: 'f17', fold: false }
]

export const StatisticsInfo = [
  { label: '日期', prop: 'f1', fold: false },
  { label: '账套', prop: 'f2', fold: false },
  { label: '业务部门', prop: 'f3', fold: false },
  { label: '品种', prop: 'f4', fold: false },
  { label: '规格', prop: 'f5', fold: false },
  { label: '单位', prop: 'f6', fold: false },
  { label: '币种', prop: 'f7', fold: false }
]

export const TradeInfo = [
  { label: '交易日期', prop: 'date', fold: false },
  { label: '账套', prop: 'ledger', fold: false },
  { label: '业务部门', prop: 'ourDept', fold: false },
  { label: '贸易商', prop: 'company', fold: false },
  { label: '贸易商部门', prop: 'companyDept', fold: false },
  { label: '购/销', prop: 'ps', fold: false },
  { label: '品种', prop: 'variety', fold: false },
  { label: '规格', prop: 'grade', fold: false },
  { label: '品牌', prop: 'trademark', fold: false },
  { label: '订单数量', prop: 'real', fold: false },
  { label: '数量单位', prop: 'unit', fold: false },
  { label: '订单价格', prop: 'atPrice', fold: false },
  { label: '订单币种', prop: 'currency', fold: false },
  { label: '贸易类型', prop: 'pattern', fold: false },
  { label: '订单模式', prop: 'order', fold: false },
  { label: '交货方式', prop: 'deliver', fold: false },
  { label: '批次号', prop: 'batchNo', fold: false },
  { label: '订单号', prop: 'orderNo', fold: false }
]

export const PositionInfo = [
  { prop: 'id', fold: false, hidden: true },
  { prop: 'date', label: '采购日期', fold: false },
  { prop: 'ledger', label: '账套', fold: false },
  { prop: 'ourdept', label: '业务部门', fold: false },
  { prop: 'company', label: '贸易商', fold: false },
  { prop: 'variety', label: '品种', fold: false },
  { prop: 'grade', label: '规格', fold: false },
  { prop: 'trademark', label: '品牌', fold: false },
  { prop: 'oi', label: '持仓量', fold: false },
  { prop: 'unit', label: '单位', fold: false },
  { prop: 'pattern', label: '贸易类型', fold: false },
  { prop: 'orderId', label: '订单模式', fold: false },
  { prop: 'cprice', label: '成本价', fold: false, hidden: true },
  { prop: 'deliver', label: '交货方式', fold: false },
  { prop: 'batchNo', label: '批次号', fold: false },
  {
    label: '订单浮盈',
    children: [
      { label: '成本价', prop: 'cprice', fold: false },
      { label: '结算价', prop: 'cprice', fold: false },
      { prop: 'cprice', label: '浮盈', fold: false },
      { prop: 'cprice', label: '币种', fold: false }
    ]
  },
  {
    label: '进出口参考浮盈',
    children: [
      { label: '参考汇率', prop: 'cprice', fold: false },
      { label: '进出口成本', prop: 'cprice', fold: false },
      { label: '结算价', prop: 'cprice', fold: false },
      { label: '浮盈', prop: 'cprice', fold: false },
      { label: '币种', prop: 'cprice', fold: false }
    ]
  }
]

export const Tcost = [
  { prop: 'lsprice', label: '进出口结算价', fold: false },
  { prop: 'positionCur', label: '币种', fold: false },
  { prop: 'exrate', label: '参考汇率', fold: false },
  { prop: 'lcprice', label: '参考成本', fold: false },
  { prop: 'fpl', label: '浮盈', fold: false }
]

export const Gouxiaojilu = [
  { prop: 'fpl', label: '交易日期', fold: false },
  { prop: 'fpl', label: '合同生成状态', fold: false },
  { prop: 'fpl', label: '账套', fold: false },
  { prop: 'fpl', label: '业务部门', fold: false },
  { prop: 'fpl', label: '贸易商', fold: false },
  { prop: 'fpl', label: '购/销', fold: false },
  { prop: 'fpl', label: '品种', fold: false },
  { prop: 'fpl', label: '规格', fold: false },
  { prop: 'fpl', label: '品牌', fold: false },
  { prop: 'fpl', label: '订单数量', fold: false },
  { prop: 'fpl', label: '数量单位', fold: false },
  { prop: 'fpl', label: '订单价格', fold: false },
  { prop: 'fpl', label: '订单币种', fold: false },
  { prop: 'fpl', label: '成交金额', fold: false },
  { prop: 'fpl', label: '贸易类型', fold: false },
  { prop: 'fpl', label: '订单模式', fold: false },
  { prop: 'fpl', label: '交货方式', fold: false },
  { prop: 'fpl', label: '订单号', fold: false }
]

export const Gouxiaohetong = [
  { prop: 'fpl', label: '合同日期', fold: false },
  { prop: 'fpl', label: '归档状态', fold: false },
  { prop: 'fpl', label: '签订状态', fold: false },
  { prop: 'fpl', label: '付款申请状态', fold: false },
  { prop: 'fpl', label: '账套', fold: false },
  { prop: 'fpl', label: '业务部门', fold: false },
  { prop: 'fpl', label: '购/销', fold: false },
  { prop: 'fpl', label: '合同金额', fold: false },
  { prop: 'fpl', label: '印花税', fold: false },
  { prop: 'fpl', label: '实付印花税', fold: false },
  { prop: 'fpl', label: '币种', fold: false },
  { prop: 'fpl', label: '合同号', fold: false },
  { prop: 'fpl', label: '备注', fold: false }
]

export const Yinhuashui = [
  { prop: 'fpl', label: '申请日期', fold: false },
  { prop: 'fpl', label: '付款状态', fold: false },
  { prop: 'fpl', label: '款项', fold: false },
  { prop: 'fpl', label: '款项类别', fold: false },
  { prop: 'fpl', label: '账套', fold: false },
  { prop: 'fpl', label: '业务部门', fold: false },
  { prop: 'fpl', label: '税务机关', fold: false },
  { prop: 'fpl', label: '对方银行名称', fold: false },
  { prop: 'fpl', label: '对方银行账号', fold: false },
  { prop: 'fpl', label: '申请金额', fold: false },
  { prop: 'fpl', label: '币种', fold: false },
  { prop: 'fpl', label: '付款申请单号', fold: false },
  { prop: 'fpl', label: '备注', fold: false }
]

export const Caigoujilu = [
  { prop: 'fpl', label: '交易日期', fold: false },
  { prop: 'fpl', label: '申请状态', fold: false },
  { prop: 'fpl', label: '签订状态', fold: false },
  { prop: 'fpl', label: '账套', fold: false },
  { prop: 'fpl', label: '业务部门', fold: false },
  { prop: 'fpl', label: '贸易商', fold: false },
  { prop: 'fpl', label: '贸易商部门', fold: false },
  { prop: 'fpl', label: '品种', fold: false },
  { prop: 'fpl', label: '品牌', fold: false },
  { prop: 'fpl', label: '数量', fold: false },
  { prop: 'fpl', label: '数量单位', fold: false },
  { prop: 'fpl', label: '价格', fold: false },
  { prop: 'fpl', label: '币种', fold: false },
  { prop: 'fpl', label: '成交金额', fold: false },
  { prop: 'fpl', label: '实付金额', fold: false },
  { prop: 'fpl', label: '贸易类型', fold: false },
  { prop: 'fpl', label: '订单模式', fold: false },
  { prop: 'fpl', label: '交货方式', fold: false },
  { prop: 'fpl', label: '交货方式', fold: false },
  { prop: 'fpl', label: '合同号', fold: false }
]

export const Caigoudingdan = [
  { prop: 'fpl', label: '交易日期', fold: false },
  { prop: 'fpl', label: '申请状态', fold: false },
  { prop: 'fpl', label: '签订状态', fold: false },
  { prop: 'fpl', label: '账套', fold: false },
  { prop: 'fpl', label: '业务部门', fold: false },
  { prop: 'fpl', label: '贸易商', fold: false },
  { prop: 'fpl', label: '贸易商部门', fold: false },
  { prop: 'fpl', label: '品种', fold: false },
  { prop: 'fpl', label: '规格', fold: false },
  { prop: 'fpl', label: '品牌', fold: false },
  { prop: 'fpl', label: '数量', fold: false },
  { prop: 'fpl', label: '数量单位', fold: false },
  { prop: 'fpl', label: '价格', fold: false },
  { prop: 'fpl', label: '币种', fold: false },
  { prop: 'fpl', label: '成交金额', fold: false },
  { prop: 'fpl', label: '实付金额', fold: false },
  { prop: 'fpl', label: '贸易类型', fold: false },
  { prop: 'fpl', label: '订单模式', fold: false },
  { prop: 'fpl', label: '交货方式', fold: false },
  { prop: 'fpl', label: '订单号', fold: false },
  { prop: 'fpl', label: '合同号', fold: false }
]

export const Caigoufukuanshenqingjilu = [
  { prop: 'fpl', label: '申请日期', fold: false },
  { prop: 'fpl', label: '付款状态', fold: false },
  { prop: 'fpl', label: '账套', fold: false },
  { prop: 'fpl', label: '业务部门', fold: false },
  { prop: 'fpl', label: '贸易商', fold: false },
  { prop: 'fpl', label: '款项', fold: false },
  { prop: 'fpl', label: '款项类别', fold: false },
  { prop: 'fpl', label: '对方银行名称', fold: false },
  { prop: 'fpl', label: '对方银行账号', fold: false },
  { prop: 'fpl', label: '申请金额', fold: false },
  { prop: 'fpl', label: '币种', fold: false },
  { prop: 'fpl', label: '付款申请单号', fold: false },
  { prop: 'fpl', label: '备注', fold: false }
]

export const Gouxiaodingdan = [
  { prop: 'fpl', label: '确认日期', fold: false },
  { prop: 'fpl', label: '交易日期', fold: false },
  { prop: 'fpl', label: '发票状态', fold: false },
  { prop: 'fpl', label: '账套', fold: false },
  { prop: 'fpl', label: '业务部门', fold: false },
  { prop: 'fpl', label: '贸易商', fold: false },
  { prop: 'fpl', label: '贸易商部门', fold: false },
  { prop: 'fpl', label: '品种', fold: false },
  { prop: 'fpl', label: '规格', fold: false },
  { prop: 'fpl', label: '品牌', fold: false },
  { prop: 'fpl', label: '数量', fold: false },
  { prop: 'fpl', label: '单位', fold: false },
  { prop: 'fpl', label: '含税价', fold: false },
  { prop: 'fpl', label: '不含税价', fold: false },
  { prop: 'fpl', label: '金额', fold: false },
  { prop: 'fpl', label: '税额', fold: false },
  { prop: 'fpl', label: '价税合计', fold: false },
  { prop: 'fpl', label: '币种', fold: false },
  { prop: 'fpl', label: '贸易类型', fold: false },
  { prop: 'fpl', label: '订单模式', fold: false },
  { prop: 'fpl', label: '交货方式', fold: false },
  { prop: 'fpl', label: '备注', fold: false }
]

export const Caigoufukuan = [
  { prop: 'fpl', label: '申请日期', fold: false },
  { prop: 'fpl', label: '付款状态', fold: false },
  { prop: 'fpl', label: '账套', fold: false },
  { prop: 'fpl', label: '业务部门', fold: false },
  { prop: 'fpl', label: '贸易商', fold: false },
  { prop: 'fpl', label: '款项', fold: false },
  { prop: 'fpl', label: '款项类别', fold: false },
  { prop: 'fpl', label: '对方银行名称', fold: false },
  { prop: 'fpl', label: '对方银行账号', fold: false },
  { prop: 'fpl', label: '申请金额', fold: false },
  { prop: 'fpl', label: '币种', fold: false },
  { prop: 'fpl', label: '付款申请单号', fold: false },
  { prop: 'fpl', label: '备注', fold: false }
]

export const Xiaoshoujilu = [
  { prop: 'fpl', label: '交易日期', fold: false },
  { prop: 'fpl', label: '收款状态', fold: false },
  { prop: 'fpl', label: '账套', fold: false },
  { prop: 'fpl', label: '业务部门', fold: false },
  { prop: 'fpl', label: '贸易商', fold: false },
  { prop: 'fpl', label: '贸易商部门', fold: false },
  { prop: 'fpl', label: '品种', fold: false },
  { prop: 'fpl', label: '规格', fold: false },
  { prop: 'fpl', label: '品牌', fold: false },
  { prop: 'fpl', label: '数量', fold: false },
  { prop: 'fpl', label: '数量单位', fold: false },
  { prop: 'fpl', label: '价格', fold: false },
  { prop: 'fpl', label: '成交金额', fold: false },
  { prop: 'fpl', label: '实收金额', fold: false },
  { prop: 'fpl', label: '币种', fold: false },
  { prop: 'fpl', label: '贸易类型', fold: false },
  { prop: 'fpl', label: '贸易类型', fold: false },
  { prop: 'fpl', label: '贸易类型', fold: false },
  { prop: 'fpl', label: '订单号', fold: false },
  { prop: 'fpl', label: '合同号', fold: false }
]

export const Xiaoshoudingdan = [
  { prop: 'fpl', label: '交易日期', fold: false },
  { prop: 'fpl', label: '收款状态', fold: false },
  { prop: 'fpl', label: '账套', fold: false },
  { prop: 'fpl', label: '业务部门', fold: false },
  { prop: 'fpl', label: '贸易商', fold: false },
  { prop: 'fpl', label: '贸易商部门', fold: false },
  { prop: 'fpl', label: '品种', fold: false },
  { prop: 'fpl', label: '规格', fold: false },
  { prop: 'fpl', label: '品牌', fold: false },
  { prop: 'fpl', label: '数量', fold: false },
  { prop: 'fpl', label: '数量单位', fold: false },
  { prop: 'fpl', label: '价格', fold: false },
  { prop: 'fpl', label: '成交金额', fold: false },
  { prop: 'fpl', label: '实收金额', fold: false },
  { prop: 'fpl', label: '币种', fold: false },
  { prop: 'fpl', label: '贸易类型', fold: false },
  { prop: 'fpl', label: '订单模式', fold: false },
  { prop: 'fpl', label: '交货方式', fold: false },
  { prop: 'fpl', label: '订单号', fold: false },
  { prop: 'fpl', label: '合同号', fold: false }
]

export const Gouxiaoyukuan = [
  { prop: 'fpl', label: '交易日期', fold: false },
  { prop: 'fpl', label: '对账状态', fold: false },
  { prop: 'fpl', label: '账套', fold: false },
  { prop: 'fpl', label: '业务部门', fold: false },
  { prop: 'fpl', label: '贸易商', fold: false },
  { prop: 'fpl', label: '贸易商部门', fold: false },
  { prop: 'fpl', label: '品种', fold: false },
  { prop: 'fpl', label: '规格', fold: false },
  { prop: 'fpl', label: '品牌', fold: false },
  { prop: 'fpl', label: '订单数', fold: false },
  { prop: 'fpl', label: '实数', fold: false },
  { prop: 'fpl', label: '单位', fold: false },
  { prop: 'fpl', label: '原价格', fold: false },
  { prop: 'fpl', label: '最终价', fold: false },
  { prop: 'fpl', label: '成交金额', fold: false },
  { prop: 'fpl', label: '应结余额', fold: false },
  { prop: 'fpl', label: '实结余额', fold: false },
  { prop: 'fpl', label: '币种', fold: false },
  { prop: 'fpl', label: '订单号', fold: false }
]

export const Yukuanduizhang = [
  { prop: 'fpl', label: '对账日期', fold: false },
  { prop: 'fpl', label: '结算状态', fold: false },
  { prop: 'fpl', label: '收/付方向', fold: false },
  { prop: 'fpl', label: '账套', fold: false },
  { prop: 'fpl', label: '业务部门', fold: false },
  { prop: 'fpl', label: '贸易商', fold: false },
  { prop: 'fpl', label: '应结总额', fold: false },
  { prop: 'fpl', label: '实结金额', fold: false },
  { prop: 'fpl', label: '币种', fold: false },
  { prop: 'fpl', label: '对账单号', fold: false }
]

export const Yukuanfukuan = [
  { prop: 'fpl', label: '申请日期', fold: false },
  { prop: 'fpl', label: '付款状态', fold: false },
  { prop: 'fpl', label: '账套', fold: false },
  { prop: 'fpl', label: '业务部门', fold: false },
  { prop: 'fpl', label: '贸易商', fold: false },
  { prop: 'fpl', label: '贸易商银行名称', fold: false },
  { prop: 'fpl', label: '贸易商银行账号', fold: false },
  { prop: 'fpl', label: '款项', fold: false },
  { prop: 'fpl', label: '款项类别', fold: false },
  { prop: 'fpl', label: '申请金额', fold: false },
  { prop: 'fpl', label: '币种', fold: false },
  { prop: 'fpl', label: '付款申请单号', fold: false },
  { prop: 'fpl', label: '备注', fold: false }
]

export const Shoukuanjilu = [
  { prop: 'fpl', label: '收款日期', fold: false },
  { prop: 'fpl', label: '匹配日期', fold: false },
  { prop: 'fpl', label: '匹配状态', fold: false },
  { prop: 'fpl', label: '账套', fold: false },
  { prop: 'fpl', label: '业务部门', fold: false },
  { prop: 'fpl', label: '本公司开户行', fold: false },
  { prop: 'fpl', label: '本公司银行账号', fold: false },
  { prop: 'fpl', label: '贸易商', fold: false },
  { prop: 'fpl', label: '贸易商开户银行', fold: false },
  { prop: 'fpl', label: '贸易商银行账号', fold: false },
  { prop: 'fpl', label: '收款金额', fold: false },
  { prop: 'fpl', label: '匹配金额', fold: false },
  { prop: 'fpl', label: '币种', fold: false },
  { prop: 'fpl', label: '银行回单号', fold: false },
  { prop: 'fpl', label: '收款确认单号', fold: false }
]

export const Maoyijilu = [
  { prop: 'fpl', label: '确认日期', fold: false },
  { prop: 'fpl', label: '交易日期', fold: false },
  { prop: 'fpl', label: '发票状态', fold: false },
  { prop: 'fpl', label: '账套', fold: false },
  { prop: 'fpl', label: '业务部门', fold: false },
  { prop: 'fpl', label: '贸易商', fold: false },
  { prop: 'fpl', label: '贸易商部门', fold: false },
  { prop: 'fpl', label: '品种', fold: false },
  { prop: 'fpl', label: '规格', fold: false },
  { prop: 'fpl', label: '品牌', fold: false },
  { prop: 'fpl', label: '数量', fold: false },
  { prop: 'fpl', label: '单位', fold: false },
  { prop: 'fpl', label: '含税价', fold: false },
  { prop: 'fpl', label: '不含税价', fold: false },
  { prop: 'fpl', label: '币种', fold: false },
  { prop: 'fpl', label: '税额', fold: false },
  { prop: 'fpl', label: '价税合计', fold: false },
  { prop: 'fpl', label: '贸易类型', fold: false },
  { prop: 'fpl', label: '订单模式', fold: false },
  { prop: 'fpl', label: '交货方式', fold: false },
  { prop: 'fpl', label: '备注', fold: false }
]
