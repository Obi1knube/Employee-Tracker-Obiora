
SELECT DATABASE ();


ALTER TABLE role
ADD FOREIGN KEY (department_id)
REFERENCES department(id);


INSERT INTO department (name)
VALUES ('Sales');