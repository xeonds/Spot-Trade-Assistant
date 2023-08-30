import ServiceAxios from '..'

export const login = (userName: string, password: string) => {
  return ServiceAxios({
    url: '/user/login',
    method: 'POST',
    data: {
      userName,
      password
    }
  })
}

export const logout = () => {
  return ServiceAxios({
    url: '/user/logout',
    method: 'POST'
  })
}

export const excel_test = () => {
  const url = `http://43.140.194.131:9001/template/export/${id}`
  const token = <string>localStorage.getItem('token')
  const headers = new Headers({
    Token: token,
    'User-Agent': 'apifox/1.0.0 (https://www.apifox.cn)',
    Accept: '*/*',
    Host: '43.140.194.131:9001',
    Connection: 'keep-alive'
  })

  const requestOptions = {
    method: 'GET',
    headers,
    redirect: 'follow'
  }

  fetch(url, <any>requestOptions)
    .then((response) => {
      console.log(response.headers.get('content-disposition'))

      return response.blob()
    })
    .then((blob) => {
      const excelBlob = new Blob([blob], {
        type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
      })
      const excelUrl = URL.createObjectURL(excelBlob)
      const a = document.createElement('a')
      a.href = excelUrl
      a.download = 'exported_file.xlsx' // 设置下载文件的文件名
      a.click()
      URL.revokeObjectURL(excelUrl)
    })
    .catch((error) => console.log('error', error))
}
