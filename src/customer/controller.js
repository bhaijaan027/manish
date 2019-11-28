const Customer = require('../models/customer')

const createNewcustomer = customer => {
    const createNewcustomer = new Customer(customer)
    return createNewcustomer.save()
}

const getCustomerById = id => {
    return Customer.findById(id)
}

const getCustomers = () => {
    return Customer.find()
}

module.exports = {
    createNewcustomer: createNewcustomer,
    getCustomerById: getCustomerById,
    getCustomers: getCustomers
}