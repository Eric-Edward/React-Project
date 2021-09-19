const express = require('express')
const app = express()

app.use((request, response, next) => {
    console.log("有用户请求服务器！");
    next();
})

app.all('/login', (request, response) => {
    const data = {
        username: 'eric',
        password: 'Tsinghua'
    }
    response.send(JSON.stringify(data))
})


app.listen(5000, (error) => {
    if (!error) console.log(`服务器正常启动！`);
})