const { getAllUsers } = require('../models/usersModel');

async function getUsers(req, res) {
  const { department } = req.decoded;
  try {
    const users = await getAllUsers(department);
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: 'Error getting Users' });
  }
}

module.exports = { getUsers };
