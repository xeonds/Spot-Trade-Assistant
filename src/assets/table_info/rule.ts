import * as table_add from './table-add'

const validatePhone = (rule: any, value: any, callback: any) => {
  if (value === '') {
    callback(new Error('请输入手机号'))
  } else {
    if (/^1[3-9]\d{9}$/.test(value)) {
      callback()
    } else {
      callback(new Error('请输入正确手机号'))
    }
  }
}

const validateNumber = (rule: any, value: any, callback: any) => {
  if (value === '') {
    callback(new Error('请输入内容'))
  } else {
    if (Number(value) == 0 || Number(value)) {
      callback()
    } else {
      callback(new Error('请输入数字'))
    }
  }
}

const validateNun = (add_list: any) => {
  const temp: any = {}
  for (let i = 0; i < add_list.length; i++) {
    temp[add_list[i].prop] = [
      { required: true, message: '请填写' + add_list[i].label, trigger: 'blur' }
    ]
  }
  return temp
}

export const Zhangtao1rules = {
  code: [
    { required: true, message: '请填写账套代码', trigger: 'blur' },
    { min: 2, max: 2, message: '长度应该为2', trigger: 'blur' }
  ],
  shortname: [
    { required: true, message: '请填写公司简称', trigger: 'blur' },
    { min: 8, max: 8, message: '长度应该为8', trigger: 'blur' }
  ],
  fullname: [{ required: true, message: '请填写公司全称', trigger: 'blur' }],
  taxid: [{ required: true, message: '请填写纳税人识别号', trigger: 'blur' }],
  taxaddr: [{ required: true, message: '请填写税票登记地址', trigger: 'blur' }],
  taxphone: [
    { required: true, message: '请填写税票登记电话', trigger: 'blur' },
    { validator: validatePhone, trigger: 'blur' }
  ],
  ladmet: [{ required: true, message: '请填写开提单方式', trigger: 'blur' }]
}

export const ZhangTao2rules = {
  type: [{ required: true, message: '请填写公司类型', trigger: 'blur' }],
  code: [{ required: true, message: '请填写公司代码', trigger: 'blur' }],
  shortname: [{ required: true, message: '请填写公司简称', trigger: 'blur' }],
  fullname: [{ required: true, message: '请填写公司全称', trigger: 'blur' }],
  taxid: [{ required: true, message: '请填写公司税号', trigger: 'blur' }],
  taxaddr: [
    { required: true, message: '请填写公司税票登记地址', trigger: 'blur' }
  ],
  taxphone: [
    { required: true, message: '请填写税票登记电话', trigger: 'blur' },
    { validator: validatePhone, trigger: 'blur' }
  ],
  invmax: [{ validator: validateNumber, trigger: 'blur' }],
  ladmet: [{ required: true, message: '请填写开提单方式', trigger: 'blur' }]
}
export const Bankrules = {
  name: [{ required: true, message: '请填写开户银行名称', trigger: 'blur' }],
  accounts: [
    { required: true, message: '请填写开户银行账号', trigger: 'blur' }
  ],
  swcode: [{ required: true, message: '请填写开户行行号', trigger: 'blur' }],
  taxsign: [{ required: true, message: '请填写税票账号标志', trigger: 'blur' }]
}

export const Partmentrules = {
  code: [{ required: true, message: '请填部门代码', trigger: 'blur' }],
  name: [{ required: true, message: '请填写部门名称', trigger: 'blur' }],
  contact: [{ required: true, message: '请填写联系人', trigger: 'blur' }],
  tphone: [{ required: true, message: '请填写电话', trigger: 'blur' }],
  mphone: [{ required: true, message: '请填写手机', trigger: 'blur' }],
  notmet: [{ required: true, message: '请填写通知方式', trigger: 'blur' }],
  notno: [{ required: true, message: '请填写通知号码', trigger: 'blur' }]
}

//表3
export const Varietyrules = {
  name: [{ required: true, message: '请填写品种', trigger: 'blur' }],
  code: [{ required: true, message: '请填代码', trigger: 'blur' }],
  nof: [
    { required: true, message: '请填写期货每手数量', trigger: 'blur' },
    { validator: validateNumber, trigger: 'blur' }
  ],
  unit: [{ required: true, message: '请填写重量单位', trigger: 'blur' }],
  relset: [
    { required: true, message: '请填写实数结算标志', trigger: 'blur' },
    { validator: validateNumber, trigger: 'blur' }
  ],

  vat: [
    { required: true, message: '请填写增值税率', trigger: 'blur' },
    { validator: validateNumber, trigger: 'blur' }
  ],
  tariff: [
    { required: true, message: '请填写进口关税', trigger: 'blur' },
    { validator: validateNumber, trigger: 'blur' }
  ]
}

