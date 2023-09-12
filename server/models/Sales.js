const mongoose = require('mongoose')


const SalesSchema =new mongoose.Schema
({
    name: String,
 email: String,
    password: String
    

})
// const UsersSchema = new mongoose.Schema({
//     name: String,
//     email: String,
//     password: String
    

    
// })

const SalesModel = mongoose.model("saless", SalesSchema)
module.exports = SalesModel