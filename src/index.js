import express from 'express'



// app.use('/', (request,response) => {

//     if(request.method == 'GET'){
//         return response.send("heloo world")
//     }
//     else{
//       return  response.sendStatus(405)
//     }
// })
import { json, urlencoded } from 'body-parser'

import { connect } from 'mongoose'

import CustomerRouter from './customer/routes'

import AccountRouter from './account/routes'

import TransactionRouter from './transaction/routes'

// const { model } = require('./models/customer')
// const { schema } = require('./models/customer')

const app = express()

app.use(json({}))

app.use(
    urlencoded({
        extended: false
    })
)

app.use("/customer", CustomerRouter)

app.use("/account", AccountRouter)

app.use("/transaction", TransactionRouter)

// app.get('/', (req, res) => {
//     let name = req.query.name
//     console.log(name)
//     return res.send(`hellow ${name} + ${mobile}`)
// })

// app.post('/',(req,res) => {
//     let name = req.body.name
//     console.log(name)
//     return res.send(`hellow ${name}`)
// })




connect(
    "mongodb+srv://root:root@cluster0-y2dw9.mongodb.net/test?retryWrites=true&w=majority",
    {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true,
        useFindAndModify: false
    }
).then(res => {
    console.log("DATABASE CONNECTED")
    app.listen(8080, () => {
        console.log("SERVER STARTED")
    })
})
    .catch(err => {
        console.log("SERVER STARTUP ERROR.")
        Console.log(err)
    })
// app.listen(8080)