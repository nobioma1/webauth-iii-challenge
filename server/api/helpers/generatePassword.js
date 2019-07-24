const bcrypt = require('bcryptjs');

const generatePassword = password => bcrypt.hashSync(password, 12);

module.exports = generatePassword;
