const jwt = require('jsonwebtoken');

const secret = process.env.SECRET
  || 'Hey, You are not supposed to see this. Im telling yo mama';

module.exports = {
  generateToken: ({ id, username, department }) => {
    const payload = { id, username, department };
    const options = { expiresIn: '1d' };

    return jwt.sign(payload, secret, options);
  },
  verifyToken: token => jwt.verify(token, secret),
};
