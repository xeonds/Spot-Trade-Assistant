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
  invmax: [{ required: true, message: '请填写最大票额', trigger: 'blur' }],
  ladmet: [{ required: true, message: '请填写开提单方式', trigger: 'blur' }]
}

export const ZhangTao2rules = [
  {
    type: [{ required: true, message: '请填写公司类型', trigger: 'blur' }]
  },
  {
    code: [{ required: true, message: '请填写公司代码', trigger: 'blur' }]
  },
  {
    shortname: [{ required: true, message: '请填写公司简称', trigger: 'blur' }]
  },
  {
    fullname: [{ required: true, message: '请填写公司全称', trigger: 'blur' }]
  },
  {
    taxid: [{ required: true, message: '请填写公司税号', trigger: 'blur' }]
  },
  {
    taxaddr: [
      { required: true, message: '请填写公司税票登记地址', trigger: 'blur' }
    ]
  },
  {
    taxphone: [
      { required: true, message: '请填写税票登记电话', trigger: 'blur' },
      { validator: validatePhone, trigger: 'blur' }
    ]
  },
  {
    invmax: [
      { required: true, message: '请填写最大票额', trigger: 'blur' },
      { type: 'number', message: '请填写数字' }
    ]
  },
  {
    ladmet: [{ required: true, message: '请填写开提单方式', trigger: 'blur' }]
  }
]
export const Bankrules = [
  {
    name: [{ required: true, message: '请填写开户银行名称', trigger: 'blur' }]
  },
  {
    accounts: [
      { required: true, message: '请填写开户银行账号', trigger: 'blur' }
    ]
  },
  {
    swcode: [{ required: true, message: '请填写开户行行号', trigger: 'blur' }]
  },
  {
    taxsign: [
      { required: true, message: '请填写税票账号标志', trigger: 'blur' }
    ]
  }
]

export const Partmentrules = [
  {
    code: [{ required: true, message: '请填写通知方式', trigger: 'blur' }]
  },
  {
    name: [{ required: true, message: '请填写通知方式', trigger: 'blur' }]
  },
  {
    contact: [{ required: true, message: '请填写通知方式', trigger: 'blur' }]
  },
  {
    tphone: [{ required: true, message: '请填写通知方式', trigger: 'blur' }]
  },
  {
    mphone: [{ required: true, message: '请填写通知方式', trigger: 'blur' }]
  },
  {
    fax: [{ required: true, message: '请填写通知方式', trigger: 'blur' }]
  },
  {
    email: [{ required: true, message: '请填写通知方式', trigger: 'blur' }]
  },
  {
    address: [{ required: true, message: '请填写通知方式', trigger: 'blur' }]
  },
  {
    postcode: [{ required: true, message: '请填写通知方式', trigger: 'blur' }]
  },
  {
    notmet: [{ required: true, message: '请填写通知方式', trigger: 'blur' }]
  },
  {
    notno: [{ required: true, message: '请填写通知方式', trigger: 'blur' }]
  }
]

//表3
export const Varietyrules = [
  {
    prop: 'name',
    type: 'string'
  },
  {
    prop: 'code',
    type: 'string'
  },
  {
    prop: 'nof',
    type: 'number'
  },
  {
    prop: 'unit',
    type: 'string'
  },
  {
    prop: 'relset',
    type: 'number'
  },
  {
    prop: 'vat',
    type: 'number'
  },
  {
    prop: 'tariff',
    type: 'number'
  }
]

export const Graderules = [
  {
    prop: 'variety',
    type: 'singleselect'
  },
  {
    prop: 'name',
    type: 'string'
  },
  {
    prop: 'code',
    type: 'string'
  },

  {
    prop: 'content',
    type: 'string'
  },
  {
    prop: 'size',
    type: 'string'
  },
  {
    prop: 'meter',
    type: 'string'
  },
  {
    prop: 'weight',
    type: 'string'
  }
]

export const Trademarkrules = [
  {
    prop: 'variety',
    type: 'singleselect'
  },
  {
    prop: 'name',
    type: 'string'
  },
  {
    prop: 'code',
    type: 'string'
  },
  {
    prop: 'country',
    type: 'string'
  },
  {
    prop: 'place',
    type: 'string'
  },
  {
    prop: 'vendor',
    type: 'string'
  }
]
//表4
export const Currencyrules = [
  {
    prop: 'name',
    type: 'string'
  },
  {
    prop: 'isLocal',
    type: 'select',
    options: [
      {
        value: true
      },
      {
        value: false
      }
    ]
  }
]
export const Ordersrules = [
  {
    prop: 'mode',
    type: 'string'
  },
  {
    prop: 'psign',
    type: 'select',
    options: [
      {
        value: true
      },
      {
        value: false
      }
    ]
  }
]
export const Typerules = [
  {
    prop: 'type',
    type: 'string'
  }
]

//表5
export const Starules = [
  {
    prop: 'ourcompany',
    type: 'number'
  },
  {
    prop: 'storage',
    type: 'number'
  },
  {
    prop: 'agreeno',
    type: 'string'
  },
  {
    prop: 'expdate',
    type: 'string'
  },
  {
    prop: 'expsign',
    type: 'select',
    options: [
      {
        value: 1
      },
      {
        value: 2
      }
    ]
  },
  {
    prop: 'condate',
    type: 'string'
  },
  {
    prop: 'scan',
    type: 'string'
  }
]
export const Svarrules = [
  {
    prop: 'sta',
    type: 'number'
  },
  {
    prop: 'grad',
    type: 'number'
  },
  {
    prop: 'country',
    type: 'string'
  }
]
export const Itemrules = [
  {
    prop: 'name',
    type: 'number'
  },
  {
    prop: 'cost',
    type: 'number'
  },
  {
    prop: 'iunit',
    type: 'string'
  }
]
export const Stofrules = [
  {
    prop: 'sday',
    type: 'string'
  },
  {
    prop: 'eday',
    type: 'string'
  },
  {
    prop: 'fee',
    type: 'number'
  },
  {
    prop: 'sunit',
    type: 'string'
  }
]

export const UserInforules = [
  {
    prop: 'userName',
    type: 'string'
  },
  {
    prop: 'password',
    type: 'string'
  },
  {
    prop: 'email',
    type: 'string'
  },
  {
    prop: 'phonenumber',
    type: 'string'
  },
  {
    prop: 'wechat',
    type: 'string'
  },
  {
    prop: 'roles',
    type: 'multiselect'
  }
]

export const RoleInforules = [
  {
    prop: 'name',
    type: 'string'
  },
  {
    prop: 'remark',
    type: 'string'
  },
  {
    prop: 'groupId',
    type: 'string'
  },
  {
    prop: 'menus',
    type: 'multiselect'
  }
]

export const MenusInforules = [
  {
    prop: 'menuName',
    type: 'string'
  },
  {
    prop: 'remark',
    type: 'string'
  }
]
