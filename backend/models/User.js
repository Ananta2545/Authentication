import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema({
    fullName: String,
    email: {type: String, unique: true},
    password: String,
    phone: String,
    companyName: String,
    isAgency: Boolean
});

export default mongoose.model("User", UserSchema);