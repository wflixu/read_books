SET NAMES UTF8;
DROP DATABASE IF EXISTS aliendatabase;
CREATE DATABASE aliendatabase CHARSET=UTF8;
USE aliendatabase;
CREATE TABLE aliens_abduction (
    first_name varchar(30),
    last_name varchar(30),
    when_it_happened varchar(30),
    how_long varchar(30),
    how_many varchar(10),
    aliens_description varchar(30),
    what_they_did varchar(30),
    fang_spotted varchar(30),
    other varchar(100),
    email varchar(50)
);
-- 插入数据


#INSERT INTO aliens_abduction (first_name,last_name) VALUES("TIM","COOK");
-- INSERT INTO aliens_abduction (first_name,last_name,when_it_happened,how_long,aliens_description,what_they_did,fang_spotted,other,email) VALUES("Sally","Jhones","3 days ago","1 day","green with six tentacles","we just talk and play with a dog","yes","I may have seen you dog ,contact me","germ@126.com");

-- 查询
-- SELECT first_name,last_name FROM aliens_abduction;
-- SELECT * FROM aliens_abduction WHERE fang_spotted="yes";

