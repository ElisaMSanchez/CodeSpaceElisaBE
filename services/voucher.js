const db = require('./db');
const crypto = require("crypto");

async function findOpenVoucher(customerId) {
    const rows = await db.query("SELECT" + customerId);

    console.log(rows);

    return rows[0] || {};
}

async function openVoucher(customerId) {

    const voucher = {
        customerId: customerId,
        id: crypto.randomUUID()
    };

    await db.query("INSERT" + voucher);

    console.log(voucher);

    return voucher;
}

async function closeVoucher(voucherId) {

    await db.query("UPDATE" + voucherId);

    console.log(voucherId);
}

module.exports = {
    findOpenVoucher,
    openVoucher,
    closeVoucher
};