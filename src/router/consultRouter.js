const express = require("express");
const postConsult = require("../controllers/consult");

const router = express.Router();

router.post("/consult", postConsult);

module.exports = router;
