import { dataType } from 'element-plus/es/components/table-v2/src/common'
import serviceAxios from '..'

export interface getTradeForm {
  /**
   * 关联贸易商部门表 company.type=供应商、客户、贸易商 id
   */
  companyDeptId?: string
  /**
   * 贸易商公司 id
   */
  companyId?: string
  /**
   * 购销日期，输入值
   */
  date?: string
  /**
   * 交收方式deliver，枚举1(1现货spot、2远期forward)
   */
  deliver?: string
  /**
   * 关联规格表 id, 可取品种、重量单位、增值税率值
   */
  gradeId?: string
  /**
   * 关联公司表 type="本公司账套" id
   */
  ledgerId?: string
  /**
   * 排序方式 asc/desc
   */
  order?: string
  /**
   * 关联订单模式表 id (1一般、2保证金、3长单、4盘多库存)
   */
  orderId?: string
  /**
   * 订单号
   */
  orderNo?: string
  /**
   * 关联本公司部门表 id
   */
  ourDeptId?: string
  /**
   * 页号
   */
  pageNumber?: string
  /**
   * 页面大小
   */
  pageSize?: string
  /**
   * 贸易类型，枚举1(1内贸、2外贸、3进口、4出口)
   */
  pattern?: string
  /**
   * 购销，(1采购purchase、2销售sales)
   */
  ps?: string
  /**
   * 排序字段
   */
  sort?: string
  /**
   * 关联品牌表 id
   */
  trademarkId?: string
  /**
   * 关联品种表 id
   */
  varietyId?: string
}

export const getTrade = (form: getTradeForm) => {
  return serviceAxios({
    method: 'GET',
    url: '/trade/trade/page',
    params: form
  })
}

/**
 * TradePurchaseDto
 */
export interface purchaseTradeForm {
  /**
   * 实收付金额，输入值总和，actual amount
   */
  actAmount?: number
  /**
   * 成交金额。amt=at_price*real_qty，价税合计应相等
   */
  amount?: number
  /**
   * 税后价格，after tax price
   */
  atPrice?: number
  /**
   * 关联公司部门表 company.type=供应商、客户、贸易商 id
   */
  companyDeptId?: number
  /**
   * 贸易商公司 id
   */
  companyId?: number
  /**
   * 关联币种表 id
   */
  currencyId?: number
  /**
   * 购销日期，输入值
   */
  date?: string
  /**
   * 交收方式deliver，枚举1(1现货spot、2远期forward)
   */
  deliver?: number
  /**
   * 关联规格表 id, 可取品种、重量单位、增值税率值
   */
  gradeId?: number
  /**
   * 关联公司表 type="本公司账套" id
   */
  ledgerId?: number
  /**
   * 关联订单模式id
   */
  orderId?: number
  /**
   * 关联本公司部门表 id
   */
  ourDeptId?: number
  /**
   * 贸易类型
   */
  pattern?: number
  /**
   * 购销，(1采购purchase、2销售sales)
   */
  ps?: number
  /**
   * 数量，入库表实数总和（计算值）。初值=合同订单数量（输入值）
   */
  realqty?: number
  /**
   * 关联商标表 id
   */
  trademarkId?: number
  /**
   * 重量单位
   */
  unit?: number
  /**
   * 关联品种表 id
   */
  varietyId?: number
  /**
   * 增值税率
   */
  vat?: number
}

export const purchaseTrade = (form: purchaseTradeForm) => {
  // API 调用异常，发送数据莫名其妙不带请求体，发送拷贝则正常
  const data = { ...form }
  return serviceAxios({
    method: 'POST',
    url: '/trade/purchase',
    data: data
  })
}

interface Position {
  /**
   * 关联币种表 id
   */
  currency?: string
  /**
   * 采购日期
   */
  date?: string
  /**
   * 交收方式deliver，枚举1(1现货spot、2远期forward)
   */
  deliver?: string
  /**
   * 关联规格表 id，可取品种、重量单位、增值税率值
   */
  grade?: string
  /**
   * 关联公司表 type="本公司账套" id
   */
  ledger?: string
  /**
   * 排序方式 asc/desc
   */
  order?: string
  /**
   * 关联订单模式表 id (1一般、2保证金、3长单、4盘多库存)
   */
  orderId?: string
  /**
   * 关联本公司部门表 id
   */
  ourdept?: string
  /**
   * 页号
   */
  pageNumber?: string
  /**
   * 页面大小
   */
  pageSize?: string
  /**
   * 购销，(1采购purchase、2销售sales)
   */
  ps?: string
  /**
   * 排序字段
   */
  sort?: string
  /**
   * 关联贸易表 id，(贸易表（购）/持仓表：一对多，因外贸转进口)
   */
  trade?: string
  /**
   * 关联商标表 id
   */
  trademark?: string
  /**
   * 贸易类型，枚举1(1内贸、2外贸、3进口、4出口)
   */
  type?: string
  /**
   * 关联品种表 id
   */
  varietyId?: string
}

