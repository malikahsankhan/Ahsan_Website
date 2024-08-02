
import mongoose from "mongoose"

export function connectKaro(){

    mongoose.connect('mongodb+srv://ahsankhan:25january786@cluster0.qw4eaby.mongodb.net/cat').then(function(connection){

        console.log(connection)
        console.log("db conncet hoyi")

    }).catch(function(err){
        console.log(err);
    });

}