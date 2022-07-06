const express = require("express");
const router = express.Router();
const customerService = require("../services/customer");

router.get('/customer', async (req, res, next) => {
    console.log(`Buscando customers con nombre: ${req.query.search}`);

    try {
        const customers = await customerService.findAllCustomersWithFilter(req.query.search || "");

        res.status(200)
            .json(customers);
    } catch (err) {
        console.error(`Error buscando customers `, err.message);
        next(err);
    }
});

router.post("/customer", async (req, res, next) => {
    console.log(req.body);

    try {
        const customer = await customerService.saveCustomer(req.body);

        res.status(200)
            .json(customer);
    } catch (err) {
        console.error(`Error creando customer `, err.message);
        next(err);
    }
});

module.exports = router;
