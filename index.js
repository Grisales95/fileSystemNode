const fs = require('fs/promises');

const path = require('path');
const pathUsers = path.resolve('./users.json');

const getUsers = async () => {
  try {
    const data = await fs.readFile(pathUsers, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    console.log(error);
  }
};

const addUser = async (userObj) => {
  try {
    let data = await fs.readFile(pathUsers, 'utf8');
    (data = JSON.parse(data)).push(userObj),
      await fs.writeFile(pathUsers, JSON.stringify(data));
    return userObj;
  } catch (err) {
    console.log(err);
  }
};

const clearUsers = async () => {
  await fs.writeFile(pathUsers, JSON.stringify([]));
  return true;
};

module.exports = {
  getUsers,
  addUser,
  clearUsers,
};
