const express = require('express');
const router = express.Router();

router.get("/", (req,res) => 
     res.json({status: "Nodejs backend"}));

module.exports = router;