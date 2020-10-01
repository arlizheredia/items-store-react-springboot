CREATE TABLE IF NOT EXISTS `item`
(
    `id`         int NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `name`       varchar(255),
    `cost`       float,
    `department` varchar(255),
    `category`   varchar(255)
);

CREATE TABLE IF NOT EXISTS `department`
(
    `id`   int          NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `name` varchar(255) NOT NULL
);

CREATE TABLE IF NOT EXISTS `category`
(
    `id`            int          NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `name`          varchar(255) NOT NULL,
    `department_id` int          NOT NULL,
    constraint category_depatrment_fk
        foreign key (department_id)
            references department (id)
);

INSERT INTO department (name)
VALUES ('Clothing'),
       ('Shoes');

INSERT INTO category (name, department_id)
VALUES ('Baby', 1),
       ('Clothes', 1),
       ('Womans Clothes', 1),
       ('Dress shoe', 2),
       ('Fashion boot', 2),
       ('Driving moccasins', 2),
       ('Climbing shoe', 2),
       ('Desert Boot', 2),
       ('Earth shoe', 2);

INSERT INTO item (name, cost, department, category)
VALUES ('Ankle boot', 56.45, 'Shoes', 'Fashion boot'),
       ('5-Pack Floral Original Bodysuits', 13.20, 'Clothing', 'Baby');
