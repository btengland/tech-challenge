DROP TABLE paragraph;
DROP TABLE title;

CREATE TABLE title (
    title_id SERIAL PRIMARY KEY,
    title VARCHAR (500) NOT NULL
);


CREATE TABLE paragraph (
    paragraph_id SERIAL PRIMARY KEY,
    paragraph VARCHAR (500) NOT NULL
);