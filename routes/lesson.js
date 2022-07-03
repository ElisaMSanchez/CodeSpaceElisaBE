const express = require("express");
const router = express.Router();
const lessonService = require("../services/lesson");

router.get("/customer/:customerId/voucher/:voucherId/lesson", async (req, res, next) => {
    console.log(`${req.params.customerId} ${req.params.voucherId}`);

    const lessons = await lessonService.findLessonsByVoucherId(req.params.voucherId);

    res.status(200)
        .json(lessons);

});

router.post("/customer/:customerId/voucher/:voucherId/lesson", async (req, res, next) => {
    console.log(`${req.params.customerId} ${req.params.voucherId} ${req.body}`);

    const registeredLesson = await lessonService.registerLesson(req.body, req.params.voucherId);

    res.status(200)
        .json(registeredLesson);

});

router.put("/customer/:customerId/voucher/:voucherId/lesson/:lessonId", async (req, res, next) => {
    console.log(`${req.params.customerId} ${req.params.voucherId} ${req.params.lessonId} ${req.body}`);

    const updatedLesson = await lessonService.updateLesson(req.params.lessonId, req.body);

    res.status(200)
        .json(updatedLesson);
});

router.delete("/customer/:customerId/voucher/:voucherId/lesson/:lessonId", async (req, res, next) => {
    console.log(`${req.params.customerId} ${req.params.voucherID} ${req.params.lessonId}`);

    await lessonService.deleteLesson(req.params.lessonId);

    res.status(204);

});

module.exports = router;
