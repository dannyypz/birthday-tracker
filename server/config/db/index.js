const mongoose = require('mongoose');

require('dotenv').config();

const URI = process.env.ATLAS_URI;

// tells your Mongoose library where your DB lives, and avoids deprecation warning errors
mongoose.connect(URI, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  useFindAndModify: false
});

const connection = mongoose.connection;

connection.once('open', () => {
  console.log('MongoDB connection established!');
});
