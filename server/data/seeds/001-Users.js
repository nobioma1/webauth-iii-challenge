const generatePassword = require('../../api/helpers/generatePassword');

exports.seed = knex => knex('users')
  .del()
  .then(() => knex('users').insert([
    {
      username: 'test1',
      password: generatePassword('test1'),
      department: 'Marketing',
    },
    {
      username: 'test2',
      password: generatePassword('test2'),
      department: 'Security',
    },
    {
      username: 'test3',
      password: generatePassword('test3'),
      department: 'Marketing',
    },
    {
      username: 'test4',
      password: generatePassword('test4'),
      department: 'Information Technology',
    },
    {
      username: 'test5',
      password: generatePassword('test5'),
      department: 'sales',
    },
    {
      username: 'test6',
      password: generatePassword('test6'),
      department: 'Sales',
    },
    {
      username: 'test7',
      password: generatePassword('test7'),
      department: 'Sales',
    },
  ]));
