const express = require("express");
const router = express.Router();
const customerService = require("../services/customer");

router.get('/customer', async (req, res, next) => {
    console.log(`Buscando customers con nombre: ${req.query.search}`);

    const customers = await customerService.findAllCustomersWithFilter(req.query.search);

    res.status(200)
        .json(customers);
});

router.post("/customer", async (req, res, next) => {
    console.log(req.body);

    const customer = await customerService.saveCustomer(req.body);

    res.status(200)
        .json(customer);
});

module.exports = router;
