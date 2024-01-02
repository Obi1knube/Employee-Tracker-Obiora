// const express = require("express");

const mysql = require("mysql2");

// const PORT = process.env.PORT || 3001;
// const app = express();

// // Express middleware
// app.use(express.urlencoded({ extended: false }));
// app.use(express.json());

// Connect to database
const db = mysql.createConnection({
  host: "localhost",
  // MySQL username,
  user: "root",
  // MySQL password
  password: "",
  database: "employee_Tracker_db",
});

db.connect((err) => {
  if (err) throw err;
  console.log(`Connected to the employee_tracker_db database.`);
});

module.exports = db;
// // Default response for any other request (Not Found)
// app.use((req, res) => {
//   res.status(404).end();
// });

// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });
