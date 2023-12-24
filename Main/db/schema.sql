DROP DATABASE IF EXISTS employee_tracker;
DROP DATABASE IF EXISTS employee_tracker_db;

CREATE DATABASE employee_tracker_db;
USE employee_tracker_db


CREATE TABLE employee(
    id INT NOT NULL AUTO_INCREMENT Primary Key,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL
);

CREATE TABLE department (
  id INT AUTO_INCREMENT PRIMARY KEY ,
  name VARCHAR(30) NOT NULL
);

CREATE role(
    title VARCHAR(30) NOT NULL,
    Salary DECIMAL NOT NULL
);





