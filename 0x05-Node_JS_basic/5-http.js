/* eslint-disable */

const http = require('http');
const fs = require('fs');
const url = require('url');

// Function to count students asynchronously
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

// Create an HTTP server
const app = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);

  if (parsedUrl.pathname === '/') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello Holberton School!');
  } else if (parsedUrl.pathname === '/students') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.write('This is the list of our students\n');

    const databasePath = process.argv[2]; // Get the database file path from command-line arguments

    countStudents(databasePath)
      .then((data) => {
        res.write(`${data}\n`);
        res.end();
      })
      .catch((err) => {
        res.end(err.message);
      });
  } else {
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Not Found');
  }
});

const PORT = 1245;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

module.exports = app;
