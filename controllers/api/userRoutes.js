const router = require('express').Router();
const User = require('../../models/User');
const Security = require('../../models/Security');
const Address = require('../../models/Address');
const bcrypt = require('bcrypt');
// const withAuth = require('../utils/auth');

router.post('/signup', async (req, res) => {
  try {
    const userData = await User.create({
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      email: req.body.email,
      password: req.body.password,
      phone_number: req.body.phone_number,
      profile_picture: req.body.profile_picture,
    });

    await Security.create({
      question1: req.body.question1,
      answer1: req.body.answer1,
      question2: req.body.question2,
      answer2: req.body.answer2,
      question3: req.body.question3,
      answer3: req.body.answer3,
      user_id: userData.id
    });

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;
    });

    const user = userData.get({ plain: true });

    res.render('profile', {
      ...user,
      logged_in: true
    });
    
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.put('/:id', async (req, res) => {
  try {
      const user = await User.update(
          {
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            email: req.body.email,
            password: req.body.password,
            phone_number: req.body.phone_number,
          },
          {
              where: {
                  id: req.params.id,
            },
            individualHooks: true
          }
      );

      await Address.create({
        address: req.body.address,
        city: req.body.city,
        state: req.body.state,
        zip: req.body.zip,
        country: req.body.country,
        user_id: req.session.user_id,
      });

      res.status(200).json(user);
  } catch (err) {
      res.status(500).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  try {
      const userData = await User.destroy({
          where: {
              id: req.params.id
          }
      });

      if (!userData) {
          res.status(404).json({ message: 'No user found with this id!' });
          return;
      }

      res.status(200).json(userData);
  } catch (err) {
      res.status(500).json(err);
  }
});

router.post('/login', async (req, res) => {
  try {
    const userData = await User.findOne({ where: { email: req.body.email } });
    if (!userData) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    const validPassword = await userData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;

      res.status(200).json({ user: userData, message: 'You are now logged in!' });
    });

  } catch (err) {
    res.status(400).json(err);
  }
});

router.post('/logout', (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;


