const mongoose = require('mongoose');
const bcrypt = require('bcrypt'); // For secure password hashing

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }
});

/*
// Hash password before saving the user
userSchema.pre('save', async function (next) {
    const salt = await bcrypt.genSalt(10); // Generate a salt for hashing
    this.password = await bcrypt.hash(this.password, salt); // Hash the password
    next();
});
*/

const User = mongoose.model('User', userSchema);

module.exports = User;
