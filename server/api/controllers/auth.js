const bcrypt = require('bcryptjs');
const { addUser } = require('../models/usersModel');
const generateToken = require('../helpers/generateToken');

async function register(req, res) {
  const user = req.body;
  try {
    const newUser = await addUser(user);
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ error: 'Error Creating User' });
  }
}

function login(req, res) {
  const {
    body: { password },
    user,
  } = req;

  if (bcrypt.compareSync(password, user.password)) {
    const token = generateToken(user);

    res.status(200).json({
      message: `Welcome ${user.username}!`,
      token,
    });
  } else {
    res.status(401).json({ message: 'You shall not pass! 😈' });
  }
}

module.exports = { register, login };
