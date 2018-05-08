ALTER  TABLE guitarwars ADD COLUMN approved TINYINT

#设置列的默认值
ALTER TABLE guitarwars MODIFY COLUMN approved TINYINT DEFAULT 0;