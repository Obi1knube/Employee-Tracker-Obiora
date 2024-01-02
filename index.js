// This line imports inquirer package, which is used to prompt the User with questions.
const inquirer = require("inquirer");

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

// Call the init() function to start the application
init();
