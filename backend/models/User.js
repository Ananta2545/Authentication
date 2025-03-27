import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema({
    fullName: {type: String, required: true},
    email: {type: String, unique: true},
    password: {type: String, required: true},
    phone: {type: String, required: true},
    companyName: String,
    isAgency: Boolean
}, {timestamps: true});

export default mongoose.model("User", UserSchema);