require("dotenv").config();

const express = require("express");
const cors = require("cors");
require("./config/dbConnection");

const app = express();

app.use(cors());

// error handling
app.use((err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.message = err.message || "Internal Server Error";
  res.status(err.StatusCode).json({ message: err.message });
});

const port = process.env.PORT;
app.listen(port, () => console.log(`Server is running on port ${port} `));
