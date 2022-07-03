const db = require('./db');
const crypto = require("crypto");

async function findLessonsByVoucherId(voucherId) {
    const lessons = await db.query("SELECT");

    console.log(lessons);

    return lessons;

}


async function registerLesson(createLesson, voucherId) {

    const lesson = {
        ...createLesson,
        voucherID: voucherId,
        id: crypto.randomUUID(),

    }

    await db.query("INSERT" + lesson);

    return lesson;
}

async function updateLesson(lessonId, updateLesson) {

    const lessons = await db.query("SELECT" + lessonId);

    if (lessons) {
        const updatedLesson = {
            ...lessons[0],
            ...updateLesson,
        }

        await db.query("UPDATE" + updatedLesson);

        return updatedLesson;

    } else {
        return {};
    }
}

async function deleteLesson(lessonId) {
    await db.query("DELETE" + lessonId);

}

module.exports = {
    findLessonsByVoucherId,
    registerLesson,
    updateLesson,
    deleteLesson

};
