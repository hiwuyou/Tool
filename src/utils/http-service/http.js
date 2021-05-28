import axios from 'axios';
let https = axios.create( {
    baseURL: 'https://app.amarsoft.com/appservicetest',
    timeout: 5000
})
axios.interceptors.request.use(config => {
    let token = ''
    token='eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJvcmdJc0V4cGlyZWQiOjAsImF2YXRhclVybCI6Imh0dHBzOi8vYXBwLmFtYXJzb2Z0LmNvbS9hcHBzZXJ2aWNldGVzdC9vcmdhbml6YXRpb24vcmVzb3VyY2UvZmV0Y2gvdjE_a2V5PS9BUFAvaW1hZ2UvYXZhdGFyL2xvZ29NLnBuZyIsIm1vYmlsZSI6ImJqNFVFeVVac3NLMFlJbnN0dzUxTnc9PSIsIm5hbWUiOiIxMjM0NTY3ODkiLCJ1c2VyUm9sZSI6WyIxMDAiLCIxMDEiLCIxMDIiLCIxMDMiXSwiZXhwIjoxNjA3MzI3OTEwLCJ1c2VySWQiOiJhcHBvcmcyMDIwMTEwNDAwNzk2NDU3Iiwib3JnSWQiOiJhcHAyMDIwMDYzMDAwMTYwNDUzIn0.oUqag9VjVFHedMr6gQrQFq90Uai-OKtug2dSCTAnHsQ'

    config.headers = {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token,
    }
    return config
}, err => {
    return err
})
axios.interceptors.response.use(config => {
    return config.data
}, err => {
    return err
})
function post(url,params) {
    return new Promise((reslove, reject) => {
        https.post(url,params).then( res => {
            if (res.data.code == 100) {
                reslove(res.data)
            } else {
               // alert(res.data.mesg)
                reject(res.data)
            }
        }).catch(res => {
            reject(res)
        })
    })
}
export const http = {
    post
}