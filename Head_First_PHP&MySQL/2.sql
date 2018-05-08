SET  NAMES utf8;
DROP DATABASE IF EXISTS elvis_store;
CREATE DATABASE elvis_store CHARSET=UTF8;
USE elvis_store;

CREATE TABLE email_list (
    'first_name' VARCHAR(20),
    'last_name' VARCHAR(20),
    'email' VARCHAR(60)
)

SET  NAMES utf8;
CREATE DATABASE elvis_store;
USE elvis_store;

CREATE TABLE email_list (
    `first_name` VARCHAR(20),
    `last_name` VARCHAR(20),
    `email` VARCHAR(60)
);

SELECT * FROM email_list WHERE last_name="tim";
SELECT * FROM email_list WHERE first_name="Bubba";
SELECT first_name,last_name WHERE email = "ls@object.net";

SELECT * FROM email_list WHERE  first_name="tim" AND last_name="cook";

ALTER TABLE email_list ADD id INT NOT NULL AUTO_INCREMENT FIRST,ADD PRIMARY KEY(id);
