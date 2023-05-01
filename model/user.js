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
    
    },
    phone: {
        type: String,
        // type: Number,
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
    cat1: {
        type: String
    },
    cat2: {
        type: String
    },
    cat3: {
        type: String
    },
    cat4: {
        type: String
    },
    cat5: {
        type: String
    },
    cat6: {
        type: String
    },
    cat6: {
        type: String
    },
    cat7: {
        type: String
    },
    cat8: {
        type: String
    },
    cat9: {
        type: String
    },
    cat10: {
        type: String
    },
    cat11: {
        type: String
    },
    cat12: {
        type: String
    },
    cat13: {
        type: String
    },
    cat14: {
        type: String
    },
    cat15: {
        type: String
    },
    totalResult: {
        type: String
    },
    totalAveragePercentage: {
        type: String
    }
})

const User = mongoose.model("User", UserSchema);

export default User;