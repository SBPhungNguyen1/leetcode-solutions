-- Write your PostgreSQL query statement below
SELECT DISTINCT l1.num AS ConsecutiveNums
FROM Logs l1
    INNER JOIN Logs l2 ON l1.num = l2.num
    INNER JOIN Logs l3 ON l1.num = l3.num
WHERE 
    l2.id - l1.id = 1 AND l3.id - l2.id = 1