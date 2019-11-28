const Account = require('../models/account')

const createNewaccount = account => {
    const createNewaccount = new Account(account)
    return createNewaccount.save()
}

const getAccountById = id => {
    return Account.findById(id)
}

const getAccounts = () => {
    return Account.find()
}

const deleteAccountById = id => {
    return Account.remove(id)
}

const updateAccountById = (id, bbb) => {
    return Account.updateOne(id, { $set: { balance: bbb } })
}


module.exports = {
    createNewaccount: createNewaccount,
    getAccountById: getAccountById,
    getAccounts: getAccounts,
    deleteAccountById,
    updateAccountById
}