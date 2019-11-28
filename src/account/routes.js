const { Router } = require("express")

const router = Router()

const Account = require('../models/account')

const {
    createNewaccount,
    getAccountById,
    getAccounts,
    deleteAccountById,
    updateAccountById
} = require("./controller")

router.get('/', (req, res) => {
    getAccounts()
        .then(account => {
            console.log(account)
            return res.send(`${account}`)
        })
        .catch(err => {
            console.log(err)
        })
})

router.get('/:id', (req, res) => {
    getAccountById(req.params.id, { balance: 1, accountNumber: 1, _id: 0 })
        .then(account => {
            console.log(account)
            return res.send(`${account}`)
        })
        .catch(err => {
            console.log(err)
        })
})

router.post('/', (req, res) => {
    createNewaccount(req.body)
        .then(account => {
            return res.send(account)
        })
        .catch(err => {
            console.log(err)
            return res.sendStatus(500)
        })
})

router.delete('/:id', (req, res) => {
    deleteAccountById({ _id: req.params.id })
        .then(acc => {
            console.log("DELETED")
            return res.send("DELETED")
        })
        .catch(err => {
            console.log(err)
        })
})

router.put('/:id', (req, res) => {
    updateAccountById({ _id: req.params.id })
        .then(acc => {
            console.log("UPDATED")
            return res.send("UPDATED")
        })
        .catch(err => {
            console.log(err)
        })
})

module.exports = router