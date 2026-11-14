-- Write your PostgreSQL query statement below
SELECT d.name as Department, e1.name as Employee, e1.salary as Salary
FROM Employee e1
    INNER JOIN Department d ON e1.departmentId = d.id
WHERE e1.salary IN (
    SELECT MAX(salary) as salary
    FROM Employee e2
    WHERE e2.departmentId = e1.departmentId
    GROUP BY departmentId
)

