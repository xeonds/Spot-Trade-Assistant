export const ZhangTao1 = [
  {
    label: '账套代码',
    prop: 'code',
    type: 'string'
  },
  {
    label: '公司简称',
    prop: 'shortname',
    type: 'string'
  },
  {
    label: '公司全称',
    prop: 'fullname',
    type: 'string'
  },
  {
    label: '纳税人识别号',
    prop: 'taxid',
    type: 'string'
  },
  {
    label: '税票登记地址',
    prop: 'taxaddr',
    type: 'string'
  },
  {
    label: '税票登记电话',
    prop: 'taxphone',
    type: 'string'
  },
  {
    label: '最大票额',
    prop: 'invmax',
    type: 'number'
  },
  {
    label: '开提单方式',
    prop: 'ladmet',
    type: 'select',
    options: [
      {
        label: '系统',
        value: '系统'
      },
      {
        label: '人工',
        value: '人工'
      }
    ]
  }
]
export const ZhangTao2 = [
  {
    label: '公司类型',
    prop: 'type',
    type: 'select',
    options: [
      {
        label: '贸易商',
        value: 2
      },
      {
        label: '仓库',
        value: 3
      },
      {
        label: '期货公司',
        value: 4
      },
      {
        label: '海关',
        value: 5
      },
      {
        label: '税务机关',
        value: 6
      }
    ]
  },
  {
    label: '账套代码',
    prop: 'code',
    type: 'string'
  },
  {
    label: '公司简称',
    prop: 'shortname',
    type: 'string'
  },
  {
    label: '公司全称',
    prop: 'fullname',
    type: 'string'
  },
  {
    label: '纳税人识别号',
    prop: 'taxid',
    type: 'string'
  },
  {
    label: '税票登记地址',
    prop: 'taxaddr',
    type: 'string'
  },
  {
    label: '税票登记电话',
    prop: 'taxphone',
    type: 'string'
  },
  {
    label: '最大票额',
    prop: 'invmax',
    type: 'number'
  },
  {
    label: '开提单方式',
    prop: 'ladmet',
    type: 'select',
    options: [
      {
        label: '系统',
        value: '系统'
      },
      {
        label: '人工',
        value: '人工'
      }
    ]
  }
]
export const Bank = [
  {
    label: '开户银行名称',
    prop: 'name',
    type: 'string'
  },
  {
    label: '开户银行账号',
    prop: 'accounts',
    type: 'string'
  },
  {
    label: '开户行行号',
    prop: 'swcode',
    type: 'string'
  },
  {
    label: '税票账号标志(是/否)',
    prop: 'taxsign',
    type: 'select',
    options: [
      {
        label: '是',
        value: '是'
      },
      {
        label: '否',
        value: '否'
      }
    ]
  }
]

export const Partment = [
  {
    label: '部门代码',
    prop: 'code',
    type: 'string'
  },
  {
    label: '部门名称',
    prop: 'name',
    type: 'string'
  },
  {
    label: '联系人',
    prop: 'contact',
    type: 'string'
  },
  {
    label: '电话',
    prop: 'tphone',
    type: 'string'
  },
  {
    label: '手机',
    prop: 'mphone',
    type: 'string'
  },
  {
    label: '传真',
    prop: 'fax',
    type: 'string'
  },
  {
    label: '邮箱',
    prop: 'email',
    type: 'string'
  },
  {
    label: '邮寄地址',
    prop: 'address',
    type: 'string'
  },
  {
    label: '邮政编码',
    prop: 'postcode',
    type: 'string'
  },
  {
    label: '通知方式',
    prop: 'notmet',
    type: 'select',
    options: [
      {
        label: '邮件',
        value: '邮件'
      },
      {
        label: '微信',
        value: '微信'
      },
      {
        label: '短信',
        value: '短信'
      }
    ]
  },
  {
    label: '通知号码',
    prop: 'notno',
    type: 'string'
  }
]

