const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const path = require("path");
const cors = require("cors");
const users = require("./routes/users");
const projects = require("./routes/projects");
const certificates = require("./routes/certificates");
const admins = require("./routes/admins");

const app = express();

// Bodyparser Middleware
app.use(bodyParser.json());
app.use(cors());
app.use("/api/users", users);
app.use("/api/projects", projects);
app.use("/api/certificates", certificates);
app.use("/api/admins", admins);

// DB Config
const uri =
  "mongodb+srv://nihatzaman:123456Nihat@cluster0.azl5rgq.mongodb.net/?retryWrites=true&w=majority";
mongoose
  .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("MongoDB database connection established successfully");
  })
  .catch((err) => {
    console.error("Database connection error: ", err);
  });

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
