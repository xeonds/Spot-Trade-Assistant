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
    { required: true, message: '请填写手机号', trigger: 'blur' },
    { validator: validatePhone, trigger: 'blur' }
  ],
  invmax: [{ required: true, message: '请填写最大票额', trigger: 'blur' }],
  ladmet: [{ required: true, message: '请填写开提单方式', trigger: 'blur' }]
}
