CREATE TABLE IF NOT EXISTS `item` (
    `id` int NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `name` varchar(255),
    `cost` float,
    `department` varchar(255),
    `category` varchar(255)
);

CREATE TABLE IF NOT EXISTS `department` (
    `name` varchar(255) NOT NULL PRIMARY KEY
);

CREATE TABLE IF NOT EXISTS `category` (
    `name` varchar(255) NOT NULL PRIMARY KEY,
    `department` varchar(255)
);

INSERT INTO department (name) VALUES ('Clothing');
INSERT INTO department (name) VALUES ('Shoes');

INSERT INTO category (name, department) VALUES ('Baby', 'Clothing');
INSERT INTO category (name, department) VALUES ('Clothes', 'Clothing');
INSERT INTO category (name, department) VALUES ('Womans Clothes', 'Clothing');

INSERT INTO category (name, department) VALUES ('Dress shoe', 'Shoes');
INSERT INTO category (name, department) VALUES ('Fashion boot', 'Shoes');
INSERT INTO category (name, department) VALUES ('Driving moccasins', 'Shoes');
INSERT INTO category (name, department) VALUES ('Climbing shoe', 'Shoes');
INSERT INTO category (name, department) VALUES ('Desert Boot', 'Shoes');
INSERT INTO category (name, department) VALUES ('Earth shoe', 'Shoes');

INSERT INTO item (name, cost, department, category) VALUES ('Ankle boot', 56.45, 'Shoes', 'Fashion boot');
INSERT INTO item (name, cost, department, category) VALUES ('5-Pack Floral Original Bodysuits', 13.20, 'Clothing', 'Baby');
