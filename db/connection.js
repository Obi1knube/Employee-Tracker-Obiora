const mysql = require("mysql2");

// Connect to database
const db = mysql.createConnection({
  host: "localhost",
  // MySQL username,
  user: "root",
  // MySQL password
  password: "Jason2022$",
  database: "employee_Tracker_db",
});

db.connect((err) => {
  if (err) throw err;
  console.log(`Connected to the employee_tracker_db database.`);
});

module.exports = db;
