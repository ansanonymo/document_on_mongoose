# Getting Started

## Installation

**using npm :**
```js
npm install mongoose
```

**using yarn :**
```js
yarn add mongoose
```


## Syntax to connect with mongoose

```js
const mongoose = require("mongoose");


// connect with mongoose
async function connectDatabase(){
    await mongoose.connect("connection_string");

    // example of connection string for local host : "mongodb://127.0.0.1:27017/test"
}
```

## Making Schema

> 🟢 With Mongoose, everything derived from a Schema.

**Simple Syntax of Making Schema :**
```js
const productSchema = new mongoose.Schema({
    name : String
});
```

**Adding functionality in schema :**
```js
productSchema.methods.show = function(){
    console.log("This is product schema.");
}
```

## Making Model

> 🟢 Model is a class which we construct documents. 

**Compiling schema into model :**

```js
const Product = mongoose.model("product",productSchema);
```

## Making Document

> 🟢 Now create document using model class.

```js
const product = new Product({name : "IPhone"})
```


## Save the document on mongodb

> 🟢 Simply called `.save()` method to save the document on mongodb.

```js
await product.save();

// call function
product.show();
```