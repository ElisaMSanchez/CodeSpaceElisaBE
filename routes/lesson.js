const express = require("express");
const router = express.Router();

router.get("/customer/:customerId/voucher/:voucherId/lesson", async(req, res,next)=>{
    console.log(`${req.params.customerId} ${req.params.voucherId}`);

    res.status(200)
        .json([{"lesson":"lesson1"}, {"lesson":"lesson2"}])

});

router.post("/customer/:customerId/voucher/:voucherId/lesson", async(req, res,next)=>{
    console.log(`${req.params.customerId} ${req.params.voucherId} ${req.body}`);

    res.status(200)
        .json({createdAt: req.body.createdAt, internalComment: req.body.internalComment, externalComment:req.body.internalComment})

});

router.put("/customer/:customerId/voucher/:voucherId/lesson/:lessonId", async(req, res,next)=>{
    console.log(`${req.params.customerId} ${req.params.voucherId} ${req.params.lessonId} ${req.body}`);

});

router.delete("/customer/:customerId/voucher/:voucherId/lesson/:lessonId", async(req, res,next)=>{
    console.log(`${req.params.customerId} ${req.params.voucherID} ${req.params.lessonId}`);

});

module.exports = router;
