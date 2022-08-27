const express = require('express');
const morgan = require('morgan');
const fs = require('fs');
const cors = require('cors');
const tourRouter = require('./routes/tourRoutes');
const userRouter = require('./routes/userRoutes');

const app = express();
app.use(cors());

app.use(
  morgan('tiny', {
    stream: fs.createWriteStream('./logs/access.log', { flags: 'a' }),
  })
);

app.use(express.json());
app.use(express.static(`${__dirname}/public`));

app.use('/api/v1/tours', tourRouter);
app.use('/api/v1/users', userRouter);

module.exports = app;
