const Account = require('../models/account')




const createNewaccount = account => {
    const createNewaccount = new Account(account)
    return createNewaccount.save()
}

const getAccountById = id => {
    return Account.findById(id).populate("customer")
}

const getAccounts = () => {
    return Account.find().populate("customer")
}

const deleteAccountById = id => {
    return Account.remove(id)
}

const updateAccountById = (id, bbb) => {
    return Account.findByIdAndUpdate(id, {
        $inc: {
            balance: bbb
        }
    })
}

// const updateBalance = (id, amount) => {
//     return Account.findByIdAndUpdate(id, {
//       $inc: {
//         balance: amount
//       }
//     });
//   };


module.exports = {
    createNewaccount: createNewaccount,
    getAccountById: getAccountById,
    getAccounts: getAccounts,
    deleteAccountById,
    updateAccountById
}