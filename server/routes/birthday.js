const express = require('express');
const birthdayController = require('../controllers/birthdayController');

const router = express.Router();

router.get('/', birthdayController.getBirthdays);
router.get('/:id', birthdayController.getBirthdaysById);
router.post('/', birthdayController.createNewBirthday);
router.put('/:id', birthdayController.editBirthdayById);
router.delete('/:id', birthdayController.deleteBirthdayId);
// const {
//   getBirthdays,
//   createNewBirthday,
//   // deleteBirthdayId,
//   // editBirthdayById,
//   getBirthdaysById
// } = require('../controllers/birthdayController');

// // Add our routes here
// router.route('/').get(getBirthdays);
// router.route('/').post(createNewBirthday);
// router.route('/:id').get(getBirthdaysById);
// router.route('/:id').put(editBirthdayById);
// router.route('/:id').delete(deleteBirthdayId);

module.exports = router;
