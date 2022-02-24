const http = require('http')
const fs = require('fs')

http.createServer(async function(request, response) {
    if (request.url == '/user') {
        const buffers = []
        for await (const chunk of request) {
            buffers.push(chunk)
        }
        let userName = Buffer.concat(buffers).toString()
        response.end(userName)
    }
    else if (request.url == '/hello') {
        response.end('Hello from /hello.')
    }
    else {
        fs.readFile('index.html', (error, data) => response.end(data))
    }
}).listen(3000, () => console.log('Сервер запущен по адресу http://localhost:3000'))
