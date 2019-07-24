const generatePassword = require('../../api/helpers/generatePassword');

exports.seed = knex => knex('users')
  .del()
  .then(() => knex('users').insert([
    {
      username: 'test1',
      password: generatePassword('test1'),
      department: 'Chemistry',
    },
    {
      username: 'test2',
      password: generatePassword('test2'),
      department: 'Security',
    },
    {
      username: 'test3',
      password: generatePassword('test3'),
      department: 'Information Technology',
    },
  ]));
