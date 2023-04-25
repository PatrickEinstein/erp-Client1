import mongoose from "mongoose";
import validator from "validator";

const UserSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, 'Please provide a name'],
        minlength: 3,
        maxlength: 20,
        trim: true,
    },
    lastName: {
        type: String,
        required: [true, 'Please provide a name'],
        minlength: 3,
        maxlength: 20,
        trim: true,
    },
    email: {
        type: String,
        required: [true, 'Please provide an email'],
        validate: {
            validator: validator.isEmail,
            message: 'Please provide a valid email'
        },
        // unique: true,
    },
    phone: {
        type: Number,
        required: [true, 'Please provide a phone number'],
    },
    companyName: {
        type: String,
        required: [true, 'Please provide a name'],
        minlength: 3,
        maxlength: 20,
        trim: true,
    },
    Products: {
        type: String,
        required: [true, 'Please provide a name'],
        minlength: 3,
        trim: true,
    },
    pdf:{
        type:Buffer
    }
})

const User = mongoose.model("User", UserSchema);

export default User;