
-- query to retrieve job title, role id, department, and salary for each role in the database, 
SELECT roles.title, roles.id AS role_id, departments.name AS department, roles.salary
FROM roles
JOIN departments ON roles.department_id = departments.id;


--Update employee managers
UPDATE employees
SET manager_id = <new_manager_id>
WHERE employee_id = <employee_id>;

--View employee managers
SELECT e.employee_id, e.first_name, e.last_name, e.manager_id
FROM employees e
JOIN employees m ON e.manager_id = m.employee_id
WHERE m.employee_id = <manager_id>;

--View employees department
SELECT e.employee_id, e.first_name, e.last_name, d.department_name
FROM employees e
JOIN departments d ON e.department_id = d.department_id
WHERE d.department_id = <department_id>;

-- Delete a department
DELETE FROM departments
WHERE department_id = <department_id>;

-- Delete a role
DELETE FROM roles
WHERE role_id = <role_id>;

-- Delete an employee
DELETE FROM employees
WHERE employee_id = <employee_id>;

--View a total utilized budget of a department
SELECT d.department_id, d.department_name, SUM(r.salary) AS total_budget
FROM departments d
JOIN employees e ON e.department_id = d.department_id
JOIN roles r ON e.role_id = r.role_id
GROUP BY d.department_id, d.department_name;

-- Please note that you need to replace <new_manager_id>, <employee_id>,
-- <manager_id>, <department_id>, and <role_id> with the actual values you want to use.