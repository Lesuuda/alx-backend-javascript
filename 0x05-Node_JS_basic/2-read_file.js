const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf8');
    const lines = data.trim().split('\n');

    if (lines.length < 2) {
      throw new Error('Cannot load the database');
    }

    const fields = {};
    let totalStudents = 0;

    for (let i = 1; i < lines.length; i++) { // Skip the header line
      const [firstname, , , field] = lines[i].split(',');

      if (firstname && field) { // Ensure the line is valid (not empty)
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
  } catch (error) {
    console.error('Cannot load the database');
  }
}

module.exports = countStudents;
