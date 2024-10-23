import mongoose from "mongoose";

const db = mongoose.connect('mongodb://localhost:27017/ERD').then((res) => {
    console.log("Connected to MongoDB");
}).catch((err) => {
    console.log(err);
})

export default db;
// mongodb://localhost:27017/ERD
// mongodb+srv://jencysodvadiya:1dIncKhVhHuPLHFU@clusterapi.byatz.mongodb.net/ERD