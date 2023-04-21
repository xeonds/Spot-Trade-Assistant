export const ZhangTao = [
  {
    label: '公司类型',
    prop: 'type',
    type: 'number'
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
    type: 'number'
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
        value: true
      },
      {
        label: '否',
        value: false
      }
    ]
  }
]

export const Partment = [
  {
    label: '关联公司id',
    prop: 'company',
    type: 'integer'
  },
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
    type: 'integer'
  },
  {
    label: '通知号码',
    prop: 'notno',
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
    label: '头像',
    prop: 'avatar',
    type: 'string'
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
  }
]
