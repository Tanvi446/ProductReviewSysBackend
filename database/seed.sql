INSERT INTO products(prod_id, prod_name, price, seller, items_sold) VALUES 
    (1001,'HP Pavilion 15 Ryzen 7 Laptop','68999','HP Store',324),
    (1002,'Apple iPhone 15 128GB','79900','Apple India',512),
    (1003,'Samsung Galaxy S24','74999','Samsung India',286),
    (1004,'Sony WH-1000XM5 Headphones','24990','Sony Store',438), 
    (1005,'Logitech MX Master 3S Mouse','8995','Logitech',621), 
    (1006,'Apple Watch Series 9','41900','Apple India',307), 
    (1007,'Dell UltraSharp U2723QE Monitor','48999','Dell Store',184), 
    (1008,'Samsung 980 Pro 1TB SSD','9999','Samsung India',742), 
    (1009,'ASUS ROG Strix G16 Gaming Laptop','124999','ASUS Store',143), 
    (1010,'JBL Flip 6 Bluetooth Speaker','8999','JBL Official',576), 
    (1011,'Lenovo IdeaPad Slim 5','57999','Lenovo Store',268), 
    (1012,'Canon EOS R50 Mirrorless Camera','68999','Canon India',112), 
    (1013,'OnePlus Pad 2','39999','OnePlus Store',241), 
    (1014,'boAt Airdopes 141','1299','boAt Official',1385), 
    (1015,'Amazon Kindle Paperwhite 11th en','14999','Amazon India',196);


INSERT INTO product_review(product_id,user_id,username,rating,review_text,status) VALUES 
(1001,101,'Tanvi',5,'Excellent performance and battery life','Visible'), 
(1002,102,'Rahul',4,'Camera quality is really good','Visible'), 
(1003,103,'Anita',5,'Smooth experience and great display','Visible'), 
(1004,104,'Karan',4,'Noise cancellation works very well','Visible'), 
(1005,105,'Neha',5,'Perfect for office productivity','Visible'), 
(1006,106,'Ravi',4,'Fitness tracking is quite accurate','Visible'), 
(1007,107,'Pooja',5,'Display quality is outstanding','Visible'), 
(1008,108,'Arjun',5,'Very fast storage speeds','Visible'), 
(1009,109,'Sneha',4,'Runs games without issues','Visible'), 
(1010,110,'Vikram',3,'Sound quality is decent','Visible'), 
(1011,101,'Tanvi',4,'Lightweight and easy to carry','Visible'), 
(1012,102,'Rahul',5,'Image quality exceeded expectations','Reported'), 
(1013,103,'Anita',4,'Good tablet for students','Visible'), 
(1014,104,'Karan',2,'Battery backup could improve','Reported'), 
(1015,105,'Neha',5,'Perfect for reading books','Visible');


INSERT INTO product_review(product_id,user_id,username,rating,review_text,status) VALUES 
(1001,102,'Rahul',4,'Good value for money','Visible'), 
(1001,103,'Anita',5,'Fast and reliable laptop','Visible'), 
(1002,104,'Karan',5,'Excellent camera and performance','Visible'), 
(1002,105,'Neha',4,'Battery lasts all day','Visible'), 
(1003,106,'Ravi',4,'Display quality is impressive','Visible'), 
(1004,107,'Pooja',5,'Comfortable for long sessions','Visible'), 
(1005,108,'Arjun',4,'Very ergonomic and smooth','Visible'), 
(1006,109,'Sneha',5,'Excellent health tracking features','Visible'), 
(1007,110,'Vikram',4,'Sharp display and colors','Visible'), 
(1008,101,'Tanvi',5,'Boot times are extremely fast','Visible'), 
(1009,102,'Rahul',5,'Handles every game easily','Visible'), 
(1010,103,'Anita',4,'Portable and loud speaker','Visible'), 
(1011,104,'Karan',3,'Good but average battery','Visible'), 
(1012,105,'Neha',5,'Perfect camera for beginners','Visible'), 
(1013,106,'Ravi',4,'Smooth multitasking experience','Visible'), 
(1014,107,'Pooja',3,'Decent sound for price','Visible'), 
(1015,108,'Arjun',5,'Reading experience is amazing','Visible');