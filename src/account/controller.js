import Account from '../models/account'




export const createNewaccount = account => {
    const createNewaccount = new Account(account)
    return createNewaccount.save()
}

export const getAccountById = id => {
    return Account.findById(id).populate("customer")
}

export const getAccounts = () => {
    return Account.find().populate("customer")
}

export const deleteAccountById = id => {
    return Account.remove(id)
}

export const updateAccountById = (id, bbb) => {
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


// export default {
//     createNewaccount: createNewaccount,
//     getAccountById: getAccountById,
//     getAccounts: getAccounts,
//     deleteAccountById,
//     updateAccountById
// }