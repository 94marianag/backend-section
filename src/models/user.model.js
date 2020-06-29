const mongoose = require('mongoose');
const { Schema } = mongoose;
const { compareSync, hashSync, genSaltSync } = require('bcryptjs');

const UserSchema = new Schema({
    name: {type: String, required: true},
    username: {type: String, required: true},
    password: {type: String, required: true}
});

UserSchema.method.toJSON = function(){
    let user = this.toObject();
    delete user.password;
    return user;
};

UserSchema.method.comparePasswords = function(password){
    return compareSync(password, this.password);
};

UserSchema.pre('save', async function(next){
    const user = this;

    if(!iser.isModified("password")){
        return next();
    }

    const alt = genSaltSync(10);
    const hashPassword = hashSync(user.password, salt);
    user.password = hashPassword;
    next();
});

module.exports = mongoose.model('user', UserSchema);
