DROP DATABASE IF EXISTS bamazon;

CREATE database bamazon;

USE bamazon;

-- table needs to include 
-- ITEM ID (NUMBER)
-- PRODUCT NAME (STRING)
-- DEPARTMENT NAME(STRING)
-- PRICE (COST TO CONSUMER)(NUMBER)
-- STOCK QUANTITY (NUMBER)
CREATE TABLE products (
item_id INT (10) NOT NULL,
product_name VARCHAR (30),
department_name VARCHAR (30),
customer_price DECIMAL (10,2),
stock_quantity INT (4),
PRIMARY KEY (item_id)
);

-- setting starter items
INSERT INTO products (item_id, product_name, department_name, customer_price, stock_quantity)
VALUES ("0028", "Tide Detergent", "Household", "10.99", 15);

INSERT INTO products (item_id, product_name, department_name, customer_price, stock_quantity)
VALUES ("1005", "Lucky Charms", "Grocery", "6.99", 20);

INSERT INTO products (item_id, product_name, department_name, customer_price, stock_quantity)
VALUES ("1080", "Peanut Butter", "Grocery", "7.99", 13);

INSERT INTO products (item_id, product_name, department_name, customer_price, stock_quantity)
VALUES ("0228", "Logitech Keyboard", "Elecronics", "89.99", 3);

INSERT INTO products (item_id, product_name, department_name, customer_price, stock_quantity)
VALUES ("2042", "Ant Spray", "Household", "6.99", 8);

INSERT INTO products (item_id, product_name, department_name, customer_price, stock_quantity)
VALUES ("6666", "Recliner", "Furniture", "400.00", 2);

INSERT INTO products (item_id, product_name, department_name, customer_price, stock_quantity)
VALUES ("6453", "Office Chair", "Furniture", "100.99", 10);

INSERT INTO products (item_id, product_name, department_name, customer_price, stock_quantity)
VALUES ("5674", "Ajax Dish Soap", "Household", "1.99", 19);

INSERT INTO products (item_id, product_name, department_name, customer_price, stock_quantity)
VALUES ("6232", " 10lb bag of Peanuts", "Grocery", "10.00", 100);

INSERT INTO products (item_id, product_name, department_name, customer_price, stock_quantity)
VALUES ("9292", "Samsung 970 SSD", "Electronics", "159.99", 22);

SELECT * FROM products;

