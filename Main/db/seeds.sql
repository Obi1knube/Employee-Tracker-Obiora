USE employee_tracker_db;

-- Insert data into the department table
INSERT INTO department (name)
VALUES ('Sales'), ('Marketing'), ('Finance');

-- Insert data into the role table
INSERT INTO role (id, title, salary)
VALUES (1, 'Sales Manager', 50000),
       (2, 'Sales Representative', 30000),
       (3, 'Marketing Manager', 45000),
       (4, 'Marketing Coordinator', 25000),
       (5, 'Finance Manager', 60000),
       (6, 'Financial Analyst', 40000);

-- Insert data into the employee table
INSERT INTO employee (first_name, last_name, manager_id, role_id)
VALUES ('John', 'Doe', NULL, 1),
       ('Jane', 'Smith', 1, 2),
       ('Mike', 'Johnson', 1, 2),
       ('Sarah', 'Williams', 3, 3),
       ('David', 'Brown', 3, 4),
       ('Emily', 'Davis', 5, 5),
       ('Michael', 'Wilson', 5, 6);