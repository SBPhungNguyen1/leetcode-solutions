-- Write your PostgreSQL query statement below
SELECT user_id, COUNT(prompt) as prompt_count, ROUND(AVG(tokens)::numeric, 2) as avg_tokens
FROM prompts p1
GROUP BY user_id
HAVING COUNT(prompt) >= 3
    AND MAX(tokens) > AVG(tokens)
ORDER BY avg_tokens DESC