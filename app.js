const express = require('express');
const bodyParser = require('body-parser');
const logger = require('morgan');

const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(logger('dev'));

app.get('/', (req, res, next) => {
  return res.json({
    status: '000',
    message: 'Success'
  });
});

app.listen(3000, () => {
  console.log('The application is initialized on the port %s', 3000);
});
