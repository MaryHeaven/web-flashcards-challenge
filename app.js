/* eslint-disable no-unused-vars */
// npm
const express = require('express');
const config = require('./config');
const registrationReq = require('./routes/registr');
const avtorReq = require('./routes/avtor');

// routers
const mainRouters = require('./routes/main.route');
const qestionRouter = require('./routes/qestion.route');
const staticRouter = require('./routes/static.route')

// app && PORT
const app = express();
const PORT = process.env.PORT ?? 3000;

// config
config(app);

// routes
app.use('/question', qestionRouter);
app.use('/', registrationReq);
app.use('/main', mainRouters);
app.use('/static', staticRouter);

// listen
app.listen(PORT, () => { console.log(`******* Server started at port: ${PORT} *******`); });
