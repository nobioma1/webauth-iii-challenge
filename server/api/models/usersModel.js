const db = require('../../data/dbConfig');
const generatePassword = require('../helpers/generatePassword');

function getUserById(id) {
  return db('users')
    .select('id', 'username', 'department')
    .where({ id })
    .first();
}

function getUserByUsername(username) {
  return db('users')
    .where({ username })
    .first();
}

function addUser({ username, password, department }) {
  const user = {
    username,
    department,
    password: generatePassword(password),
  };
  return db('users')
    .insert(user)
    .then(([id]) => getUserById(id));
}

function getAllUsers(department) {
  return db('users')
    .select('id', 'username', 'department')
    .where({ department });
}

module.exports = { addUser, getUserByUsername, getAllUsers };
