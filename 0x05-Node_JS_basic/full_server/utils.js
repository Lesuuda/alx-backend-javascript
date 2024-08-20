// full_server/utils.js
const fs = require('fs').promises;

async function readDatabase(filePath) {
  try {
    const data = await fs.readFile(filePath, 'utf8');
    const lines = data.trim().split('\n').slice(1); // Remove the header

    const studentsByField = {};

    for (const line of lines) {
      const [firstname, , , field] = line.split(',');
      if (firstname && field) {
        if (!studentsByField[field]) {
          studentsByField[field] = [];
        }
        studentsByField[field].push(firstname);
      }
    }

    return studentsByField;
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

module.exports = readDatabase;
