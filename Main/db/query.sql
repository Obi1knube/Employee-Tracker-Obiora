
-- query to retrieve job title, role id, department, and salary for each role in the database, 
SELECT roles.title, roles.id AS role_id, departments.name AS department, roles.salary
FROM roles
JOIN departments ON roles.department_id = departments.id;


--View a total utilized budget of a department
SELECT d.department_id, d.department_name, SUM(r.salary) AS total_budget
FROM departments d
JOIN employees e ON e.department_id = d.department_id
JOIN roles r ON e.role_id = r.role_id
GROUP BY d.department_id, d.department_name;

-- Please note that you need to replace <new_manager_id>, <employee_id>,
-- <manager_id>, <department_id>, and <role_id> with the actual values you want to use.