//表3
export const Variety = [
  {
    label: '品种',
    prop: 'name',
    type: 'string'
  },
  {
    label: '代码',
    prop: 'code',
    type: 'string'
  },
  {
    label: '期货每手数量',
    prop: 'nof',
    type: 'number'
  },
  {
    label: '重量单位',
    prop: 'unit',
    type: 'string'
  },
  {
    label: '实数结算标志',
    prop: 'relset',
    type: 'number'
  },
  {
    label: '增值税率',
    prop: 'vat',
    type: 'number'
  },
  {
    label: '进口关税',
    prop: 'tariff',
    type: 'number'
  }
]

export const Grade = [
  {
    label: '品种',
    prop: 'variety',
    type: 'singleselect'
  },
  {
    label: '规格',
    prop: 'name',
    type: 'string'
  },
  {
    label: '代码',
    prop: 'code',
    type: 'string'
  },

  {
    label: '含量',
    prop: 'content',
    type: 'string'
  },
  {
    label: '外形尺寸',
    prop: 'size',
    type: 'string'
  },
  {
    label: '计量标准（块/件）',
    prop: 'meter',
    type: 'string'
  },
  {
    label: '每（块/件）重量',
    prop: 'weight',
    type: 'string'
  }
]

export const Trademark = [
  {
    label: '品种',
    prop: 'variety',
    type: 'singleselect'
  },
  {
    label: '商标/品牌',
    prop: 'name',
    type: 'string'
  },
  {
    label: '代码',
    prop: 'code',
    type: 'string'
  },
  {
    label: '生产国',
    prop: 'country',
    type: 'string'
  },
  {
    label: '产地',
    prop: 'place',
    type: 'string'
  },
  {
    label: '生产厂商',
    prop: 'vendor',
    type: 'string'
  }
]
//表4
export const Currency = [
  {
    label: '币种名称',
    prop: 'name',
    type: 'string'
  },
  {
    label: '币种属性',
    prop: 'isLocal',
    type: 'select',
    options: [
      {
        label: '是',
        value: true
      },
      {
        label: '否',
        value: false
      }
    ]
  }
]
export const Orders = [
  {
    label: '订单模式',
    prop: 'mode',
    type: 'string'
  },
  {
    label: '价格修改模式',
    prop: 'psign',
    type: 'select',
    options: [
      {
        label: '是',
        value: true
      },
      {
        label: '否',
        value: false
      }
    ]
  }
]
export const Type = [
  {
    label: '类别',
    prop: 'type',
    type: 'string'
  }
]

//表5
export const Sta = [
  {
    label: '账套简称',
    prop: 'ourcompany',
    type: 'number'
  },
  {
    label: '仓库简称',
    prop: 'storage',
    type: 'number'
  },
  {
    label: '仓储协议号',
    prop: 'agreeno',
    type: 'string'
  },
  {
    label: '协议有效期',
    prop: 'expdate',
    type: 'string'
  },
  {
    label: '有效状态',
    prop: 'expsign',
    type: 'select',
    options: [
      {
        label: '有效',
        value: 1
      },
      {
        label: '失效',
        value: 2
      }
    ]
  },
  {
    label: '签约日期',
    prop: 'condate',
    type: 'string'
  },
  {
    label: '协议扫描件',
    prop: 'scan',
    type: 'string'
  }
]
export const Svar = [
  {
    label: '品种',
    prop: 'sta',
    type: 'number'
  },
  {
    label: '规格',
    prop: 'grad',
    type: 'number'
  },
  {
    label: '收费币种',
    prop: 'country',
    type: 'string'
  }
]
export const Item = [
  {
    label: '项目名称',
    prop: 'name',
    type: 'number'
  },
  {
    label: '费率',
    prop: 'cost',
    type: 'number'
  },
  {
    label: '费用单位',
    prop: 'iunit',
    type: 'string'
  }
]
export const Stof = [
  {
    label: '仓储起始日',
    prop: 'sday',
    type: 'string'
  },
  {
    label: '仓储终止日',
    prop: 'eday',
    type: 'string'
  },
  {
    label: '费率',
    prop: 'fee',
    type: 'number'
  },
  {
    label: '费用单位',
    prop: 'sunit',
    type: 'string'
  }
]

