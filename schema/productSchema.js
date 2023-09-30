const mongoose = require("mongoose");

// create schema
const productSchema = mongoose.Schema({
    productName : String,
    categories : String
});

// add functionality
productSchema.methods.show = function(){
    console.log("This is product schema");
}

module.exports = productSchema;
