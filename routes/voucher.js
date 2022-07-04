const express = require("express");
const router = express.Router();
const voucherService = require("../services/voucher");

router.get("/customer/:customerId/voucher/active", async (req, res, next) => {
    console.log(`${req.params.customerId}`);

    const openVoucher = await voucherService.findOpenVoucher(req.params.customerId);

    res.status(200)
        .json(openVoucher);
});

router.post("/customer/:customerId/voucher/open", async (req, res, next) => {
    console.log(`${req.params.customerId}`);

    const openVoucher = await voucherService.openVoucher(req.params.customerId);

    res.status(200)
        .json(openVoucher);
});

router.patch("/customer/:customerId/voucher/:voucherId/closed", async (req, res, next) => {
    console.log(`${req.params.customerId} ${req.params.voucherId}`);

    await voucherService.closeVoucher(req.params.voucherId);

    res.sendStatus(204);
});

module.exports = router;
