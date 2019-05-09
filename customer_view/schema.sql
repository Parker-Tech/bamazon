CREATE DATABASE IF NOT EXISTS bamazon;

use bamazon;

CREATE TABLE IF NOT EXISTS products(
	id INT AUTO_INCREMENT PRIMARY KEY,
    product_name VARCHAR(30),
    department_name VARCHAR(30),
    price INT,
    stock_quantity INT
);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES ("Water Bottle", "Liquids", 40, 100);