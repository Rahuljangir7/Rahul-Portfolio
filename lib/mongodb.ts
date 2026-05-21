import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

interface MongooseCache {
  conn: typeof mongoose | null;
  promise: Promise<typeof mongoose> | null;
}

declare global {
  var mongoose: MongooseCache | undefined;
}

let cached: MongooseCache = global.mongoose || { conn: null, promise: null };

if (!global.mongoose) {
  global.mongoose = cached;
}

async function connectDB() {
  if (cached.conn) {
    return cached.conn;
  }

  if (!MONGODB_URI) {
    // Return a mock connection for build process
    console.warn("MongoDB URI not found, using mock connection for build");
    return null as any;
  }

  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
      family: 4, // Force IPv4 to fix querySrv DNS issues
      serverApi: {
        version: "1" as const,
        strict: true,
        deprecationErrors: true,
      }
    };

    cached.promise = mongoose.connect(MONGODB_URI, opts).then((connection) => {
      console.log("MongoDB Connected");
      return connection;
    });
  }

  try {
    cached.conn = await cached.promise;
  } catch (e) {
    cached.promise = null;
    throw e;
  }

  return cached.conn;
}

export default connectDB;
