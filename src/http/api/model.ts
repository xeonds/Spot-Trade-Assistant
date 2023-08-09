import serviceAxios from '..'

export const ModelGet = async (id: string) => {
  const res = await serviceAxios({
    url: '/template/category/' + id
  })
  return res
}
export const ModelRefresh = (id: string, form: any) => {
  return serviceAxios({
    url: `/user/${id}`,
    method: 'PUT',
    data: form
  })
}
