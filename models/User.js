const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const UserSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true }
});

UserSchema.pre('save', async function (next) {
    if (!this.isModified('password')) {
        next();
    }
    const hasheed = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, hasheed);
});

module.exports = mongoose.model('User', UserSchema);