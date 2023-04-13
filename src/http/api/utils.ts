import ServiceAxios from '..'

export const login = (userName: string, password: string) => {
  return ServiceAxios({
    url: '/user/login',
    method:'POST',
    data: {
      userName,
      password
    }
  })
}
