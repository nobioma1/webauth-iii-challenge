const { getUserByUsername } = require('../models/usersModel');

module.exports = async (req, res, next) => {
  try {
    if ('username' && 'password' in req.body) {
      const user = await getUserByUsername(req.body.username);
      if (!user) {
        return res
          .status(404)
          .json({ message: 'User with password does not exist' });
      }
      req.user = user;
      return next();
    }
    return res
      .status(400)
      .json({ message: 'Username and Password is required' });
  } catch (error) {
    return res.status(500).json({ error: 'Server Error' });
  }
};
