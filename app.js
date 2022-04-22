// npm
const express = require('express');
const config = require('./config');
const registrationReq = require('./routes/registr');
const avtorReq = require('./routes/avtor');

// routers
const mainRouters = require('./routes/main.route');
const qestionRouter = require('./routes/qestion.route');

// app && PORT
const app = express();
const PORT = process.env.PORT ?? 3000;

// config
config(app);

// routes
app.use('/login', avtorReq);
app.use('/qestion', qestionRouter);
app.use('/', registrationReq);
app.use('/main', mainRouters);

// listen
app.listen(PORT, () => { console.log(`******* Server started at port: ${PORT} *******`); });
