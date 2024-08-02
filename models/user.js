let mongoose = require('mongoose');

let userSchema = mongoose.Schema({
    user_name:String,
    user_email:String,
    user_password:String,
    role:String,

})
                                                        // 'user' table ka name history, model means table
export let User = mongoose.models.user ||  mongoose.model('user', userSchema);

// yahan new user create kia
// let u1 = new User();
// u1.user_name = 'ali';
// u1.user_email = 'ali@gmail.com';
// u1.save();

// let u2 =  new User();