const { getAllUsers } = require('../models/usersModel');

async function getUsers(req, res) {
  try {
    const users = await getAllUsers();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: 'Error getting Users' });
  }
}

module.exports = { getUsers };
