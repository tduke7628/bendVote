let express = require("express");
const router = express.Router();
const { login, createAccount } = require("../Controller/auth.js");
router.post("/login", login);
router.post("/reg", createAccount);

module.exports = router;
