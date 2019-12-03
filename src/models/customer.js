//const mongoose = require("mongoose")
import { model, Schema } from "mongoose"

import { composeWithMongoose } from "graphql-compose-mongoose";

const customerSchema = Schema({
    name: {
        type: String,
        required: true
    },
    mobile: {
        type: String,
        required: true
    }
})


const customerModel = model("customer", customerSchema)

export default customerModel
export const CustomerTC = composeWithMongoose(customerModel)
