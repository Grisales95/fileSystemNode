const fs = require('fs/promises'),
  p = 'users.json',
  en = 'utf8',
  a = async (s) => {
    try {
      let e = await fs.readFile(p, en);
      (e = JSON.parse(e)).push(s), await fs.writeFile(p, JSON.stringify(e));
    } catch (s) {
      throw s;
    }
  },
  b = async () => {
    await fs.writeFile(p, JSON.stringify([]));
  };
module.exports = { a: a, b: b };
