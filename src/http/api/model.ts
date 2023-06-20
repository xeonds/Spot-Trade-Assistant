import serviceAxios from '..'

export const ModelGet = async (form: any) => {
  const res = await serviceAxios({
    url: '/user/page',
    params: form
  })
  for (const i in res.data) {
    const temp1 = new Date(res.data[i].createTime)
    const temp2 = new Date(res.data[i].updateTime)
    res.data[i].createTime =
      temp1.getFullYear() +
      '年' +
      (temp1.getMonth() + 1) +
      '月' +
      temp1.getDay() +
      '日'
    res.data[i].updateTime =
      temp2.getFullYear() +
      '年' +
      (temp2.getMonth() + 1) +
      '月' +
      temp2.getDay() +
      '日'
  }
  return res
}

export const ModelAdd = (form: any) => {
  return serviceAxios({
    url: `/user`,
    method: 'POST',
    data: form
  })
}

export const ModelRefresh = (id: string, form: any) => {
  return serviceAxios({
    url: `/user/${id}`,
    method: 'PUT',
    data: form
  })
}

export const ModelDelete = (id: string) => {
  return serviceAxios({
    url: `/user/${id}`,
    method: 'DELETE'
  })
}

export const MenusGet = (form: any) => {
  return serviceAxios({
    url: '/menu/page',
    params: form
  })
}

export const MenusAdd = (form: any) => {
  return serviceAxios({
    url: `/menu`,
    method: 'POST',
    data: form
  })
}

export const MenusRefresh = (id: string, form: any) => {
  return serviceAxios({
    url: `/menu/${id}`,
    method: 'PUT',
    data: form
  })
}

export const MenusDelete = (id: string) => {
  return serviceAxios({
    url: `/menu/${id}`,
    method: 'DELETE'
  })
}

export const MenusChange = (id: string) => {
  return serviceAxios({
    url: `/menu/status/${id}`,
    method: 'PUT'
  })
}
