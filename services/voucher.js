const db = require('./db');
const crypto = require("crypto");
const config = require("../config");

const VoucherStatuses = {
    open: 'OPEN',
    closed: 'CLOSED'
};

async function findOpenVoucher(customerId) {
    const rows = await db.query(`SELECT *
                                 FROM tatydog.voucher
                                 WHERE customer_id = '${customerId}'
                                   AND status = '${VoucherStatuses.open}'`);

    console.log(rows);

    if (rows[0]) {
        return {
            id: rows[0].id,
            maxLessons: rows[0].max_lessons,
            status: rows[0].status,
            customerId: rows[0].customer_id
        }
    } else {    
        return null;
    }
}

async function openVoucher(customerId) {

    const voucher = {
        customerId,
        id: crypto.randomUUID(),
        maxLessons: config.maxLessonsAllowed,
        status: VoucherStatuses.open
    };

    await db.query(`INSERT INTO tatydog.voucher(id, max_lessons, status, customer_id)
                    VALUES ('${voucher.id}', ${voucher.maxLessons}, '${voucher.status}', '${voucher.customerId}')`);

    console.log(voucher);

    return voucher;
}

async function closeVoucher(voucherId) {

    await db.query(`UPDATE tatydog.voucher
                    SET status = '${VoucherStatuses.closed}'
                    WHERE id = '${voucherId}'`);

    console.log(voucherId);
}

module.exports = {
    findOpenVoucher,
    openVoucher,
    closeVoucher
};
