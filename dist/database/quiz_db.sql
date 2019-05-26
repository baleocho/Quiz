CREATE DATABASE quiz_db;
USE quiz_db;
CREATE TABLE aswers_tb(
    id int not null auto_increment,
    name varchar(50),
    q1 tinyint,
    q2 tinyint,
    q3 tinyint,
    q4 tinyint,
    q5 tinyint,
    q6 tinyint,
    q7 tinyint,
    q8 tinyint,
    q9 tinyint,
    q10 tinyint,
    q11 tinyint,
    q12 tinyint,
    q13 tinyint,
    q14 tinyint,
    q15 tinyint,
    q16 tinyint,
    q17 tinyint,
    q18 tinyint,
    q19 tinyint,
    q20 tinyint,
    creation_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (id)
);

