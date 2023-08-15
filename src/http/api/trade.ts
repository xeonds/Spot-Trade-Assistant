import serviceAxios from '..'

interface Trade {
  /**
   * 关联贸易商部门表 company.type=供应商、客户、贸易商 id
   */
  companyDeptId: string
  /**
   * 贸易商公司 id
   */
  companyId: string
  /**
   * 关联币种表 id
   */
  currencyId: string
  /**
   * 购销日期，输入值
   */
  date: string
  /**
   * 交收方式deliver，枚举1(1现货spot、2远期forward)
   */
  deliver: string
  /**
   * 关联规格表 id, 可取品种、重量单位、增值税率值
   */
  gradeId: string
  /**
   * 关联公司表 type="本公司账套" id
   */
  ledgerId: string
  /**
   * 排序方式 asc/desc
   */
  order: string
  /**
   * 关联订单模式表 id (1一般、2保证金、3长单、4盘多库存)
   */
  orderId: string
  /**
   * 关联本公司部门表 id
   */
  ourDeptId: string
  /**
   * 页号
   */
  pageNumber: string
  /**
   * 页面大小
   */
  pageSize: string
  /**
   * 购销，(1采购purchase、2销售sales)
   */
  ps: string
  /**
   * 排序字段
   */
  sort: string
  /**
   * 贸易类型，枚举1(1内贸、2外贸、3进口、4出口)
   */
  type: string
  /**
   * 关联品种表 id
   */
  varietyId: string
}

export const get_Trade = (form: Trade) => {
  return serviceAxios({
    method: 'GET',
    url: '/trade/trade/page',
    params: form
  })
}

interface Position {
  /**
   * 关联币种表 id
   */
  currency: string
  /**
   * 采购日期
   */
  date: string
  /**
   * 交收方式deliver，枚举1(1现货spot、2远期forward)
   */
  deliver: string
  /**
   * 关联规格表 id，可取品种、重量单位、增值税率值
   */
  grade: string
  /**
   * 关联公司表 type="本公司账套" id
   */
  ledger: string
  /**
   * 排序方式 asc/desc
   */
  order: string
  /**
   * 关联订单模式表 id (1一般、2保证金、3长单、4盘多库存)
   */
  orderId: string
  /**
   * 关联本公司部门表 id
   */
  ourdept: string
  /**
   * 页号
   */
  pageNumber: string
  /**
   * 页面大小
   */
  pageSize: string
  /**
   * 购销，(1采购purchase、2销售sales)
   */
  ps: string
  /**
   * 排序字段
   */
  sort: string
  /**
   * 关联贸易表 id，(贸易表（购）/持仓表：一对多，因外贸转进口)
   */
  trade: string
  /**
   * 关联商标表 id
   */
  trademark: string
  /**
   * 贸易类型，枚举1(1内贸、2外贸、3进口、4出口)
   */
  type: string
  /**
   * 关联品种表 id
   */
  varietyId: string
}

export const get_Position = (form: Position) => {
  return serviceAxios({
    method: 'GET',
    url: '/trade/position/page',
    params: form
  })
}

interface Tcost {
  /**
   * 排序方式 asc/desc
   */
  order: string
  /**
   * 页号
   */
  pageNumber: string
  /**
   * 页面大小
   */
  pageSize: string
  /**
   * 关联持仓表 cur=外币 id (持仓表/进口成本参考价表)
   */
  positionCur: string
  /**
   * 排序字段
   */
  sort: string
}

export const get_Tcost = (form: Tcost) => {
  return serviceAxios({
    method: 'GET',
    url: '/trade/importcost/page',
    params: form
  })
}

export const caigou = (form) => {
  return serviceAxios({
    method: 'POST',
    url: '/trade/purchase',
    params: form
  })
}
