require("dotenv").config();
const express = require('express');
const http = require('http');

const app = express();
const server = http.createServer(app);

app.set('view engine', 'ejs'); 

const paymentRoute = require('./routes/paymentRoute');

app.use('/', paymentRoute);

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
