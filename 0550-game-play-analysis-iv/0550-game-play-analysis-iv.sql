-- Write your PostgreSQL query statement below
WITH FirstLogins AS (
    SELECT 
        player_id, 
        MIN(event_date) AS first_login
    FROM Activity
    GROUP BY player_id
)
SELECT 
    ROUND(
        COUNT(a.player_id)::NUMERIC / (SELECT COUNT(*) FROM FirstLogins), 
        2
    ) AS fraction
FROM FirstLogins fl
JOIN Activity a 
  ON fl.player_id = a.player_id 
 AND a.event_date = fl.first_login + INTERVAL '1 day';