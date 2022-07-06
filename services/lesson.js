const db = require('./db');
const crypto = require("crypto");

async function findLessonsByVoucherId(voucherId) {
    const lessons = await db.query(`SELECT *
                                    FROM tatydog.lesson
                                    WHERE voucher_id = '${voucherId}'`);

    console.log(lessons);

    return lessons.map(lesson => {
        return {
            id: lesson.id,
            createdAt: lesson.created_at.toISOString().substring(0, 10),
            externalComment: lesson.external_comment,
            internalComment: lesson.internal_comment,
            voucherId: lesson.voucher_id

        }
    })
}


async function registerLesson(createLesson, voucherId) {

    console.log(createLesson.createdAt);

    const lesson = {
        ...createLesson,
        voucherId,
        id: crypto.randomUUID()
    }

    await db.query(`INSERT INTO tatydog.lesson(id, created_at, external_comment, internal_comment, voucher_id)
                    VALUES ('${lesson.id}', '${lesson.createdAt}', '${lesson.externalComment}',
                            '${lesson.internalComment}', '${lesson.voucherId}')`);

    return lesson;
}

async function updateLesson(lessonId, updateLesson) {

    console.log(updateLesson.createdAt);

    const lessons = await db.query(`SELECT *
                                    FROM tatydog.lesson
                                    WHERE id = '${lessonId}'`);

    if (lessons) {
        const updatedLesson = {
            ...lessons[0],
            ...updateLesson
        }

        await db.query(`UPDATE tatydog.lesson
                        SET external_comment = '${updatedLesson.externalComment}',
                            internal_comment = '${updatedLesson.internalComment}',
                            created_at       = '${updatedLesson.createdAt}'
                        WHERE id = '${lessonId}'`);

        return updatedLesson;

    } else {
        return null;
    }
}

async function deleteLesson(lessonId) {
    await db.query(`DELETE
                    FROM tatydog.lesson
                    WHERE id = '${lessonId}'`);
}

module.exports = {
    findLessonsByVoucherId,
    registerLesson,
    updateLesson,
    deleteLesson
};
