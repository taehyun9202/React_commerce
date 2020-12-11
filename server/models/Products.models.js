const mongoose = require("mongoose");
const ProductSchema = new mongoose.Schema({
    name: {
        type: String
    },
    brand: {
        type: String
    },

    new: {
        type: Boolean,
        default: true
    },
    clearance: {
        type: Boolean,
        default: true
        
    },
    img: {
        type: String,
        required: [true, "Image required"]
    },
    price: {
        type: Number
    },
    // options: [{ 
    //     type : Object,
    //     ref: 'Option' }],
    description:{
        type: String,
        minlength: [3, "Description must be at least 3 characters or longer"] 
    },
    rate: {
        type: Number
    },
    inStock: {
        type: Number
    },
    isSold: {
        type: Number
    },
}, {timestamps: true})


let now = new Date();
console.log(now)
now.setDate(now.getDate() + 7);
console.log(now)
module.exports = mongoose.model("Product", ProductSchema)

