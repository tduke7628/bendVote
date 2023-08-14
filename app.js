var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const { login, createAccount } = require("./controllerAuth.js");
var detailsRoute = require("./controllerDetails.js");
const {
  addToDetails,
  getDetails,
  deleteDetail,
} = require("./controllerDetails.js");
const { update } = require("./controllerAdmin.js");
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

app.post("/auth/login", login);
app.post("/auth/reg", createAccount);
app.post("/details/add", addToDetails);
app.get("/details/get", getDetails);
app.put("/details/del", deleteDetail);
app.post("/admin/", update);

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
