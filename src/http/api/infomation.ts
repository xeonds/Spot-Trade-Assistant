import ServiceAxios from '..'

//部门
export const Partmentexcel = () => {
  return ServiceAxios({
    url: '/company/export',
    method: 'GET'
  })
}

export interface PageForm {
  company: string
  code: string
  name: string
  contact: string
  tphone: string
  mphone: string
  fax: string
  email: string
  address: string
  postcode: string
  notmet: string
  notno: string
  pageNumber: string
  pageSize: string
  sort: string
  order: string
}

export const getPartment = (form: PageForm) => {
  return ServiceAxios({
    url: '/companydept/page',
    method: 'GET',
    params: form
  })
}

export const deletaPartment = (id: number) => {
  return ServiceAxios({
    url: `/companydept/${id}`,
    method: 'DELETE'
  })
}

export interface PartmentForm {
  company: number
  code: string
  name: string
  contact: string
  tphone: string
  mphone: string
  fax: string
  email: string
  address: string
  postcode: string
  notmet: number
  notno: string
}

export const addPartment = (form: any) => {
  form.company = 0
  return ServiceAxios({
    url: `/companydept`,
    method: 'POST',
    data: form
  })
}

export const refreshPartment = (id: number, form: PartmentForm) => {
  return ServiceAxios({
    url: `/companydept/${id}`,
    data: form,
    method: 'PUT'
  })
}

//账套
export interface ZhangTaoGet {
  type: number
  code: string
  ladmet: number
  fullname: string
  shortname: string
  taxid: string
  taxphone: string
  invmax: number
  pageNumber: string
  pageSize: string
  sort: string
  order: string
}
export const getZhangTao = (form: ZhangTaoGet) => {
  return ServiceAxios({
    url: '/company/page',
    method: 'GET',
    params: form
  })
}

export const deletaZhangTao = (id: number) => {
  return ServiceAxios({
    url: `/company/${id}`,
    method: 'DELETE'
  })
}

export const addZhangTao = (form: any) => {
  if (form.ladmet == '系统') {
    form.ladmet = 0
  } else {
    form.ladmet = 1
  }
  form.invmax = parseInt(form.invmax)
  form.type = parseInt(form.type)
  return ServiceAxios({
    url: `/company`,
    method: 'POST',
    data: form
  })
}

export const refreshZhangTao = (id: number, form: any) => {
  if (form.ladmet == '系统') {
    form.ladmet = 0
  } else {
    form.ladmet = 1
  }
  form.invmax = parseInt(form.invmax)
  form.type = parseInt(form.type)
  return ServiceAxios({
    url: `/company/${id}`,
    data: form,
    method: 'PUT'
  })
}

//银行
export interface BankGet {
  company: string
  name: string
  swcode: string
  accounts: string
  taxsign: string
  pageNumber: string
  pageSize: string
  sort: string
  order: string
}

export const getBank = (form: BankGet) => {
  return ServiceAxios({
    url: '/bankinfo/page',
    method: 'GET',
    params: form
  })
}

export const deletaBank = (id: number) => {
  return ServiceAxios({
    url: `/bankinfo/${id}`,
    method: 'DELETE'
  })
}

/**
 * BankInfoDto
 */
export interface BankAdd {
  /**
   * 开户行账号
   */
  accounts?: string
  /**
   * 关联公司表id，公司表/银行信息表：一对多
   */
  company?: number
  /**
   * 开户行名称
   */
  name?: string
  /**
   * 开户行行号（联行号）Swift Code，12位阿拉伯数字组成：3位银行代码+4位城市代码+4位库号+1位校验码
   */
  swcode?: string
  /**
   * 税票账号标志
   */
  taxsign?: boolean
}

export const addBank = (form: any) => {
  if (form.taxsign == '是') {
    form.taxsign = true
  } else {
    form.taxsign = false
  }
  form.company = 0
  return ServiceAxios({
    url: `/bankinfo`,
    method: 'POST',
    data: form
  })
}

export const refreshBank = (id: number, form: BankAdd) => {
  return ServiceAxios({
    url: `/bankinfo/${id}`,
    data: form,
    method: 'PUT'
  })
}

