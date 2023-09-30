const mongoose = require("mongoose");

async function connectWithDatabase(){
    await mongoose.connect("mongodb://127.0.0.1:27017/shop");
}

async function disconnectConnection(){
    await mongoose.connection.close();
}

connectWithDatabase()
.then(async function(){
    console.log(">connect successfull.");

    


    // disconnect
    await mongoose.connection.close();
    console.log("> disconnect succesfull.");
})
.catch(async function(error){
    console.log("error");
})