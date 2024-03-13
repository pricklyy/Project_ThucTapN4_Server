const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
        username:{
            type: String,
            required: true,
        },
        email:{
            type: String,
            required: true,
            minLength: 10,
            maxLength: 50,
            unique: true,
        },
        password:{
            type: String,
            required: true,
            minLength: 6,
        },
        numberPhone:{
            type: Number,
            unique: false,
        },
        xKey:{
            type: String,
            unique: false,
        },
        wallID:{
            type: String,
            unique: false,
        },
        admin:{
            type: Boolean,
            default: false,
        },
    },
    {
        timestamps: true,
        validateBeforeSave: false
    });

module.exports = mongoose.model("User", userSchema);
