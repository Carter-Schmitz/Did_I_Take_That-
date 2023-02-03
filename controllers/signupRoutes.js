const { User } = require('../models');

const router = require('express').Router();



router.get('/', (req, res) => {
    res.render('signup');
  });

router.post('/', async (req, res) => {
  try {
    const signupData = await User.create({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    });
    res.status(200).json(signupData);
  } catch (err) {
    res.status(400).json(err);
  }
})

  module.exports = router;