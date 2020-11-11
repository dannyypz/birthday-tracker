if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}
require('./server/config/db/index');
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const birthdayRouter = require('./server/routes/birthday');
const app = express();

if (process.env.NODE_ENV === 'production') {
  // Serve any static files
  app.use(express.static(path.join(__dirname, 'client/build')));
  // Handle React routing, return all requests to React app
  app.get('*', (request, response) => {
    response.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.json({ message: 'Hello' });
});

// app.use(express.json());
app.use('/birthdays', birthdayRouter);
const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`API listening on port ${port}...`);
});