//仓储
export interface StaGet {
  ourcompany: string
  storage: string
  agreeno: string
  condate: string
  expdate: string
  expsign: string
  scan: string
  pageNumber: string
  pageSize: string
  sort: string
  order: string
}

export const getSta = (form: StaGet) => {
  return ServiceAxios({
    url: '/sta/page',
    method: 'GET',
    params: form
  })
}

export const deletaSta = (id: number) => {
  return ServiceAxios({
    url: `/sta/${id}`,
    method: 'DELETE'
  })
}

/**
 * BankInfoDto
 */
export interface StaAdd {
  /**
   * 协议号
   */
  agreeno?: string
  /**
   * 签约日期contract date
   */
  condate?: string
  /**
   * 有效日期expiring date
   */
  expdate?: string
  /**
   * 有效状态 expiring sign 1有效、2失效
   */
  expsign?: number
  /**
   * 关联公司表中type=“本公司”，账套/仓储协议表：一对一
   */
  ourcompany?: number
  /**
   * 协议扫描件(scan)
   */
  scan?: string
  /**
   * 关联公司表中type=“仓库”,仓库/仓储协议表：一对一
   */
  storage?: number
}

export const addSta = (form: StaAdd) => {
  return ServiceAxios({
    url: `/sta`,
    method: 'POST',
    data: form
  })
}

export const refreshSta = (id: number, form: StaAdd) => {
  return ServiceAxios({
    url: `/sta/${id}`,
    data: form,
    method: 'PUT'
  })
}

//仓储品种
export interface SvarGet {
  sta: string
  grad: string
  curency: string
  pageNumber: string
  pageSize: string
  sort: string
  order: string
}

export const getSvar = (form: StaGet) => {
  return ServiceAxios({
    url: '/item/page',
    method: 'GET',
    params: form
  })
}

export const deletaSvar = (id: number) => {
  return ServiceAxios({
    url: `/item/${id}`,
    method: 'DELETE'
  })
}

/**
 * BankInfoDto
 */
/**
 * SvarDto
 */
export interface SvarAdd {
  /**
   * 收费币种
   */
  curency?: string
  /**
   * 关联品级id，规格表/仓库签约品种表：一对一
   */
  grad?: number
  /**
   * 关联仓储协议表id,仓储协议表/仓库签约品种表：一对多
   */
  sta?: number
}

export const addSvar = (form: SvarAdd) => {
  return ServiceAxios({
    url: `/stof`,
    method: 'POST',
    data: form
  })
}

export const refreshSvar = (id: number, form: SvarAdd) => {
  return ServiceAxios({
    url: `/stof/${id}`,
    data: form,
    method: 'PUT'
  })
}

//仓储品种
export interface ItemGet {
  svar: string
  name: string
  cost: string
  iunit: string
  pageNumber: string
  pageSize: string
  sort: string
  order: string
}

export const getItem = (form: ItemGet) => {
  return ServiceAxios({
    url: '/item/page',
    method: 'GET',
    params: form
  })
}

export const deletaItem = (id: number) => {
  return ServiceAxios({
    url: `/item/${id}`,
    method: 'DELETE'
  })
}

/**
 * BankInfoDto
 */
/**
 * SvarDto
 */
export interface ItemAdd {
  /**
   * 费用
   */
  cost?: number
  /**
   * 费用单位（=元/吨）
   */
  iunit?: string
  /**
   * 项目名称。固定：过户费、入库费、出库费、制单费、期转现费、短驳费
   */
  name?: string
  /**
   * 关联仓库签约品种表id，仓库签约品种表/收费项目表：一对多
   */
  svar?: number
}

//仓储费
export interface StofGet {
  svar: string
  sday: string
  eday: string
  fee: string
  sunit: string
  pageNumber: string
  pageSize: string
  sort: string
  order: string
}

export const getStof = (form: StofGet) => {
  return ServiceAxios({
    url: '/moneytype/page',
    method: 'GET',
    params: form
  })
}

export const deletaStof = (id: number) => {
  return ServiceAxios({
    url: `/stof/${id}`,
    method: 'DELETE'
  })
}

/**
 * BankInfoDto
 */
/**
 * SvarDto
 */
