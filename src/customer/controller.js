import Customer from '../models/customer'

export const createNewcustomer = customer => {
    const createNewcustomer = new Customer(customer)
    return createNewcustomer.save()
}

export const getCustomerById = id => {
    return Customer.findById(id)
}

export const getCustomers = () => {
    return Customer.find()
}

// export const createNewcustomer = createNewcustomer
// export const getCustomerById = getCustomerById
// export const getCustomers = getCustomers