const express = require("express");
const app = express();
const port = 3001;
const customerRouter = require('./routes/customer');
const voucherRouter = require('./routes/voucher');
const lessonRouter = require('./routes/lesson');
app.use(express.json());
app.use(customerRouter);
app.use(voucherRouter);
app.use(lessonRouter);
app.get("/", (req, res) => {
    res.status(200)
        .json({ message: "ok" });
});
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
