// This line imports inquirer package, which is used to prompt the User with questions.
const inquirer = require("inquirer");
const db = require("./db/connection");

function init() {
  console.log("Welcome to the Employee Tracker!");

  // Call the mainMenu() function to start the application
  mainMenu();
}

function mainMenu() {
  // Prompt the user with a list of options
  inquirer
    .prompt([
      {
        type: "list",
        name: "menuOption",
        message: "What would you like to do?",
        choices: [
          "View all departments",
          "View all roles",
          "View all employees",
          "Add a department",
          "Add a role",
          "Add an employee",
          "Update an employee role",
          "Exit",
        ],
      },
    ])
    .then((answers) => {
      // Based on the user's selection, execute the corresponding function
      switch (answers.menuOption) {
        case "View all departments":
          viewAllDepartments();
          break;
        case "View all roles":
          viewAllRoles();
          break;
        case "View all employees":
          viewAllEmployees();
          break;
        case "Add a department":
          addDepartment();
          break;
        case "Add a role":
          addRole();
          break;
        case "Add an employee":
          addEmployee();
          break;
        case "Update an employee role":
          updateEmployeeRole();
          break;
        // Exit the application when the user selects the "Exit" option.
        case "Exit":
          console.log("Goodbye!");
          process.exit(0);
        default:
          console.log("Invalid option. Please try again.");
          mainMenu();
      }
    });
}

// Function to view all departments
function viewAllDepartments() {
  // Implement the SQL query to retrieve department names and ids
  db.query("SELECT * FROM departments", (err, results) => {
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
  db.query("SELECT * FROM roles", (err, results) => {
    if (err) throw err;
    // Display the results in a formatted table
    console.table(results);
    // Call the main menu function again to display the menu options
    mainMenu();
  });
}

// // Function to view all employees
// function viewAllEmployees() {
//   // Implement the SQL query to retrieve employee data including ids, names, job titles, departments, salaries, and managers
//   db.query("SELECT employees.first_name, employees.last_name, roles.title, roles.salary, CONCAT(manager.first_name, ' ', manager.last_name) AS manager
//   FROM employees
//   INNER JOIN roles ON employees.role_id = roles.id
//   LEFT JOIN employees AS manager ON employees.manager_id = manager.id;", (err, results) => {
//     if (err) throw err;
//     // Display the results in a formatted table
//     console.table(results);
//     // Call the main menu function again to display the menu options
//     mainMenu();
//   });
// }

// Function to view all employees
function viewAllEmployees() {
  // Implement the SQL query to retrieve employee data including ids, names, job titles, departments, salaries, and managers
  db.query(
    "SELECT employees.first_name, employees.last_name, roles.title, roles.salary, CONCAT(manager.first_name, ' ', manager.last_name) AS manager FROM employees INNER JOIN roles ON employees.role_id = roles.id LEFT JOIN employees AS manager ON employees.manager_id = manager.id;",
    (err, results) => {
      if (err) throw err;
      // Display the results in a formatted table
      console.table(results);
      // Call the main menu function again to display the menu options
      mainMenu();
    }
  );
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
    "INSERT INTO departments (name) VALUES (?)",
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
    {
      type: "input",
      name: "roleName",
      message: "Enter the name of the role:",
    },
    {
      type: "input",
      name: "salary",
      message: "Enter the salary for the role:",
    },
    {
      type: "input",
      name: "departmentId",
      message: "Enter the department ID for the role:",
    },
  ]);

  // Implement the SQL query to add the role to the database
  db.query(
    "INSERT INTO roles (title, salary, department_id) VALUES (?, ?, ?)",
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
    {
      type: "input",
      name: "firstName",
      message: "Enter the first name:",
    },
    {
      type: "input",
      name: "lastName",
      message: "Enter the last name:",
    },
    {
      type: "input",
      name: "roleId",
      message: "Enter the  ID for the role:",
    },
    {
      type: "input",
      name: "managerId",
      message: "Enter the  ID for the manager:",
    },
  ]);

  // Implement the SQL query to add the employee to the database
  db.query(
    "INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)",
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

async function updateEmployeeRole() {
  try {
    // Select all employees
    const employees = await new Promise((resolve, reject) => {
      db.query("SELECT * FROM employees", (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    });

    // Select all roles
    const roles = await new Promise((resolve, reject) => {
      db.query("SELECT * FROM roles", (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    });

    // Prompt the user to select an employee and enter the new role
    const { employeeId, roleId } = await inquirer.prompt([
      {
        type: "list",
        name: "employeeId",
        message: "Please select an employee to update:",
        choices: employees.map((employee) => ({
          name: `${employee.first_name} ${employee.last_name}`,
          value: employee.id,
        })),
      },
      {
        type: "list",
        name: "roleId",
        message: "Please select the new role for the employee:",
        choices: roles.map((role) => ({
          name: role.title,
          value: role.id,
        })),
      },
    ]);

    // Update the employee's role in the database
    await new Promise((resolve, reject) => {
      db.query(
        "UPDATE employees SET role_id = ? WHERE id = ?",
        [roleId, employeeId],
        (err, result) => {
          if (err) {
            reject(err);
          } else {
            resolve(result);
          }
        }
      );
    });

    // Display a success message
    console.log("Employee role has been updated successfully!");

    // Call the main menu function again to display the menu options
    mainMenu();
  } catch (err) {
    console.error(err);
  }
}
// Call the init() function to start the application
init();
