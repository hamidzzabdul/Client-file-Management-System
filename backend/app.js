const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
// const bodyParser = require("body-parser");

// Routes imports
const userRouter = require("./routes/userRoute");

const app = express();
app.use(
  cors({
    origin: "http://localhost:5173", // your frontend URL
    credentials: true, // allow cookies or auth headers
  })
);
app.use(express.json({ limit: "10kb" }));
app.use(express.urlencoded({ extended: true, limit: "10kb" }));
app.use(cookieParser());

//routes
app.use("/api/v1/users", userRouter);

module.exports = app;
