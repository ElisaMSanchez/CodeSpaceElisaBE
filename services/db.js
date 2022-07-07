const mysql = require('mysql2/promise');
const config = require('../config');

async function query(sql, params) {
    const promisePool = await mysql.createPool(config.db);
    const [results,] = await promisePool.query(sql, params);

    return results;
}

module.exports = {
    query
};
