const express = require("express");
const router = express.Router();

const adminUser = "test";
const adminPassword = "test";

const crypto = require("crypto");

router.post("login", async (req, res, next) => {
    const loginRequest = req.body;

    if (loginRequest.username === adminUser && loginRequest.password === adminPassword) {
        res.json({token: crypto.randomUUID()})
    } else {
        res.status(401); // 401 Unauthorized
    }
});

module.exports = router;
