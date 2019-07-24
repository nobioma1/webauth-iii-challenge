const jwt = require('jsonwebtoken');

const secret = process.env.SECRET
  || 'Hey, You are not supposed to see this. Im telling yo mama';

function generateToken({ id, username }) {
  const payload = {
    id,
    username,
  };

  const options = {
    expiresIn: '1d',
  };

  return jwt.sign(payload, secret, options);
}

module.exports = generateToken;
