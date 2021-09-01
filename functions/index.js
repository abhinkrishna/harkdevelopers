const functions = require('firebase-functions');
const express = require('express');
const bodyParser = require('body-parser');
const project_report = require('./projectReport/routes.js');

const app = express();

// Middlewares
app.use(bodyParser());
app.use('/api/project_report', project_report);

app.listen(4000, () => {
  console.log('Server is up and running...');
});