export const getPosition = (form: Position) => {
  return serviceAxios({
    method: 'GET',
    url: '/trade/position/page',
    params: form
  })
}

export const getCompanyList = (way: number) => {
  return serviceAxios({
    method: 'GET',
    url: `/company/options/${way}`
  })
}

export const getCompanyDept = (way: number, id: number) => {
  return serviceAxios({
    method: 'GET',
    url: `/companydept/options/${way}/${id}`
  })
}

export const getVariety = () => {
  return serviceAxios({
    method: 'GET',
    url: `/variety/options`
  })
}

export const getCurrency = () => {
  return serviceAxios({
    method: 'GET',
    url: `/currency/options`
  })
}

export const getTrademark = (id: number) => {
  return serviceAxios({
    method: 'GET',
    url: `/trademark/options/${id}`
  })
}

export const getGrade = (id: number) => {
  return serviceAxios({
    method: 'GET',
    url: `/grade/options/${id}`
  })
}

export const getOrder = () => {
  return serviceAxios({
    method: 'GET',
    url: `/orders/options`
  })
}

/**
 * TradeSaleDto
 */
export interface SaleConfirm {
  positionDtos: PositionDto[]
  tradePurchaseDto: TradePurchaseDto
}

/**
 * PositionDto
 */
export interface PositionDto {
  /**
   * 持仓记录id
   */
  id?: number
  /**
   * 持仓量
   */
  oi?: number
}

/**
 * TradePurchaseDto
 */
export interface TradePurchaseDto {
  /**
   * 实收付金额，输入值总和，actual amount
   */
  actAmount?: number
  /**
   * 成交金额。amt=at_price*real_qty，价税合计应相等
   */
  amount?: number
  /**
   * 税后价格，after tax price
   */
  atPrice?: number
  /**
   * 关联公司部门表 company.type=供应商、客户、贸易商 id
   */
  companyDeptId?: number
  /**
   * 贸易商公司 id
   */
  companyId?: number
  /**
   * 关联币种表 id
   */
  currencyId?: number
  /**
   * 购销日期，输入值
   */
  date?: string
  /**
   * 交收方式deliver，枚举1(1现货spot、2远期forward)
   */
  deliver?: number
  /**
   * 关联规格表 id, 可取品种、重量单位、增值税率值
   */
  gradeId?: number
  /**
   * 关联公司表 type="本公司账套" id
   */
  ledgerId?: number
  /**
   * 关联订单模式id
   */
  orderId?: number
  /**
   * 关联本公司部门表 id
   */
  ourDeptId?: number
  /**
   * 贸易类型
   */
  pattern?: number
  /**
   * 购销，(1采购purchase、2销售sales)
   */
  ps?: number
  /**
   * 数量，入库表实数总和（计算值）。初值=合同订单数量（输入值）
   */
  realqty?: number
  /**
   * 关联商标表 id
   */
  trademarkId?: number
  /**
   * 重量单位
   */
  unit?: number
  /**
   * 关联品种表 id
   */
  varietyId?: number
  /**
   * 增值税率
   */
  vat?: number
}

export const saleConfirm = (form: SaleConfirm) => {
  return serviceAxios({
    method: 'POST',
    url: `/trade/sale`,
    data: form
  })
}

export interface ExportReferer {
  /**
   * 排序方式 asc/desc
   */
  order?: string
  /**
   * 页号
   */
  pageNumber?: string
  /**
   * 页面大小
   */
  pageSize?: string
  /**
   * 关联持仓表 cur=外币 id (持仓表/进口成本参考价表)
   */
  position?: string
  /**
   * 排序字段
   */
  sort?: string
}

export const exportReferer = (form: ExportReferer) => {
  return serviceAxios({
    method: 'GET',
    url: `/trade/importcost/page`,
    params: form
  })
}

export const get_sprice = () => {
  return serviceAxios({
    method: 'GET',
    url: '/trade/sprice'
  })
}

export interface SPRICE {
  /**
   * id
   */
  id?: number
  /**
   * 进出口结算价
   */
  settleprice?: number
  /**
   * 订单币种结算价 currency settle price
   */
  sprice?: number
}

