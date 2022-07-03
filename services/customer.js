const db = require('./db');
const crypto = require("crypto");

async function findAllCustomersWithFilter(search) {
    const rows = await db.query("SELECT");

    console.log(rows);

    return rows;
}

async function saveCustomer(createCustomer) {
    const customer = {
        ...createCustomer,
        id: crypto.randomUUID(),
    };

    db.query("INSERT" + customer);

    return customer;
}

module.exports = {
    findAllCustomersWithFilter,
    saveCustomer
};
