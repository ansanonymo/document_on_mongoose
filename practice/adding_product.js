const mongoose = require("mongoose");
const productSchema = require("./../schema/productSchema");

async function connectWithDatabase(){
    await mongoose.connect("mongodb://localhost:27017/shop");
}

async function disconnectConnection(){
    await mongoose.connection.close();
}


async function main(){
    console.log("> Program is going to start : ");

    // connect with mongodb
    await connectWithDatabase();
    console.log("> Connection is successfull.");

    // create model
    const Product = mongoose.model("product",productSchema);

    // create product document
    const product = new Product({
        productName : "Samsung 10",
        categories : "smartphone"
    });

    await product.save();

    // disconnect the database
    await disconnectConnection();
    console.log("> Disconnect Successfull.");
}

main().catch((err)=>{
    console.log("There is a problem.");
});