export const Graderules = {
  variety: [{ required: true, message: '请填写品种', trigger: 'blur' }],
  name: [{ required: true, message: '请填写规格', trigger: 'blur' }]
}

export const Trademarkrules = {
  variety: [{ required: true, message: '请填写品种', trigger: 'blur' }],
  name: [{ required: true, message: '请填写商标', trigger: 'blur' }]
}

//表4
export const Currencyrules = {
  name: [{ required: true, message: '请填写币种名称', trigger: 'blur' }],
  isLocal: [{ required: true, message: '请填写币种属性', trigger: 'blur' }]
}

export const Ordersrules = {
  mode: [{ required: true, message: '请填写订单模式', trigger: 'blur' }],
  psign: [{ required: true, message: '请填写价格修改模式', trigger: 'blur' }]
}

export const Typerules = {
  type: [{ required: true, message: '请填写海关款项类别', trigger: 'blur' }]
}

//表5
export const Starules = {
  ourcompany: [
    { required: true, message: '请填写公司账套', trigger: 'blur' },
    { validator: validateNumber, trigger: 'blur' }
  ],
  storage: [
    { required: true, message: '请填写仓库简称', trigger: 'blur' },
    { validator: validateNumber, trigger: 'blur' }
  ],
  agreeno: [{ required: true, message: '请填写仓储协议号', trigger: 'blur' }],
  expdate: [{ required: true, message: '请填写协议有效期', trigger: 'blur' }],
  expsign: [{ required: true, message: '请填写有效状态', trigger: 'blur' }],
  condate: [{ required: true, message: '请填写签约日期', trigger: 'blur' }]
}
export const Svarrules = {
  sta: [
    { required: true, message: '请填写品种', trigger: 'blur' },
    { validator: validateNumber, trigger: 'blur' }
  ],
  grad: [
    { required: true, message: '请填写规格', trigger: 'blur' },
    { validator: validateNumber, trigger: 'blur' }
  ],
  country: [{ required: true, message: '请填写收费币种', trigger: 'blur' }]
}

export const Itemrules = {
  name: [
    { required: true, message: '请填写项目名称', trigger: 'blur' },
    { validator: validateNumber, trigger: 'blur' }
  ],
  cost: [
    { required: true, message: '请填写费率', trigger: 'blur' },
    { validator: validateNumber, trigger: 'blur' }
  ],
  iunit: [{ required: true, message: '请填写费用单位', trigger: 'blur' }]
}

export const Stofrules = {
  sday: [{ required: true, message: '请填写仓储起始日', trigger: 'blur' }],
  eday: [{ required: true, message: '请填写仓储中止日', trigger: 'blur' }],
  fee: [
    { required: true, message: '请填写费率', trigger: 'blur' },
    { validator: validateNumber, trigger: 'blur' }
  ],
  sunit: [{ required: true, message: '请填写费用单位', trigger: 'blur' }]
}

export const UserInforules = {
  userName: [{ required: true, message: '用户名', trigger: 'blur' }],
  password: [{ required: true, message: '请填写密码', trigger: 'blur' }],
  email: [{ required: true, message: '请填写邮箱', trigger: 'blur' }],
  phonenumber: [{ required: true, message: '请填写手机号', trigger: 'blur' }],
  wechat: [{ required: true, message: '请填写微信号', trigger: 'blur' }],
  roles: [{ required: true, message: '请填写角色', trigger: 'blur' }]
}

export const RoleInforules = {
  name: [{ required: true, message: '请填写名称', trigger: 'blur' }],
  remark: [{ required: true, message: '请填备注', trigger: 'blur' }],
  groupId: [{ required: true, message: '请填写组别id', trigger: 'blur' }],
  menus: [{ required: true, message: '请填写权限', trigger: 'blur' }]
}

export const MenusInforules = {
  menuName: [{ required: true, message: '请填写名称', trigger: 'blur' }],
  remark: [{ required: true, message: '请填写备注', trigger: 'blur' }]
}

export const Gouxiaojilurules = validateNun(table_add.Gouxiaojilu)

export const Xiaoshouquerenrules = validateNun(table_add.Xiaoshouqueren)

export const Shengchenghetongrules = validateNun(table_add.Shengchenghetong)

export const Yinhuashuirules = validateNun(table_add.Yinhuashui)

export const Caigoufukuan = validateNun(table_add.Caigoufukuan)
