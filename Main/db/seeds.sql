SE employee_tracker_db

-- Insert data into the department table
INSERT INTO department (name) VALUES
  ('Sales'),
  ('Marketing'),
  ('Finance'),
  ('Human Resources');

-- Insert data into the role table
INSERT INTO role (title, salary, department_id) VALUES
  ('Sales Manager', 60000, 1),
  ('Sales Representative', 40000, 1),
  ('Marketing Manager', 55000, 2),
  ('Marketing Coordinator', 35000, 2),
  ('Finance Manager', 65000, 3),
  ('Financial Analyst', 45000, 3),
  ('HR Manager', 50000, 4),
  ('HR Assistant', 30000, 4);

-- Insert data into the employee table
INSERT INTO employee (first_name, last_name, manager_id, role_id) VALUES
  ('John', 'Doe', NULL, 1),
  ('Jane', 'Smith', 1, 2),
  ('Mike', 'Johnson', 1, 2),
  ('Sarah', 'Williams', 1, 2),
  ('David', 'Brown', 1, 2),
  ('Emily', 'Davis', 1, 2),
  ('Michael', 'Miller', 1, 2),
  ('Jessica', 'Anderson', 1, 2);