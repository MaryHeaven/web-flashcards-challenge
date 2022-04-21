// npm 
const config = require('./config');
const express = require('express');

// routers
// const mainRouters = require('./routes/main.route');
// const adminRouter = require('./routes/admin.route')

// app && PORT
const app = express();
const PORT = process.env.PORT ?? 3000;

// config
config(app);

// routes
// app.use('/', mainRouters);
// app.use('/admin', adminRouter);

// listen
app.listen(PORT, () => { console.log(`******* Server started at port: ${PORT} *******`); });
