const mongoose = require("mongoose");

async function main(){
    await mongoose.connect("mongodb://localhost:27017/test");

    const kittySchema = new mongoose.Schema({
        name : String
    });

    const Kitten = mongoose.model("Kitten", kittySchema);

    const silence  = new Kitten({name : "Silence"});

    console.log(silence.name);

    const fluffy = new Kitten({name : "fluffy"});

    await fluffy.save();
}