export const UserInfo = [
  {
    label: '用户名',
    prop: 'userName',
    type: 'string'
  },
  {
    label: '密码',
    prop: 'password',
    type: 'string'
  },
  {
    label: '邮箱',
    prop: 'email',
    type: 'string'
  },
  {
    label: '手机号',
    prop: 'phonenumber',
    type: 'string'
  },
  {
    label: '微信号',
    prop: 'wechat',
    type: 'string'
  },
  {
    label: '角色',
    prop: 'roles',
    type: 'multiselect'
  }
]

export const RoleInfo = [
  {
    label: '名称',
    prop: 'name',
    type: 'string'
  },
  {
    label: '备注',
    prop: 'remark',
    type: 'string'
  },
  {
    label: '组别id',
    prop: 'groupId',
    type: 'string'
  },
  {
    label: '权限',
    prop: 'menus',
    type: 'multiselect'
  }
]

export const MenusInfo = [
  {
    label: '名称',
    prop: 'menuName',
    type: 'string'
  },
  {
    label: '备注',
    prop: 'remark',
    type: 'string'
  }
]

export const Gouxiaojilu = [
  {
    prop: 'fpl1',
    label: '交易日期',
    type: 'date'
  },
  {
    prop: 'fpl2',
    label: '合同生成状态',
    type: 'string'
  },
  {
    prop: 'fpl3',
    label: '账套',
    type: 'string'
  },
  {
    prop: 'fpl4',
    label: '业务部门',
    type: 'string'
  },
  {
    prop: 'fpl5',
    label: '贸易商',
    type: 'string'
  },
  {
    prop: 'fpl6',
    label: '购/销',
    type: 'select',
    options: [
      {
        label: '购',
        value: '购'
      },
      {
        label: '销',
        value: '销'
      }
    ]
  },
  {
    prop: 'fpl7',
    label: '品种',
    type: 'string'
  },
  {
    prop: 'fpl8',
    label: '规格',
    type: 'string'
  },
  {
    prop: 'fpl9',
    label: '品牌',
    type: 'string'
  },
  {
    prop: 'fpl10',
    label: '订单数量',
    type: 'string'
  },
  {
    prop: 'fpl11',
    label: '数量单位',
    type: 'string'
  },
  {
    prop: 'fpl12',
    label: '订单价格',
    type: 'string'
  },
  {
    prop: 'fpl13',
    label: '订单币种',
    type: 'string'
  },
  {
    prop: 'fpl14',
    label: '成交金额',
    type: 'string'
  },
  {
    prop: 'fpl15',
    label: '贸易类型',
    type: 'string'
  },
  {
    prop: 'fpl16',
    label: '订单模式',
    type: 'string'
  },
  {
    prop: 'fpl17',
    label: '交货方式',
    type: 'string'
  },
  {
    prop: 'fpl18',
    label: '订单号',
    type: 'string'
  }
]

export const ModelInfo = [
  {
    label: '名称',
    prop: 'name',
    type: 'string'
  },
  {
    label: '地址',
    prop: 'place',
    type: 'string'
  },
  {
    label: '时间日期',
    prop: 'date',
    type: 'string'
  },
  {
    label: '甲方姓名',
    prop: 'firstParty.name',
    type: 'string'
  },
  {
    label: '甲方电话',
    prop: 'firstParty.phone',
    type: 'string'
  },
  {
    label: '甲方传真',
    prop: 'firstParty.fax',
    type: 'string'
  },
  {
    label: '协议',
    prop: 'clauses',
    type: 'string'
  }
]

export const FutureInfo = []
export const FutureInfo2 = []
