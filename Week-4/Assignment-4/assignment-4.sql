-- select all articles with author’s email.
SELECT * FROM article WHERE authorID = (SELECT id FROM user WHERE email='abc@gmail.com');

-- select articles from 7th to 12th sorted by id
SELECT * FROM article ORDER BY id LIMIT 6 OFFSET 6;