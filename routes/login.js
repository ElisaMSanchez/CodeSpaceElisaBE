const express = require("express");
const router = express.Router();
const config = require('../config');
const crypto = require("crypto");

router.post("/login", async (req, res, next) => {
    const loginRequest = req.body;

    if (loginRequest.username === config.adminUser && loginRequest.password === config.adminPassword) {
        res.json({token: crypto.randomUUID()})
    } else {
        res.sendStatus(401); // 401 Unauthorized
    }
});

module.exports = router;
