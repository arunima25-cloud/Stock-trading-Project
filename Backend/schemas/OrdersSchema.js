const {Schema} = require("mongoose");

const OrdersSchema = new Schema({
    name: String,
    price: Number,
    price: Number,
    mode: String,
});

module.exports = {OrdersSchema};