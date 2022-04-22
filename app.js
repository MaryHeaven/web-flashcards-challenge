// npm 
const config = require('./config');
const express = require('express');
const registrationReq = require('./routes/registr')
const avtorReq = require('./routes/avtor')

// routers
const mainRouters = require('./routes/main.route');
const qestionRouter = require('./routes/qestion.route')

// app && PORT
const app = express();
const PORT = process.env.PORT ?? 3000;

// config
config(app);

// routes
app.use('/qestion', qestionRouter);
app.use('/', mainRouters);
app.use('/registration', registrationReq);
app.use('/login', avtorReq);



// listen
app.listen(PORT, () => { console.log(`******* Server started at port: ${PORT} *******`); });
