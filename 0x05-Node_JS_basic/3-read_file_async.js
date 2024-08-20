const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf-8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the databse'));
        return;
      }
      const lines = data.trim().split('\n');
      if (lines.length < 2) {
        reject(new Error('Cannot load the database'));
        return;
      }
      const fields = {};
      let totalStudents = 0;
      for (let i = 1; i < lines.length; i++) {
        const [firstname, , , field] = lines[i].split(',');
        if (firstname && field) {
          totalStudents += 1;
          if (!fields[field]) {
            fields[field] = [];
          }
          fields[field].push(firstname);
        }
      }
      console.log(`Number of students: ${totalStudents}`);
      for (const field in fields) {
        console.log(`Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}`);
      }
      resolve();
    });
  });
}
module.exports = countStudents;
