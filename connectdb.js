import mongoose from "mongoose";

async function connectMongoDb(uri) {
    return mongoose.connect(uri)
}

export default connectMongoDb;