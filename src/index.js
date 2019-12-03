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

import { createNewcustomer, getCustomerById, getCustomers } from "./customer/controller"
import { createNewaccount, getAccountById, getAccounts, deleteAccountById, updateAccountById } from "./account/controller"
import { createNewtransaction, getTransaction, getTransactionById } from "./transaction/controller"


// import CustomerRouter from './customer/routes'

// import AccountRouter from './account/routes'

// import TransactionRouter from './transaction/routes'

// import { ApolloServer, gql } from "apollo-server-express"
import { ApolloServer } from "apollo-server-express"
import schema from "./schema";
// const { model } = require('./models/customer')
// const { schema } = require('./models/customer')

const app = express()

app.use(json({}))

app.use(
    urlencoded({
        extended: false
    })
)

// let typeDefs = gql`
// type Customer {
//     id: ID!
//     name:String!
//     mobile:String!
// }

// type Account {
// id: ID!
// type: String!
// balance: Float!
// accountNumber:String!
// customer:Customer!
// }
// type Transaction{
//     id:ID!
//     type:String!
//     amount:Float!
//     account:Account!
// }
// input CustomerInput{
//     name:String!
//     mobile:String!
// }
// input AccountInput {
//     type: String!
//     balance:Float!
//     accountNumber:String!
//     customer:ID!
// }
// input TransactionInput{
//     type:String!
//     amount:Float!
//     account:ID!
// }

// type Query{
//     customer(id:ID!):Customer
//     customers:[Customer]
//     account(id:ID!):Account
//     accounts:[Account]
//     transaction(id:ID!):Transaction
//     transactions:[Transaction]
// }
// type Mutation{
//     createCustomer(input:CustomerInput):Customer
//     createAccount(input:AccountInput):Account
//     createTransaction(input:TransactionInput):Transaction
// }
// `

// let resolvers = {
//     Query: {
//         customer(parent, args, context, info) {
//             return getCustomerById(args.id)
//         },
//         customers(parent, args, context, info) {
//             return getCustomers()
//         },
//         account(parent, args, context, info) {
//             return getAccountById(args.id)
//         },
//         accounts(parent, args, context, info) {
//             return getAccounts()
//         },
//         transaction(parent, args, context, info) {
//             return getTransactionById(args.id)
//         },
//         transactions(parent, args, context, info) {
//             return getTransaction()
//         }
//     },
//     Mutation: {
//         createCustomer(parent, args, context, info) {
//             return createNewcustomer(args.input)
//         },
//         createAccount(parent, args, context, info) {
//             return createNewaccount(args.input)
//         },
//         createTransaction(parent, args, context, info) {
//             return createNewtransaction(args.input)
//         }
//     }
// }

const server = new ApolloServer({ schema })

server.applyMiddleware({ app })

// app.use("/customer", CustomerRouter)

// app.use("/account", AccountRouter)

// app.use("/transaction", TransactionRouter)

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