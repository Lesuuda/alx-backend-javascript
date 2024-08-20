/* eslint-disable */

const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();

// Function to count students asynchronously
function countStudents(databasePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(databasePath, 'utf8', (err, data) => {
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

// Route for the root URL "/"
app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

// Route for "/students"
app.get('/students', (req, res) => {
  const databasePath = process.argv[2]; // Get the database file path from command-line arguments

  countStudents(databasePath)
    .then((data) => {
      res.send(`This is the list of our students\n${data}`);
    })
    .catch((err) => {
      res.status(500).send(err.message);
    });
});

// Listen on port 1245
const PORT = 1245;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

module.exports = app;
