DROP DATABASE IF EXISTS employee_tracker_db;
CREATE DATABASE employee_tracker_db;
USE employee_tracker_db;

CREATE TABLE department (
  id INT AUTO_INCREMENT PRIMARY KEY ,
  name VARCHAR(30) NOT NULL
);

CREATE TABLE role(
    id INT,
    title VARCHAR(30) NOT NULL,
    Salary DECIMAL NOT NULL,
    FOREIGN KEY ( id) REFERENCES department(id) ON DELETE SET NULL
);

CREATE TABLE employee(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL
    manager_id INT,
    role_id INT,
    FOREIGN KEY(manager_id) REFERENCES employee(id)  ON DELETE SET NULL,
    FOREIGN KEY(role_id) REFERENCES role(id)  ON DELETE SET NULL
);








