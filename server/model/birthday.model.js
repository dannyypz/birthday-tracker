const mongoose = require('mongoose');

// build a schema
const Schema = mongoose.Schema;
const birthdaySchema = new Schema(
  {
    username: { type: String, required: true },
    cohort_number: { type: String, required: true },
    month: { type: String, required: true },
    date: { type: String, required: true }
  },
  { timestamps: true }
);

// build the model
const Birthday = mongoose.model('Birthday', birthdaySchema);

// export the model somewhere
module.exports = Birthday;
