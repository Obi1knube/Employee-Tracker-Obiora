-- Insert departments
INSERT INTO departments (name) VALUES
  ('Marketing'),
  ('Finance'),
  ('Human Resources');

-- Insert roles
INSERT INTO roles (title, salary, department_id) VALUES
  ('Marketing Manager', 60000, 1),
  ('Marketing Specialist', 40000, 1),
  ('Financial Analyst', 55000, 2),
  ('Accountant', 45000, 2),
  ('HR Manager', 65000, 3),
  ('HR Assistant', 35000, 3);

-- Insert employees
INSERT INTO employees (first_name, last_name, manager_id, role_id) VALUES
  ('John', 'Doe', NULL, 1),
  ('Jane', 'Smith', 1, 2),
  ('Mike', 'Johnson', 1, 2),
  ('Emily', 'Davis', 3, 3),
  ('David', 'Brown', 3, 3),
  ('Sarah', 'Wilson', 5, 4),
  ('Michael', 'Taylor', 5, 4),
  ('Jessica', 'Anderson', 6, 5),
  ('Kevin', 'Clark', 6, 5);