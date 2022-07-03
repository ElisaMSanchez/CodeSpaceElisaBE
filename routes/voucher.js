const express = require("express");
const router = express.Router();

router.get("/customer/:customerId/voucher/active", async (req,res,next) => {
    console.log(`${req.params.customerId}`)
});

router.post("/customer/:customerId/voucher/active", async (req,res,next) => {
    console.log(`${req.params.customerId}`)
});

router.patch("/customer/:customerId/voucher/:voucherId/closed", async (req,res,next) => {
    console.log(`${req.params.customerId} ${req.params.voucherId}`)
});

module.exports = router;
