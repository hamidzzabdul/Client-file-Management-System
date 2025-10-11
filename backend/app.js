const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
// const bodyParser = require("body-parser");

// Routes imports
const userRouter = require("./routes/userRoute");
const fileRouter = require("./routes/fiileRoute");
const globalErrorHandler = require("./controllers/errorController");
const AppError = require("./utils/appError");

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
app.use("/api/v1/files", fileRouter);

// app.all("*", (req, res, next) => {
//   next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
// });

app.use(globalErrorHandler);

module.exports = app;
