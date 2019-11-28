const Transaction = require('../models/transaction')
const Account = require('../models/account')



const createNewtransaction = trans => {
    const createNewtransaction = new Transaction(trans)
    return createNewtransaction.save()
}

// const getCustomerById = id => {
//     return Customer.findById(id)
// }
const getTransactionById = id => {
    return Transaction.findById(id)
}


const getTransaction = () => {
    return Transaction.find()
}

module.exports = {
    createNewtransaction: createNewtransaction,
    getTransaction: getTransaction,
    getTransactionById: getTransactionById
    // getCustomers: getCustomers
}