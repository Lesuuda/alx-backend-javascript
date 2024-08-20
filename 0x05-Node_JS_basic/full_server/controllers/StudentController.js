/* eslint-disable */
const readDatabase = require('../utils');

class StudentsController {
  static async getAllStudents(req, res) {
    const databaseFilePath = process.argv[2];
    try {
      const studentsByField = await readDatabase(databaseFilePath);

      let responseText = 'This is the list of our students\n';

      const fields = Object.keys(studentsByField).sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));
      for (const field of fields) {
        responseText += `Number of students in ${field}: ${studentsByField[field].length}. List: ${studentsByField[field].join(', ')}\n`;
      }

      res.status(200).send(responseText.trim());
    } catch (err) {
      res.status(500).send(err.message);
    }
  }

  static async getAllStudentsByMajor(req, res) {
    const major = req.params.major;
    const databaseFilePath = process.argv[2];

    if (major !== 'CS' && major !== 'SWE') {
      res.status(500).send('Major parameter must be CS or SWE');
      return;
    }

    try {
      const studentsByField = await readDatabase(databaseFilePath);
      const students = studentsByField[major];

      if (students) {
        res.status(200).send(`List: ${students.join(', ')}`);
      } else {
        res.status(200).send('List: ');
      }
    } catch (err) {
      res.status(500).send('Cannot load the database');
    }
  }
}

module.exports = StudentsController;