export const put_sprice = (form: SPRICE[]) => {
  return serviceAxios({
    method: 'PUT',
    url: '/trade/sprice',
    data: form
  })
}
export interface IMPORT {
  /**
   * 汇率参考值，输入值
   */
  exrate?: number
  /**
   * id
   */
  id?: number
}

export const put_import = (form: IMPORT[]) => {
  return serviceAxios({
    method: 'PUT',
    url: '/trade/import',
    data: form
  })
}

export const get_import = () => {
  return serviceAxios({
    method: 'GET',
    url: '/trade/import'
  })
}

export interface Check {
  positionId?: number
}

export const get_check = (form: Check) => {
  return serviceAxios({
    method: 'GET',
    url: '/trade/check',
    params: form
  })
}

export interface TRADE2 {
  /**
   * 关联贸易商部门表 company.type=供应商、客户、贸易商 id
   */
  companyDeptId?: string
  /**
   * 贸易商公司 id
   */
  companyId?: string
  /**
   * 购销日期，输入值
   */
  date?: string
  /**
   * 交收方式deliver，枚举1(1现货spot、2远期forward)
   */
  deliver?: string
  /**
   * 关联规格表 id, 可取品种、重量单位、增值税率值
   */
  gradeId?: string
  /**
   * 关联公司表 type="本公司账套" id
   */
  ledgerId?: string
  /**
   * 排序方式 asc/desc
   */
  order?: string
  /**
   * 关联订单模式表 id (1一般、2保证金、3长单、4盘多库存)
   */
  orderId?: string
  /**
   * 订单号
   */
  orderNo?: string
  /**
   * 关联本公司部门表 id
   */
  ourDeptId?: string
  /**
   * 页号
   */
  pageNumber?: string
  /**
   * 页面大小
   */
  pageSize?: string
  /**
   * 贸易类型，枚举1(1内贸、2外贸、3进口、4出口)
   */
  pattern?: string
  /**
   * 购销，(1采购purchase、2销售sales)
   */
  ps?: string
  /**
   * 排序字段
   */
  sort?: string
  /**
   * 关联品牌表 id
   */
  trademarkId?: string
  /**
   * 关联品种表 id
   */
  varietyId?: string
}

export const getTrade2 = (form: TRADE2) => {
  return serviceAxios({
    method: 'GET',
    url: '/contract/trade',
    params: form
  })
}

export interface CONTRACT {
  /**
   * 合同日期，输入值
   */
  date?: string
  /**
   * 合同归档状态，枚举(1未归档、2己归档)
   */
  file?: string
  /**
   * 公司账套
   */
  ledger?: string
  /**
   * 排序方式 asc/desc
   */
  order?: string
  /**
   * 业务部门
   */
  ourDept?: string
  /**
   * 页号
   */
  pageNumber?: string
  /**
   * 页面大小
   */
  pageSize?: string
  /**
   * 购销
   */
  ps?: string
  /**
   * 印花税付款申请状态,枚举5(1未完成、2完成、3部分)
   */
  requeststate?: string
  /**
   * 合同签订状态，枚举2(1未签、2签订己方合同、3签订对方合同)
   */
  sign?: string
  /**
   * 排序字段
   */
  sort?: string
}

export const getContract = (form: CONTRACT) => {
  return serviceAxios({
    method: 'GET',
    url: '/contract/contract',
    params: form
  })
}

export interface Request {
  /**
   * 贸易商id
   */
  company?: string
  /**
   * 付款申请日期
   */
  date?: string
  /**
   * 付款状态
   */
  finished?: string
  /**
   * 本公司账套简称id
   */
  ledger?: string
  /**
   * 排序方式 asc/desc
   */
  order?: string
  /**
   * 公司部门id
   */
  ourDept?: string
  /**
   * 页号
   */
  pageNumber?: string
  /**
   * 页面大小
   */
  pageSize?: string
  /**
   * 查询类型(1合同印花税，2采购付款）
   */
  queryType?: string
  /**
   * 付款申请单号
   */
  requestNo?: string
  /**
   * 排序字段
   */
  sort?: string
  /**
   * 税务机关
   */
  taxAuthority?: string
}

export const getRequest = (form: Request) => {
  return serviceAxios({
    method: 'GET',
    url: '/contract/request',
    params: form
  })
}

/**
 * ConsDto
 */
export interface ConsDto {
  /**
   * 实付印花税额actual stamp duty，输入值
   */
  actsd?: number
  /**
   * 合同日期
   */
  date?: string
  /**
   * 备注
   */
  note?: string
  /**
   * 关联trade_id(用于合同金额计算，关联字段填充等操作）
   */
  tradeIds?: number[]
}

export const postContract = (form: ConsDto) => {
  return serviceAxios({
    method: 'POST',
    url: '/contract/contract',
    data: form
  })
}

