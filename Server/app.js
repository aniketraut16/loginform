const express = require("express");
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Import route files
const loginRoutes = require("./Routes/loginRoutes");
const signinRoutes = require("./Routes/signinRoutes");
const updateRoutes = require("./Routes/updateRoutes");
const indexRoutes = require("./Routes/indexRoutes");

// Use route files
app.use(updateRoutes);
app.use(indexRoutes);
app.use(signinRoutes);
app.use(loginRoutes);

app.listen(8000, () => {
  console.log("Listening on port 8000");
});