export interface StofAdd {
  /**
   * 阶梯终止日end day
   */
  eday?: number
  /**
   * 费用
   */
  fee?: number
  /**
   * 阶梯起始日start day
   */
  sday?: number
  /**
   * 费用单位（=元/天/吨）
   */
  sunit?: string
  /**
   * 关联仓库签约品种表id，仓库签约品种表/仓储费表：一对多
   */
  svar?: number
}

export const addStof = (form: StofAdd) => {
  return ServiceAxios({
    url: `/stof`,
    method: 'POST',
    data: form
  })
}

export const refreshStof = (id: number, form: StofAdd) => {
  return ServiceAxios({
    url: `/stof/${id}`,
    data: form,
    method: 'PUT'
  })
}

export const addItem = (form: ItemAdd) => {
  return ServiceAxios({
    url: `/item`,
    method: 'POST',
    data: form
  })
}

export const refreshItem = (id: number, form: ItemAdd) => {
  return ServiceAxios({
    url: `/item/${id}`,
    data: form,
    method: 'PUT'
  })
}

//币种
export interface CurrencyGet {
  name: string
  isLocal: string
  pageNumber: string
  pageSize: string
  sort: string
  order: string
}

export const getCurrency = (form: CurrencyGet) => {
  return ServiceAxios({
    url: '/currency/page',
    method: 'GET',
    params: form
  })
}

export const deletaCurrency = (id: number) => {
  return ServiceAxios({
    url: `/currency/${id}`,
    method: 'DELETE'
  })
}

/**
 * BankInfoDto
 */
/**
 * SvarDto
 */
export interface CurrencyAdd {
  /**
   * 币种属性:1本币、2外币
   */
  isLocal?: boolean
  /**
   * 币种名称
   */
  name?: string
}

export const addCurrency = (form: CurrencyAdd) => {
  return ServiceAxios({
    url: `/currency`,
    method: 'POST',
    data: form
  })
}

export const refreshCurrency = (id: number, form: CurrencyAdd) => {
  return ServiceAxios({
    url: `/currency/${id}`,
    data: form,
    method: 'PUT'
  })
}

//订单模式
export interface OrdersGet {
  mode: string
  psign: string
  pageNumber: string
  pageSize: string
  sort: string
  order: string
}

export const getOrders = (form: OrdersGet) => {
  return ServiceAxios({
    url: '/orders/page',
    method: 'GET',
    params: form
  })
}

export const deletaOrders = (id: number) => {
  return ServiceAxios({
    url: `/orders/${id}`,
    method: 'DELETE'
  })
}

/**
 * OrdersDto
 */
export interface OrdersAdd {
  /**
   * 固定：1一般、2保证金、3长单、4盘多库存…可添加。
   */
  mode?: string
  /**
   * 实价修改标志 TRUE表示可改，FALSE表示不可
   */
  psign?: boolean
}
export const addOrders = (form: OrdersAdd) => {
  return ServiceAxios({
    url: `/orders`,
    method: 'POST',
    data: form
  })
}

export const refreshOrders = (id: number, form: OrdersAdd) => {
  return ServiceAxios({
    url: `/orders/${id}`,
    data: form,
    method: 'PUT'
  })
}

//款项类别
export interface TypeGet {
  money: string
  type: string
  pageNumber: string
  pageSize: string
  sort: string
  order: string
}

export const getType = (form: TypeGet) => {
  return ServiceAxios({
    url: '/moneytype/page',
    method: 'GET',
    params: form
  })
}

export const deletaType = (id: number) => {
  return ServiceAxios({
    url: `/moneytype/${id}`,
    method: 'DELETE'
  })
}

/**
 * BankInfoDto
 */
/**
 * SvarDto
 */
export interface TypeAdd {
  /**
   * 款项：固定1贸易、2税费、3仓储、4海关
   */
  money?: number
  /**
   *
   * 款项类型：1贸易：固定值：货款、余款；2税费：固定值：印花税、海关增值税、关税；3仓储：固定值：仓储费、过户费、制仓单费、期转现费、入库费、出库费、短驳费。可添加；4海关：固定值：滞港费、滞报费。可添加
   */
  type?: string
}

export const addType = (form: TypeAdd) => {
  return ServiceAxios({
    url: `/moneytype`,
    method: 'POST',
    data: form
  })
}

