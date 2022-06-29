const express = require("express");
const router = express.Router();

router.get('/customer', async (req, res, next) => {
    console.log(`Buscando customers con nombre: ${req.query.search}`);
    res.status(200)
        .json([{"name": "paco"}, {"name": "jesus"}]);
});

router.post("/customer", async (req, res, next) => {
    console.log(req.body);
    res.status(200)
        .json({name: req.body.name, firstName: req.body.firstName});
});

module.exports = router;