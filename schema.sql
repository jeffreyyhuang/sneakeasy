DROP DATABASE IF EXISTS products;

CREATE DATABASE products;

USE products;

CREATE TABLE sneakers
(
  product_id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(50) NOT NULL,
  price INT NOT NULL,
  brand VARCHAR(30) NOT NULL,
  release_date DATE NOT NULL,
  sku VARCHAR(30) NOT NULL,
  main_color VARCHAR(30) NOT NULL,
  colorway VARCHAR(50) NOT NULL,
  designer VARCHAR(30) NOT NULL,
  silhouette VARCHAR(30) NOT NULL,
  technology VARCHAR(30) NOT NULL,
  nickname VARCHAR(30) NOT NULL,
  category VARCHAR(30) NOT NULL,
  product_details VARCHAR(3000) NOT NULL,
  PRIMARY KEY (product_id)
);

LOAD DATA LOCAL INFILE './datasets/SneakerData.csv' INTO TABLE sneakers
FIELDS TERMINATED BY ',' OPTIONALLY ENCLOSED BY '"'
LINES TERMINATED BY '\n'
IGNORE 1 LINES
(product_id, product_name, price, brand, @date, sku, main_color, colorway, designer, silhouette, technology, nickname, category, product_details)
SET release_date = STR_TO_DATE(@date, '%Y-%m-%d');

CREATE TABLE photos
(
  photo_id INT NOT NULL AUTO_INCREMENT,
  product INT NOT NULL,
  photo_url VARCHAR(1000) NOT NULL,
  PRIMARY KEY (photo_id),
  FOREIGN KEY (product)
    REFERENCES sneakers (product_id)
    ON DELETE CASCADE
);

LOAD DATA LOCAL INFILE './datasets/PhotosData.csv' INTO TABLE photos
FIELDS TERMINATED BY ',' OPTIONALLY ENCLOSED BY '"'
LINES TERMINATED BY '\n'
IGNORE 1 LINES;