import mongoose from "mongoose";
const CustomerSchema = new mongoose.Schema({
    customer_first_name: {
        type: String,
        required: true
    },
    customer_surname: {
        type: String,
        required: true
    },
    phone_number: {
        type: String,
        required: true
    },
    cellphone_number: {
        type: String,
    },
    email_address: {
        type: String,
        required: true
    },
    other_customer_details: {
        type: String
    },
});

const Customer =  mongoose.model('Customer', CustomerSchema);

 export default Customer;