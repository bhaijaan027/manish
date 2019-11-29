const Transaction = require('../models/transaction')
const Account = require('../models/account')


const {
    createNewaccount,
    getAccountById,
    getAccounts,
    deleteAccountById,
    updateAccountById
} = require("../account/controller")


// const createNewTransaction = async transaction => {
//     const newTransaction = new Transaction(transaction);
//     let createdTransaction = await newTransaction.save();
//     if (transaction.type == "debit") {
//       await updateBalance(transaction.account, transaction.amount * -1);
//     } else {
//       await updateBalance(transaction.account, transaction.amount);
//     }
//     return createdTransaction.populate("account").execPopulate();
//   };



const createNewtransaction = async trans => {
    const newTransaction = new Transaction(trans)
    let createdTransaction = await newTransaction.save();

    if (trans.type == "debit") {
        await updateAccountById(trans.account, trans.amount * -1);
    } else {
        await updateAccountById(trans.account, trans.amount);
    }

    return createdTransaction.populate("account").execPopulate();
}

// const getCustomerById = id => {
//     return Customer.findById(id)
// }
const getTransactionById = id => {
    return Transaction.findById(id).populate("account")
}


const getTransaction = () => {
    return Transaction.find().populate("account", {
        "accountNumber": 1
    })
}

module.exports = {
    createNewtransaction: createNewtransaction,
    getTransaction: getTransaction,
    getTransactionById: getTransactionById
    // getCustomers: getCustomers
}