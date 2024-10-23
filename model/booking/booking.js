import mongoose from "mongoose";

const BookingSchema = mongoose.Schema({
    date_of_booking:{
        type:String,
        required:true
    },
    number_in_party:{
        type:String,
        required:true
    },
    customer :{
        type:mongoose.Schema.Types.ObjectId,
        ref: 'Customer',
        required:true   
    }
})

 const booking = mongoose.model('Booking',BookingSchema)
 export default booking