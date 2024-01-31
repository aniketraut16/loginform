const mongoose = require("mongoose");
const loginSchema = new mongoose.Schema({
  name: String,
  email: String,
  hashedPassword: String,
});

const dbUri = `${process.env.DB_URI}/backend`;


async function connectToDatabase() {
  const maxRetries = 3;
  let retries = 0;

  while (retries < maxRetries) {
    try {
      await mongoose.connect(dbUri, { useNewUrlParser: true, useUnifiedTopology: true, serverSelectionTimeoutMS: 10000 });
      console.log("Successfully connected to MongoDB");
      break;
    } catch (error) {
      console.error("Error connecting to MongoDB:", error);
      retries++;
      console.log(`Retrying connection (attempt ${retries}/${maxRetries})...`);
      await new Promise(resolve => setTimeout(resolve, 5000)); // Wait for 5 seconds before retrying
    }
  }
}

connectToDatabase();


const loginModel = new mongoose.model("loginfo", loginSchema);

module.exports = loginModel;
