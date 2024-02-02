import mongoose from "mongoose";

type CachedType = {
  conn: any,
  promise: any
}

declare global {
  var mongoose: CachedType;
}

let MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error('Please specify MongoDB URI in the .env file');
}

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

async function dbConnect() {
  if (cached.conn) {
    console.log('Connected');
    return cached.conn;
  }

  if (!cached.promise) {
    cached.promise = mongoose.connect(process.env.MONGODB_URI!).then(conn => { return conn; });
  }

  try {
    cached.conn = await cached.promise;
  } catch (err) {
    cached.promise = null;
    throw err;
  }

  console.log('Connected');
  return cached.conn;
}

export default dbConnect;