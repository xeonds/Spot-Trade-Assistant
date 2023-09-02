import serviceAxios from '..'

/**
 * TransactionDto
 */
export interface Baozhikaicang {
    /**
     * 买/卖
     */
    bs?: number;
    /**
     * 期货合约
     */
    contract?: string;
    /**
     * 币种
     */
    currency?: number;
    /**
     * 成交日期
     */
    date?: string;
    /**
     * 期货平仓盈亏
     */
    fprofit?: number;
    /**
     * 期货公司简称
     */
    futures?: number;
    /**
     * 规格name（统计）
     */
    grade?: number;
    /**
     * 成交手数
     */
    hands?: number;
    /**
     * 保值类型（1建仓、2移仓）
     */
    hedgetype?: number;
    /**
     * 本公司账套简称shortname(统计)
     */
    ledger?: number;
    /**
     * 备注
     */
    note?: string;
    /**
     * 开仓open/平仓close
     */
    oc?: number;
    /**
     * 本公司部门名称name（统计）
     */
    ourdept?: number;
    /**
     * 每手数量
     */
    perhands?: number;
    /**
     * 品种name（统计）
     */
    variety?: number;
    /**
     * 加权价
     */
    weighting?: number;
}

export const addBaozhikaicang = (data: Baozhikaicang) => {
  return serviceAxios({
    method: 'POST',
    url: '/transaction/transaction',
    data
  })
}

export interface Transaction {
    /**
     * 期货合约
     */
    contract?: string;
    /**
     * 成交日期
     */
    date?: string;
    /**
     * 期货公司简称
     */
    futures?: string;
    /**
     * 规格name（统计）
     */
    grade?: string;
    /**
     * 保值类型（1建仓、2移仓）
     */
    hedgetype?: string;
    /**
     * 本公司账套简称shortname(统计)
     */
    ledger?: string;
    /**
     * 排序方式 asc/desc
     */
    order?: string;
    /**
     * 本公司部门名称name（统计）
     */
    ourdept?: string;
    /**
     * 页号
     */
    pageNumber?: string;
    /**
     * 页面大小
     */
    pageSize?: string;
    /**
     * 头寸号
     */
    positionno?: string;
    /**
     * 排序字段
     */
    sort?: string;
    /**
     * 品种name（统计）
     */
    variety?: string;
    [property: string]: any;
}

export const getTransaction = (data?: Transaction) => {
  return serviceAxios({
    method: 'GET',
    url: '/transaction/transaction',
    data
  })
}

export interface FPosition {
    /**
     * 期货合约
     */
    contract?: string;
    /**
     * 期货公司简称
     */
    futures?: string;
    /**
     * 规格name（统计）
     */
    grade?: string;
    /**
     * 保值类型（1建仓、2移仓）
     */
    hedgetype?: string;
    /**
     * 本公司账套简称shortname(统计)
     */
    ledger?: string;
    /**
     * 排序方式 asc/desc
     */
    order?: string;
    /**
     * 本公司部门名称name（统计）
     */
    ourdept?: string;
    /**
     * 页号
     */
    pageNumber?: string;
    /**
     * 页面大小
     */
    pageSize?: string;
    /**
     * 头寸号
     */
    positionno?: string;
    /**
     * 排序字段
     */
    sort?: string;
    /**
     * 品种name（统计）
     */
    variety?: string;
    [property: string]: any;
}

export const getFPosition = (data?: FPosition) => {
  return serviceAxios({
    method: 'GET',
    url: '/transaction/fposition',
    data
  })
}