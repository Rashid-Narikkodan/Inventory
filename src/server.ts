import dotenv from "dotenv";
dotenv.config();
import { app } from "./app";
import { connectDB } from "./db";

const PORT = process.env.PORT || 5000;

const start = async () => {
  try {
    await connectDB();
    console.log("DB started");
    app.listen(PORT, () => {
      console.log(`Server running on PORT ${PORT}`);
    });
  } catch (error) {
    if (error instanceof Error) console.log("server error" + error.message);
  }
};
start();
