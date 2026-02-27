import 'server-only';
import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error("Please define the MONGODB_URI environment variable");
}

let catched = global.mongoose

if(!catched){
    catched = global.mongoose = {conn: null, Promise: null}
}

async function connectDB() {
    if(catched.conn){
        return catched.conn
    }
    if(!catched.Promise){
        const opts = {
            bufferCommands: false,
    }
    catched.Promise = mongoose.connect(`${process.env.MONGODB_URI}/quickcart`, opts).then(mongoose => {
        return mongoose
    })
    }
    catched.conn = await catched.Promise
    return catched.conn
}

export default connectDB;