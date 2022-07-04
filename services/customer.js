const db = require('./db');
const crypto = require("crypto");

async function findAllCustomersWithFilter(search) {
    const rows = await db.query(`SELECT *
                                 FROM tatydog.customer c
                                 WHERE UPPER(c.name) LIKE '%${search}%'
                                    OR UPPER(c.first_surname) LIKE '%${search}%'
                                    OR UPPER(c.last_surname) LIKE '%${search}%'`);

    console.log(rows);

    return rows.map(row => {
        return {
            id: row.id,
            comments: row.comments,
            email: row.email,
            firstSurname: row.first_surname,
            lastSurname: row.last_surname,
            name: row.name,
            phone: row.phone
        };
    });
}

async function saveCustomer(createCustomer) {
    const customer = {
        ...createCustomer,
        id: crypto.randomUUID(),
    };

    db.query(`INSERT INTO tatydog.customer(id, comments, email, first_surname, last_surname, \`name\`, phone)
              VALUES ('${customer.id}', '${customer.comments}', '${customer.email}', '${customer.firstSurname}',
                      '${customer.lastSurname}', '${customer.name}', '${customer.phone}')`);

    return customer;
}

module.exports = {
    findAllCustomersWithFilter,
    saveCustomer
};