export const refreshType = (id: number, form: TypeAdd) => {
  return ServiceAxios({
    url: `/moneytype/${id}`,
    data: form,
    method: 'PUT'
  })
}

//商品品种
export interface VarietyGet {
  name: string
  code: string
  nof: string
  vat: string
  tariff: string
  unit: string
  relset: string
  pageNumber: string
  pageSize: string
  sort: string
  order: string
}

export const getVariety = (form: VarietyGet) => {
  return ServiceAxios({
    url: '/variety/page',
    method: 'GET',
    params: form
  })
}

export const deletaVariety = (id: number) => {
  return ServiceAxios({
    url: `/variety/${id}`,
    method: 'DELETE'
  })
}

/**
 * BankInfoDto
 */
/**
 * SvarDto
 */
export interface VarietyAdd {
  /**
   * 代码
   */
  code?: string
  /**
   * 品种名称
   */
  name?: string
  /**
   * 期货每手数量number of futures
   */
  nof?: number
  /**
   * 实数结算标志real settle
   */
  relset?: number
  /**
   * 关税tariff
   */
  tariff?: number
  /**
   * 重量单位
   */
  unit?: string
  /**
   * 增值税率(value added tax )
   */
  vat?: number
}

export const addVariety = (form: VarietyAdd) => {
  return ServiceAxios({
    url: `/variety`,
    method: 'POST',
    data: form
  })
}

export const refreshVariety = (id: number, form: VarietyAdd) => {
  return ServiceAxios({
    url: `/variety/${id}`,
    data: form,
    method: 'PUT'
  })
}

//商品规格
export interface GradeGet {
  variety: string
  name: string
  code: string
  content: string
  size: string
  meter: string
  weight: string
  pageNumber: string
  pageSize: string
  sort: string
  order: string
}

export const getGrade = (form: GradeGet) => {
  return ServiceAxios({
    url: '/grade/page',
    method: 'GET',
    params: form
  })
}

export const deletaGrade = (id: number) => {
  return ServiceAxios({
    url: `/grade/${id}`,
    method: 'DELETE'
  })
}

/**
 * BankInfoDto
 */
/**
 * SvarDto
 */
export interface GradeAdd {
  /**
   * 代码
   */
  code?: string
  /**
   * 含量,（百分比）
   */
  content?: string
  /**
   * 计量标准（块/件）
   */
  meter?: string
  /**
   * 品级名称
   */
  name?: string
  /**
   * 外形尺寸shape_size
   */
  size?: string
  /**
   * 关联品种表id品种表/规格表：一对多
   */
  variety?: number
  /**
   * 每件重量
   */
  weight?: string
}

export const addGrade = (form: GradeAdd) => {
  return ServiceAxios({
    url: `/grade`,
    method: 'POST',
    data: form
  })
}

export const refreshGrade = (id: number, form: GradeAdd) => {
  return ServiceAxios({
    url: `/grade/${id}`,
    data: form,
    method: 'PUT'
  })
}

//商品商标
export interface TrademarkGet {
  variet: string
  name: string
  code: string
  country: string
  place: string
  vendor: string
  pageNumber: string
  pageSize: string
  sort: string
  order: string
}

export const getTrademark = (form: TrademarkGet) => {
  return ServiceAxios({
    url: '/trademark/page',
    method: 'GET',
    params: form
  })
}

export const deletaTrademark = (id: number) => {
  return ServiceAxios({
    url: `/trademark/${id}`,
    method: 'DELETE'
  })
}

/**
 * BankInfoDto
 */
/**
 * SvarDto
 */
export interface TrademarkAdd {
  /**
   * 代码
   */
  code?: string
  /**
   * 生产国
   */
  country?: string
  /**
   * 商标名
   */
  name?: string
  /**
   * 产地
   */
  place?: string
  /**
   * 关联品种表id,品种表/商标表：一对多
   */
  variety?: number
  /**
   * 生产厂商
   */
  vendor?: string
}

export const addTrademark = (form: TrademarkAdd) => {
  return ServiceAxios({
    url: `/trademark`,
    method: 'POST',
    data: form
  })
}

export const refreshTrademark = (id: number, form: TrademarkAdd) => {
  return ServiceAxios({
    url: `/trademark/${id}`,
    data: form,
    method: 'PUT'
  })
}
