import serviceAxios from '..'

export const UserGet = (form: any) => {
  return serviceAxios({
    url: '/user/page',
    params: form
  })
}

export const UserAdd = (form: any) => {
  return serviceAxios({
    url: `/user`,
    method: 'POST',
    data: form
  })
}

export const UserRefresh = (id: string, form: any) => {
  return serviceAxios({
    url: `/user/${id}`,
    method: 'PUT',
    data: form
  })
}

export const UserDelete = (id: string) => {
  return serviceAxios({
    url: `/user/${id}`,
    method: 'DELETE'
  })
}

export const RoleGet = (form: any) => {
  return serviceAxios({
    url: '/role/page',
    params: form
  })
}

export const RoleAdd = (form: any) => {
  return serviceAxios({
    url: `/role`,
    method: 'POST',
    data: form
  })
}

export const RoleRefresh = (id: string, form: any) => {
  return serviceAxios({
    url: `/role/${id}`,
    method: 'PUT',
    data: form
  })
}

export const RoleDelete = (id: string) => {
  return serviceAxios({
    url: `/role/${id}`,
    method: 'DELETE'
  })
}
