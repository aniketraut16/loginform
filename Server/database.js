const mongoose = require("mongoose");
const loginSchema = new mongoose.Schema({
  name: String,
  email: String,
  hashedPassword: String,
});

async function connectToDatabase() {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/backend", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Successfully connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
}

connectToDatabase();

const loginModel = new mongoose.model("loginfo", loginSchema);

module.exports = loginModel;
