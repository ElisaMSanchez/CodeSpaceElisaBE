const express = require("express");
const app = express();
const cors = require('cors');
const port = 3001;
const customerRouter = require('./routes/customer');
const voucherRouter = require('./routes/voucher');
const lessonRouter = require('./routes/lesson');
const loginRouter = require('./routes/login');
const corsOptions = {
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200
};
app.use(cors(corsOptions));
app.use(express.json());
app.use(customerRouter);
app.use(voucherRouter);
app.use(lessonRouter);
app.use(loginRouter);
app.get("/", (req, res) => {
    res.status(200)
        .json({message: "ok"});
});
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
