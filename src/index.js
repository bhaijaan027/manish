const express = require('express')

const app = express()

// app.use('/', (request,response) => {

//     if(request.method == 'GET'){
//         return response.send("heloo world")
//     }
//     else{
//       return  response.sendStatus(405)
//     }
// })
const parser = require('body-parser')

const mongoose = require('mongoose')

const CustomerRouter = require('./customer/routes')

const AccountRouter = require('./account/routes')

const TransactionRouter = require('./transaction/routes')

// const { model } = require('./models/customer')
// const { schema } = require('./models/customer')

app.use(parser.json({}))

app.use(
    parser.urlencoded({
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




mongoose.connect(
    "mongodb+srv://root:root@cluster0-y2dw9.mongodb.net/test?retryWrites=true&w=majority",
    {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true
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