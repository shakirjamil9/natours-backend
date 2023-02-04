const express = require('express');
const morgan = require('morgan');
const fs = require('fs');
const cors = require('cors');
const helmet = require('helmet');
const mongoSanitize = require('express-mongo-sanitize');
const xss = require('xss-clean');
const hpp = require('hpp');
const tourRouter = require('./routes/tourRoutes');
const userRouter = require('./routes/userRoutes');
const AppError = require('./utils/appError');
const globalErrHandler = require('./controllers/errController');

const app = express();

app.use(helmet());

app.use(cors());

app.use(
  morgan('tiny', {
    stream: fs.createWriteStream('./logs/access.log', { flags: 'a' }),
  })
);

app.use(express.json({ limit: '10kb' }));

app.use(mongoSanitize());

app.use(xss());

app.use(
  hpp({
    whitelist: ['duration'],
  })
);

app.use(express.static(`${__dirname}/public`));

// app.use((req, res, next) => {
//   console.log(req.headers);
//   next();
// });

app.use('/api/v1/tours', tourRouter);
app.use('/api/v1/users', userRouter);

app.all('*', (req, res, next) =>
  // const err = new Error(`Can't find ${req.originalUrl} on the server!`);
  // err.status = 'fail';
  // err.statusCode = 404;
  next(new AppError(`Can't find ${req.originalUrl} on the server!`, 404))
);

app.use(globalErrHandler);

module.exports = app;
