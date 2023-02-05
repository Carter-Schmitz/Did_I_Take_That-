const router = require('express').Router();
const { User, Medication } = require('../models');
const withAuth = require('../utils/auth');

// Prevent non logged in users from viewing the homepage
router.get('/', withAuth, async (req, res) => {
  try {
    const userData = await User.findByPk(req.session.user_id, {
        include: {model: Medication,
        attributes: ["id",'name', 'dosage','frequency', 'taken', 'quantity']}
    });
    console.log("user information")
    console.log(userData);
    const user = userData.get({plain: true});
    console.log(user);
    const medications = user.Medications;
    console.log('medications: ')
    console.log(medications);
    res.render('homepage',  {
      medications,
      // Pass the logged in flag to the template
      logged_in: req.session.logged_in,
      layout: "index",
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  // If a session exists, redirect the request to the homepage
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('login', { layout: "index" });
});

router.get('/signup', (req, res) => {
  // If a session exists, redirect the request to the homepage
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('signup');
});

module.exports = router;