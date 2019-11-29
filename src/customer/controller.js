import Customer from '../models/customer'

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

export const createNewcustomer = createNewcustomer
export const getCustomerById = getCustomerById
export const getCustomers = getCustomers