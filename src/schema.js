import { schemaComposer } from "graphql-compose"

// import { CustomerTC } from "./customer/composer";
// import { AccountTC } from "./account/composer";
// import { TransactionTC } from "./transaction/composer";

import { CustomerTC } from "./models/customer";
import { AccountTC } from "./models/account";
import { TransactionTC } from "./models/transaction";

import { getCustomers } from "./customer/controller"

import { createNewaccount, getAccountById, getAccounts, deleteAccountById, updateAccountById } from "./account/controller"
import { createNewtransaction, getTransaction, getTransactionById } from "./transaction/controller"


// schemaComposer.Query.addFields({
//     customers: {
//         type: [CustomerTC],
//         resolve: getCustomers
//     },
//     accounts: {
//         type: [AccountTC],
//         resolve: getAccounts
//     },
//     transactions: {
//         type: [TransactionTC],
//         resolve: getTransaction
//     }
// })

AccountTC.addRelation("customer", {
    resolver: CustomerTC.getResolver("findById"),
    prepareArgs: {
        _id: source => source.customer
    }
})

TransactionTC.addRelation("account", {
    resolver: AccountTC.getResolver("findById"),
    prepareArgs: {
        _id: source => source.account
    }
})


schemaComposer.Query.addFields({
    customers: CustomerTC.getResolver("findMany"),
    accounts: AccountTC.getResolver("findMany"),
    transactions: TransactionTC.getResolver("findMany")
})

export default schemaComposer.buildSchema()