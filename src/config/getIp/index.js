const ip = require('publicip');
const getIp = new Promise((resolve, reject) => {
    ip.v4().then(response => resolve(response)).catch(error => {
        console.log('获取本地ip地址失败！')
    })
})

export default getIp