import serviceAxios from '..'

export const getTrade = (form: any) => {
  return serviceAxios({
    method: 'GET',
    url: '/trade/trade/page',
    params: form
  })
}

export const purchaseTrade = (form: any) => {
  return serviceAxios.post('trade/purchase', form)
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

export const getPosition = (form: Position) => {
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
