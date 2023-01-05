const express = require('express')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const { PORT, MONGO_URL, CLIENT_URL } = require('./config/config')
const mongoose = require('mongoose')
const router = require('./routers/index')
const errorMiddleware = require('./middlewares/errorMiddlewares')

const app = express()

app.use(express.json())
app.use(cookieParser())
app.use(cors({
    credentials: true,
    origin: CLIENT_URL
}))
app.use('/api', router)
app.use(errorMiddleware)

const start = async () => {
    try {
        await mongoose.connect(MONGO_URL).then(console.log('111'))
        app.listen(PORT, () => console.log(`Server started on ${PORT} PORT`))
    } catch (e) {
        console.log(e)
    }
}

start()