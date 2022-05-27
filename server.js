require('dotenv').config()

const express = require('express')
const app = express()
const mongoose = require('mongoose')




const db_url = process.env.DB_URL
//console.log(db_url)
mongoose.connect(db_url, {useNewUrlParser : true} )
const db = mongoose.connection
db.on('error', (error) => console.error('There has been a database connection error', error))
db.once('open', ()=> console.log('Connected to database'))

app.use(express.json())
const subscribersRouter = require('./routes/subscribers')
app.use('/subscribers', subscribersRouter)

app.listen(3000, () => console.log('Server started'))