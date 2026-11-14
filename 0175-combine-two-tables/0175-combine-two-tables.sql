-- Write your PostgreSQL query statement below
SELECT firstname as firstName, lastname as LastName, city, state
FROM Person s 
    LEFT JOIN Address a ON s.personId = a.personId
