var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var detailsRoute = require("./routes/details.js");
var authRoute = require("./routes/auth.js");
var adminUpdateRoute = require("./routes/admin.js");
let mongoose = require("mongoose");
let cors = require("cors");

var app = express();
mongoose.connect(
  "mongodb+srv://Imaxx:imaxx66@cluster0.fljasqv.mongodb.net/?retryWrites=true&w=majority"
);
let db = mongoose.connection;
db.once("open", function () {
  console.log("DATABASE CONNECTED");
});

// app.use(cors({ origin: "https://voten.netlify.app" }));
app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/auth", authRoute);
app.use("/details", detailsRoute);
app.use("/admin", adminUpdateRoute);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
