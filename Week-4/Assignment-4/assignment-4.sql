-- select all articles with author’s email.
SELECT a.id, u.email AS 'author', a.title, a.content 
FROM article AS a 
INNER JOIN user AS u on a.authorID = u.id 
WHERE u.email='abc@gmail.com';

-- select articles from 7th to 12th sorted by id
SELECT * FROM article ORDER BY id LIMIT 6 OFFSET 6;