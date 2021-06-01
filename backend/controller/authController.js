const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// scaffolding
const controller = {};

controller.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({
        email: 'Invalid credentials',
        password: 'Invalid credentials',
      });
    }

    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      return res.status(400).json({
        email: 'Invalid credentials',
        password: 'Invalid credentials',
      });
    }

    const token = jwt.sign(
      {
        _id: user._id,
        email: user.email,
        username: user.username,
        iat: new Date().getTime(),
        exp: Date.now() + 1000 * 60 * 60 * 2,
      },
      'SECRET'
    );

    return res.status(200).json({
      message: 'Login was Successful',
      token: `Bearer ${token}`,
    });
  } catch (e) {
    console.log(e); // todo remove later
    res.status(500).json({
      error: 'Internal Server error',
    });
  }
};

controller.registration = async (req, res) => {
  const { email, username, password } = req.body;

  const hashPassword = await bcrypt.hash(password, 11);

  try {
    const userInstance = new User({
      email,
      username,
      password: hashPassword,
    });

    await userInstance.save();

    res.status(201).json({
      message: 'Account created successfully!',
    });
  } catch (e) {
    console.log(e); // todo remove later
    res.status(500).json({
      error: 'Internal Server error',
    });
  }
};

module.exports = controller;
