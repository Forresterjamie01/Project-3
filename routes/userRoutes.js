const router = require('express').Router();
const { User } = require('../../models');

// CREATE a User 
// router.post('/', async (req, res) => {
//   try {
//     const userData = await User.create(req.body);
//     res.status(200).json(userData);
//   } catch (err) {
//     res.status(400).json(err);
//   }
// });
