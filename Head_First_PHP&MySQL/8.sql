
#多个连接
SELECT mz.response_id mz.topic_id mt.response mt.name AS topic_name ,mc.name AS category_name
FROM mismatch_response AS mz
INNER JOIN mismatch_topic mt USING(topic_id)
INNER JOIN mismatch_category AS mc USING(category_id)
WHERE MZ.user_id=$_SESSION['user_id'];www.baiduwwwwwwwwwwwwDQXX

#连接
SELECT mismatch_topic.topic_id,mismatch_category.name FROM mismatch_topic INNER JOIN mismatch_category ON(mismatch_topic.category_id = mismatch_category.category_id);

CREATE TABLE `mismatch_response` (
  `response_id` INT AUTO_INCREMENT,
  `user_id` INT,
  `topic_id` INT,
  `response` TINYINT,
  PRIMARY KEY (`response_id`)
);



CREATE TABLE `mismatch_topic` (
  `topic_id` INT AUTO_INCREMENT,
  `name` VARCHAR(48),
  `category` VARCHAR(48),
  PRIMARY KEY (`topic_id`)
);

INSERT INTO `mismatch_topic` VALUES (1, 'Tattoos', 'Appearance');
INSERT INTO `mismatch_topic` VALUES (2, 'Gold chains', 'Appearance');
INSERT INTO `mismatch_topic` VALUES (3, 'Body piercings', 'Appearance');
INSERT INTO `mismatch_topic` VALUES (4, 'Cowboy boots', 'Appearance');
INSERT INTO `mismatch_topic` VALUES (5, 'Long hair', 'Appearance');
INSERT INTO `mismatch_topic` VALUES (6, 'Reality TV', 'Entertainment');
INSERT INTO `mismatch_topic` VALUES (7, 'Professional wrestling', 'Entertainment');
INSERT INTO `mismatch_topic` VALUES (8, 'Horror movies', 'Entertainment');
INSERT INTO `mismatch_topic` VALUES (9, 'Easy listening music', 'Entertinment');
INSERT INTO `mismatch_topic` VALUES (10, 'The opera', 'Entertainment');
INSERT INTO `mismatch_topic` VALUES (11, 'Sushi', 'Food');
INSERT INTO `mismatch_topic` VALUES (12, 'Spam', 'Food');
INSERT INTO `mismatch_topic` VALUES (13, 'Spicy food', 'Food');
INSERT INTO `mismatch_topic` VALUES (14, 'Peanut butter & banana sandwiches', 'Food');
INSERT INTO `mismatch_topic` VALUES (15, 'Martinis', 'Food');
INSERT INTO `mismatch_topic` VALUES (16, 'Howard Stern', 'People');
INSERT INTO `mismatch_topic` VALUES (17, 'Bill Gates', 'Peopel');
INSERT INTO `mismatch_topic` VALUES (18, 'Barbara Streisand', 'People');
INSERT INTO `mismatch_topic` VALUES (19, 'Hugh Hefner', 'People');
INSERT INTO `mismatch_topic` VALUES (20, 'Martha Stewart', 'People');
INSERT INTO `mismatch_topic` VALUES (21, 'Yoga', 'Activities');
INSERT INTO `mismatch_topic` VALUES (22, 'Weightlifting', 'Activities');
INSERT INTO `mismatch_topic` VALUES (23, 'Cube puzzles', 'Activities');
INSERT INTO `mismatch_topic` VALUES (24, 'Karaoke', 'Activities');
INSERT INTO `mismatch_topic` VALUES (25, 'Hiking', 'Activities');