const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }

      const lines = data.trim().split('\n');
      
      if (lines.length < 2) {
        reject(new Error('Cannot load the database'));
        return;
      }

      const fields = {};
      let totalStudents = 0;

      for (let i = 1; i < lines.length; i++) {  // Skip the header line
        const [firstname, , , field] = lines[i].split(',');
        
        if (firstname && field) {  // Ensure the line is valid (not empty)
          totalStudents += 1;
          if (!fields[field]) {
            fields[field] = [];
          }
          fields[field].push(firstname);
        }
      }

      let result = `Number of students: ${totalStudents}\n`;

      for (const field in fields) {
        result += `Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}\n`;
      }

      resolve(result.trim());  // Resolve with the formatted string
    });
  });
}

module.exports = countStudents;
