require('dotenv').config()
const express = require('express')
const cors = require('cors')
const http = require('http')

const app = express()
const httpPort = process.env.HTTP_PORT

//마지막에 cors 수정해야함
app.use(cors())

const postsRouter = require('./routes/post')

const requestMiddleware = (req, res, next) => {
    console.log('Request URL:', req.originalUrl, ' - ', new Date())
    next()
}
//프론트에서 오는 데이터들을 body에 넣어주는 역할
app.use(express.json())
app.use(requestMiddleware)

//form 형식으로 데이터를 받아오고 싶을 때(false->true)
app.use('/api', express.urlencoded({ extended: false }), postsRouter)

app.get('/', (req, res) => {
    res.send('hello')
})

const server = http.createServer(app)

server.listen(httpPort, () => {
    console.log('http서버가 켜졌어요!')
})
