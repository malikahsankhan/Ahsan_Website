let mongoose = require('mongoose');

let userSchema = mongoose.Schema({
    name:String,
    price:String,
    location:String,
    owner:String
})
                                                        // 'user' table ka name history, model means table
export let Product = mongoose.models.product ||  mongoose.model('product', userSchema);
