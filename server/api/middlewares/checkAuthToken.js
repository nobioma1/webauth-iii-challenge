const { verifyToken } = require('../helpers/authToken');

module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization;
    const decoded = verifyToken(token);
    if (decoded) {
      req.decoded = decoded;
      return next();
    }
    throw new Error();
  } catch (error) {
    return res.status(401).json({ message: 'You shall not pass 😈' });
  }
};
