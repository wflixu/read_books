SET NAMES UTF8;
-- DROP DATABASE IF EXISTS ch5;
CREATE DATABASE mismatch CHARSET=UTF8;
USE mismatch;

#创建班级表
CREATE TABLE mismatch_user(
  id INT PRIMARY KEY AUTO_INCREMENT,
  join_date DATETIME,
  first_name VARCHAR(20),
  last_name VARCHAR(20),
  gender TINYINT,
  birthday DATE,
  city VARCHAR(20),
  state VARCHAR(20),
  picture VARCHAR(30)
);

ALTER TABLE mismatch_user ADD username VARCHAR(32) NOT NULL AFTER id, ADD password VARCHAR(16) NOT NULL AFTER username

INSERT INTO mismatch_user (username,password,join_date) VALUES('jnettles'.SHA('tatlover'),NOW());

SELECT * FROM mismatch_user WHERE password = SHA('tatlover');

ALTER TABLE mismatch_user CHANGE password password VARCHAR(40) NOT NULL;