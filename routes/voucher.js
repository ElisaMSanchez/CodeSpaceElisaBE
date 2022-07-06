const express = require("express");
const router = express.Router();
const voucherService = require("../services/voucher");

router.get("/customer/:customerId/voucher/active", async (req, res, next) => {
    console.log(`${req.params.customerId}`);

    try {
        const openVoucher = await voucherService.findOpenVoucher(req.params.customerId);

        res.status(200)
            .json(openVoucher);
    } catch (err) {
        console.error(`Error buscando un voucher open para customer ${req.params.customerId} `, err.message);
        next(err);
    }
});

router.post("/customer/:customerId/voucher/open", async (req, res, next) => {
    console.log(`${req.params.customerId}`);

    try {
        const openVoucher = await voucherService.openVoucher(req.params.customerId);

        res.status(200)
            .json(openVoucher);
    } catch (err) {
        console.error(`Error creando un voucher open para customer ${req.params.customerId} `, err.message);
        next(err);
    }
});

router.patch("/customer/:customerId/voucher/:voucherId/closed", async (req, res, next) => {
    console.log(`${req.params.customerId} ${req.params.voucherId}`);

    try {
        await voucherService.closeVoucher(req.params.voucherId);

        res.sendStatus(204);
    } catch (err) {
        console.error(`Error cerrando voucher ${req.params.voucherId} para customer ${req.params.customerId} `, err.message);
        next(err);
    }
});

module.exports = router;
