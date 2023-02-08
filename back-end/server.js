const express = require('express')
const cors = require('cors')
const connectdb = require('./config/connectDb')
const userRoutes = require('./routes/user')
const port = process.env.PORT

const app = express()

require('dotenv').config()

app.use(express.json())
app.use(cors({
    origin :["http://localhost:3000"],
    method: ["GET","POST"],
    credentials :true
}))

connectdb()

app.use('/',userRoutes)





app.listen(port, (err)=>{
    (err)? console.log(err) : console.log(`connected to port ${port}`)

})