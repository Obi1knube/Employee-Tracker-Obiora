const express = require("express");
const inquirer = require("inquirer");
const mysql = require("mysql2");

const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

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

// Function to view all departments
function viewAllDepartments() {
  // Implement the SQL query to retrieve department names and ids
  db.query("SELECT * FROM department", (err, results) => {
    if (err) throw err;
    // Display the results in a formatted table
    console.table(results);
    // Call the main menu function again to display the menu options
    mainMenu();
  });
}

// Function to view all roles
function viewAllRoles() {
  // Implement the SQL query to retrieve job titles, role ids, department names, and salaries
  db.query("SELECT * FROM role", (err, results) => {
    if (err) throw err;
    // Display the results in a formatted table
    console.table(results);
    // Call the main menu function again to display the menu options
    mainMenu();
  });
}

// Function to view all employees
function viewAllEmployees() {
  // Implement the SQL query to retrieve employee data including ids, names, job titles, departments, salaries, and managers
  db.query("SELECT * FROM employee", (err, results) => {
    if (err) throw err;
    // Display the results in a formatted table
    console.table(results);
    // Call the main menu function again to display the menu options
    mainMenu();
  });
}

// Function to add a department
async function addDepartment() {
  const { departmentName } = await inquirer.prompt([
    {
      type: "input",
      name: "departmentName",
      message: "Enter the name of the department:",
    },
  ]);

  // Implement the SQL query to add the department to the database
  db.query(
    "INSERT INTO department (name) VALUES (?)",
    [departmentName],
    (err, results) => {
      if (err) throw err;
      // Display a success message
      console.log("Department added successfully!");
      // Call the main menu function again to display the menu options
      mainMenu();
    }
  );
}

// Function to add a role
async function addRole() {
  // Implement the prompts to collect role information (name, salary, department)
  const { roleName, salary, departmentId } = await inquirer.prompt([
    // prompts here
  ]);

  // Implement the SQL query to add the role to the database
  db.query(
    "INSERT INTO role (title, salary, department_id) VALUES (?, ?, ?)",
    [roleName, salary, departmentId],
    (err, results) => {
      if (err) throw err;
      // Display a success message
      console.log("Role added successfully!");
      // Call the main menu function again to display the menu options
      mainMenu();
    }
  );
}

// Function to add an employee
async function addEmployee() {
  // Implement the prompts to collect employee information (first name, last name, role, manager)
  const { firstName, lastName, roleId, managerId } = await inquirer.prompt([
    // prompts here
  ]);

  // Implement the SQL query to add the employee to the database
  db.query(
    "INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)",
    [firstName, lastName, roleId, managerId],
    (err, results) => {
      if (err) throw err;
      // Display a success message
      console.log("Employee added successfully!");
      // Call the main menu function again to display the menu options
      mainMenu();
    }
  );
}

// Function to update an employee role
async function updateEmployeeRole() {
  // Implement the prompts to select an employee and enter the new role
  const { employeeId, roleId } = await inquirer.prompt([
    // prompts here
  ]);

  // Implement the SQL query to update the employee's role in the database
  db.query(
    "UPDATE employee SET role_id = ? WHERE id = ?",
    [roleId, employeeId],
    (err, results) => {
      if (err) throw err;
      // Display a success message
      console.log("Employees role has been updated successfully !");
      // Call the main menu function again to display the menu options
      mainMenu();
    }
  );
}

// Default response for any other request (Not Found)
app.use((req, res) => {
  res.status(404).end();
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