/**
 * RequestDto
 */
export interface RequestDto {
  /**
   * 申请金额
   */
  amount?: number
  /**
   * 对方公司银行id
   */
  bank?: number
  /**
   * 关联的合同id集合
   */
  consList?: number[]
  /**
   * 申请日期
   */
  date?: string
  /**
   * 款项
   */
  money?: number
  /**
   * 备注
   */
  note?: string
  /**
   * 税务机关
   */
  taxAuthority?: string
  /**
   * 款项类型
   */
  type?: number
}

export const postRequestDto = (form: RequestDto) => {
  return serviceAxios({
    method: 'POST',
    url: '/contract/request',
    data: form
  })
}

export const putContract = (id_array: number[]) => {
  return serviceAxios({
    method: 'PUT',
    url: '/contract/contract/filing',
    data: id_array
  })
}

export const getBankinfo = () => {
  return serviceAxios({
    method: 'GET',
    url: '/bankinfo/all'
  })
}

export const getMoneytype = (id: number) => {
  return serviceAxios({
    method: 'GET',
    url: '/moneytype/type',
    params: { id }
  })
}

export interface CAIGOU {
  /**
   * 关联贸易商部门表 company.type=供应商、客户、贸易商 id
   */
  companyDeptId?: string
  /**
   * 贸易商公司 id
   */
  companyId?: string
  /**
   * 购销日期，输入值
   */
  date?: string
  /**
   * 交收方式deliver，枚举1(1现货spot、2远期forward)
   */
  deliver?: string
  /**
   * 关联规格表 id, 可取品种、重量单位、增值税率值
   */
  gradeId?: string
  /**
   * 关联公司表 type="本公司账套" id
   */
  ledgerId?: string
  /**
   * 排序方式 asc/desc
   */
  order?: string
  /**
   * 关联订单模式表 id (1一般、2保证金、3长单、4盘多库存)
   */
  orderId?: string
  /**
   * 订单号
   */
  orderNo?: string
  /**
   * 关联本公司部门表 id
   */
  ourDeptId?: string
  /**
   * 页号
   */
  pageNumber?: string
  /**
   * 页面大小
   */
  pageSize?: string
  /**
   * 贸易类型，枚举1(1内贸、2外贸、3进口、4出口)
   */
  pattern?: string
  /**
   * 购销，(1采购purchase、2销售sales)
   */
  ps?: string
  /**
   * 排序字段
   */
  sort?: string
  /**
   * 关联品牌表 id
   */
  trademarkId?: string
  /**
   * 关联品种表 id
   */
  varietyId?: string
}

export const getCaigouliebiao = (form: CAIGOU) => {
  return serviceAxios({
    method: 'GET',
    url: '/purchase/trade',
    params: form
  })
}

export interface FUKUANSQ {
  /**
   * 贸易商id
   */
  company?: string
  /**
   * 付款申请日期
   */
  date?: string
  /**
   * 付款状态
   */
  finished?: string
  /**
   * 本公司账套简称id
   */
  ledger?: string
  /**
   * 排序方式 asc/desc
   */
  order?: string
  /**
   * 公司部门id
   */
  ourDept?: string
  /**
   * 页号
   */
  pageNumber?: string
  /**
   * 页面大小
   */
  pageSize?: string
  /**
   * 查询类型(1合同印花税，2采购付款）
   */
  queryType?: string
  /**
   * 付款申请单号
   */
  requestNo?: string
  /**
   * 排序字段
   */
  sort?: string
  /**
   * 税务机关
   */
  taxAuthority?: string
}

export const getFukuan = (form: FUKUANSQ) => {
  return serviceAxios({
    method: 'GET',
    url: '/purchase/request',
    params: form
  })
}

/**
 * TradeRequestDto
 */
export interface CAIGOUFUKUAN {
  /**
   * 申请金额
   */
  amount?: number
  /**
   * 对方公司银行id
   */
  bank?: number
  /**
   * 申请日期
   */
  date?: string
  /**
   * 款项
   */
  money?: number
  /**
   * 备注
   */
  note?: string
  /**
   * 已付金额
   */
  paid?: number
  /**
   * 关联的贸易记录id集合
   */
  tradeIds?: number[]
  /**
   * 款项类型
   */
  type?: number
}

export const postCaigoufukuan = (form: CAIGOUFUKUAN) => {
  return serviceAxios({
    method: 'POST',
    url: '/purchase/request',
    data: form
  })
}
export const postHetongsaomiao = (id: number, file: any) => {
  return serviceAxios({
    method: 'POST',
    url: `/purchase/image/${id}`,
    data: file
  })
}
