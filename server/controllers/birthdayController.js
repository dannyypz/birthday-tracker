const Birthday = require('../model/birthday.model');

// const getBirthdays = (req, res) => {
//   Birthday.find()
//     .then((birthday) => res.json(birthday))
//     .catch((err) => res.status(500).json('Error: ' + err));
// };

const getBirthdays = async (req, res, next) => {
  let birthdays;
  try {
    birthdays = await Birthday.find();
  } catch (err) {
    console.log(err);
  }
  res.json(birthdays);
};

const createNewBirthday = async (req, res) => {
  console.log(req.body);
  const birthday = new Birthday(req.body);
  try {
    await birthday.save();
  } catch (err) {
    res.status(500).json(err);
  }
  res.status(201).json(birthday);
};

const getBirthdaysById = async (req, res) => {
  try {
    const birthday = await Birthday.findById(req.params.id);
    res.json(birthday);
  } catch (err) {
    console.log(err.toString());
  }
};

const editBirthdayById = async (req, res) => {
  try {
    const birthday = await Birthday.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });
    await birthday.save();
    res.json(birthday);
  } catch (err) {
    console.log('Error: ' + err);
  }
};
const deleteBirthdayId = async (req, res) => {
  try {
    await Birthday.findByIdAndDelete(req.params.id);
    res.json('birthday delete');
  } catch (err) {
    console.log(er.toString());
  }
};
module.exports = {
  getBirthdays,
  createNewBirthday,
  editBirthdayById,
  deleteBirthdayId,
  getBirthdaysById
};
