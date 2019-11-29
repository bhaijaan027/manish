import Transaction, { findById, find } from '../models/transaction'
import Account from '../models/account'


import { createNewaccount, getAccountById, getAccounts, deleteAccountById, updateAccountById } from "../account/controller"


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



export const createNewtransaction = async trans => {
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
export const getTransactionById = id => {
    return Transaction.findById(id).populate("account")
}


export const getTransaction = () => {
    return Transaction.find().populate("account", {
        "accountNumber": 1
    })
}

// export const createNewtransaction = createNewtransaction
// export const getTransaction = getTransaction
// export const getTransactionById = getTransactionById