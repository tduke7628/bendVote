var express = require("express");
const router = express.Router();
const { update } = require("../Controller/admin.js");
router.post("/", update);

module.exports = router;
