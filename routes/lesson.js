const express = require("express");
const router = express.Router();
const lessonService = require("../services/lesson");

router.get("/customer/:customerId/voucher/:voucherId/lesson", async (req, res, next) => {
    console.log(`${req.params.customerId} ${req.params.voucherId}`);

    try {
        const lessons = await lessonService.findLessonsByVoucherId(req.params.voucherId);

        res.status(200)
            .json(lessons);
    } catch (err) {
        console.error(`Error buscando lessons para customer ${req.params.customerId} y voucher ${req.params.voucherId} `, err.message);
        next(err);
    }

});

router.post("/customer/:customerId/voucher/:voucherId/lesson", async (req, res, next) => {
    console.log(`${req.params.customerId} ${req.params.voucherId} ${req.body}`);
    try {
        const registeredLesson = await lessonService.registerLesson(req.body, req.params.voucherId);

        res.status(200)
            .json(registeredLesson);
    } catch (err) {
        console.error(`Error creando lesson para customer ${req.params.customerId} y voucher ${req.params.voucherId} `, err.message);
        next(err);
    }

});

router.put("/customer/:customerId/voucher/:voucherId/lesson/:lessonId", async (req, res, next) => {
    console.log(`${req.params.customerId} ${req.params.voucherId} ${req.params.lessonId} ${req.body}`);
    try {
        const updatedLesson = await lessonService.updateLesson(req.params.lessonId, req.body);

        res.status(200)
            .json(updatedLesson);
    } catch (err) {
        console.error(`Error actualizando lesson ${req.params.lessonId} `, err.message);
        next(err);
    }
});

router.delete("/customer/:customerId/voucher/:voucherId/lesson/:lessonId", async (req, res, next) => {
    console.log(`${req.params.customerId} ${req.params.voucherID} ${req.params.lessonId}`);
    try {
        await lessonService.deleteLesson(req.params.lessonId);

        res.sendStatus(204);
    } catch (err) {
        console.error(`Error borrando lesson ${req.params.lessonId} `, err.message);
        next(err);
    }
});

module.exports = router;
