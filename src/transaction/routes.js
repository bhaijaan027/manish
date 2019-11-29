import { Router } from "express"

const router = Router()

import Transaction from '../models/transaction'
import Account from '../models/account'

import { createNewaccount, getAccountById, getAccounts, deleteAccountById, updateAccountById } from "../account/controller"

import { createNewtransaction, getTransaction, getTransactionById } from "./controller"

router.get('/', (req, res) => {
    getTransaction()
        .then(trans => {
            console.log(trans)
            return res.send(`${trans}`)
        })
        .catch(err => {
            console.log(err)
        })
})

router.post('/', (req, res) => {
    createNewtransaction(req.body)
        .then(trans => {
            // var amo = trans.amount
            // if (trans.type == 'debit') {
            //     getAccountById(trans.account)
            //         .then(account => {
            //             // console.log(account)
            //             // return res.send(`${account}`)
            //             var bal = account.balance
            //             console.log(bal)


            //             var rem = bal - amo
            //             updateAccountById({ _id: account._id }, rem)
            //                 .then(acc => {
            //                     console.log("UPDATED")
            //                     console.log(rem)
            //                     return res.send("UPDATED")
            //                 })
            //                 .catch(err => {
            //                     console.log(err)
            //                 })
            //         })
            //         .catch(err => {
            //             console.log(err)
            //         })
            // }
            // else {
            //     var amo = trans.amount
            //     getAccountById(trans.account)
            //         .then(account => {
            //             // console.log(account)
            //             // return res.send(`${account}`)

            //             var bal = account.balance
            //             console.log(bal)

            //             var rem = bal + amo
            //             updateAccountById({ _id: account._id }, rem)
            //                 .then(acc => {
            //                     console.log("UPDATED")
            //                     console.log(rem)
            //                     return res.send("UPDATED")
            //                 })
            //                 .catch(err => {
            //                     console.log(err)
            //                 })
            //         })
            //         .catch(err => {
            //             console.log(err)
            //         })

            // }
            console.log(trans)
            return res.send(trans)
        })
        .catch(err => {
            console.log(err)
            // return res.sendStatus(500)
        })
})

router.get('/:id', (req, res) => {
    getTransactionById(req.params.id)
        .then(trans => {
            console.log(trans)
            return res.send(`${trans}`)
        })
        .catch(err => {
            console.log(err)
        })
})

export default router