const express = require('express')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const { PORT, MONGO_URL } = require('./config/config')
const mongoose = require('mongoose')
const router = require('./routers/index')

const app = express()

app.use(express.json())
app.use(cookieParser())
app.use(cors())
app.use('/api', router)

const start = async() => {
    try{
        await mongoose.connect(MONGO_URL, 
            console.log('Connect'))
        app.listen(PORT, () => console.log(`Server started on ${PORT} PORT`))
    }catch(e){
        console.log(e)
    }
}

start()