import mongoose from "mongoose";

const mongoUri = process.env.MONGO_URL;

export const connectDB = async () => {
  try {

    if (!mongoUri) throw new Error("MongoDB url is not available");
    await mongoose.connect(mongoUri);

  } catch (error) {
    if (error instanceof Error) console.log(error.message);
  }
};
export default mongoose
