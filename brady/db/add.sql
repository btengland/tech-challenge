INSERT INTO title (title)
VALUES ($1)
RETURNING *;

INSERT INTO paragraph (paragraph)
VALUES ($1)
RETURNING *;