const router = require('express').Router();
const User = require('../models/User');
const Wallet = require('../models/Wallet');
const Services = require('../models/Services');
const Address = require('../models/Address');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  res.render('homepage');
});

// router.get('/login', (req, res) => {
//   res.render('login');
// });

// router.get('/signup', (req, res) => {
//   res.render('signup');
// });

router.get('/login', (req, res) => {
  res.render('profile');
});

router.get('/signup', (req, res) => {
  res.render('profile');
});

router.get('/profile', withAuth, async (req, res) => {
  try {
    const userData = await User.findByPk(req.session.user_id, {
      include: [{
        model: Wallet,
        attributes: ['balance'],
      },
      {
        model: Services
      },
      {
        model: Address
      }
      ]
    });
    if (!userData) {
      res.status(404).json({ message: 'No user with this id!' });
      return;
    }
    const user = userData.get({ plain: true });

    res.render('profile', {
      ...user,
      logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
  };
});

router.get('/addservice', withAuth, async (req, res) => {
  res.render('addservice');
});

router.get('/wallet', withAuth, async (req, res) => {
  res.json("Inside wallet");
});

router.get('/upload', withAuth, async (req, res) => {
  res.render('upload');
});

module.exports = router;