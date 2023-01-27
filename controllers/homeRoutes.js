const router = require('express').Router();
const { User, Medication } = require('../models');
const withAuth = require('../utils/auth');

// Prevent non logged in users from viewing the homepage
router.get('/', withAuth, async (req, res) => {
  try {
    const userData = await User.findByPk(req.params.id, {
        include: {model: Medication,
        attributes: ['name', 'dosage', 'taken', 'quantity']}
    });

    const user = userData.map((medication) => medication.get({ plain: true }));

    res.render('homepage', {
      user,
      // Pass the logged in flag to the template
      logged_in: req.session.logged_in,
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

  res.render('login');
});

module.exports = router;