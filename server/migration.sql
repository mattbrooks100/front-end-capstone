DROP TABLE IF EXISTS shoes;

CREATE TABLE shoes (
  id SERIAL,
  name TEXT,
  category TEXT,
  price NUMERIC,
  color TEXT[],
  sizes NUMERIC[]
);

DROP TABLE IF EXISTS  reviews;

CREATE TABLE reviews (
  id SERIAL,
  
);


/*
change name to actual show name, change color to Tan/White,
*/
INSERT INTO shoes (name, category, price, color, sizes) VALUES ('Nike Dunk Low ''Medium Curry', 'Men''s Shoes', 110, '{White,Black,Design Your Own}', '{6,6.5,7,7.5,8,8.5,9,9.5,10,10.5,11,11.5,12,12.5,13,14,15,16,17,18}');
