const mongoose = require("mongoose");
const loginSchema = new mongoose.Schema({
  name: String,
  email: String,
  hashedPassword: String,
});

const dbUri = `${process.env.DB_URI}/backend`;


async function connectToDatabase() {
  try {
    await mongoose.connect(databaseURI, { useNewUrlParser: true, useUnifiedTopology: true, serverSelectionTimeoutMS: 3000 });

    console.log("Successfully connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
}

connectToDatabase();

const loginModel = new mongoose.model("loginfo", loginSchema);

module.exports = loginModel;
