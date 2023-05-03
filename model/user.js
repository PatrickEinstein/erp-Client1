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
    type: Number
   },
   cat2: {
    type: Number
   },
   cat3: {
    type: Number
   },
   cat4: {
    type: Number
   },
   cat5: {
    type: Number
   },
   cat6: {
    type: Number
   },
   cat7: {
    type: Number
   },
   cat8: {
    type: Number
   },
   cat9: {
    type: Number
   },
   cat10: {
    type: Number
   },
   cat11: {
    type: Number
   },
   cat12: {
    type: Number
   },
   cat13: {
    type: Number
   },
   cat14: {
    type: Number
   },
   cat15: {
    type: Number
   },
   totalAveragePercentage: {
    type: Number
   },
   totalResult: {
    type: Number
   }
})

const User = mongoose.model("User", UserSchema);

export default User;