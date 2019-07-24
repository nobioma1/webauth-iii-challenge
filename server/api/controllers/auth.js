const { addUser } = require('../models/usersModel');

async function register(req, res) {
  const user = req.body;
  console.log(user)
  try {
    const newUser = await addUser(user);
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ error: 'Error Creating User' });
  }
}

module.exports = { register };
