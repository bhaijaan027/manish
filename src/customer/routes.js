const { Router } = require("express")
const router = Router()
const Customer = require('../models/customer')

const {
    createNewcustomer,
    getCustomerById,
    getCustomers
} = require("./controller")

router.get('/', (req, res) => {
    // Customer.find({ "name": "MANISH" }, { mobile: 1, _id: 0 })
    getCustomers()
        // Customer.find({})
        .then(customers => {
            console.log(customers)
            return res.send(`${customers}`)
        })
        .catch(err => {
            console.log(err)
        })


})


router.get('/:id', (req, res) => {
    // Customer.findById(req.params.id, { name: 1, mobile: 1, _id: 0 })
    // Customer.find({})
    getCustomerById(req.params.id)
        .then(customers => {
            // console.log(customers)
            return res.send(customers)
        })
        .catch(err => {
            console.log(err)
            res.sendStatus(500)
        })


})


router.post('/', (req, res) => {
    // let name = req.body.name
    // let mobile = req.body.mobile
    // console.log(name)
    // console.log(mobile)
    // console.log(Customer)
    createNewcustomer(req.body)
        .then(customer => {
            // console.log(customer)
            return res.send(customer)
        })
        .catch(err => {
            console.log(err)
        })

    // return res.send(name + " " + mobile)
})


module.exports = router
