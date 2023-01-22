import mongoose from "mongoose";

const connectDB = (url) => {
  // helping while searching in the database.
  mongoose.set("strictQuery", true);

  mongoose
    .connect(url)
    .then(() => console.log("Connect to mongodb"))
    .catch((err) => console.log(`Connection Error: ${err}`));
};

export default connectDB;
