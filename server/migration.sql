DROP TABLE IF EXISTS shoes;

CREATE TABLE shoes (
  id SERIAL,
  name TEXT,
  category TEXT,
  price NUMERIC,
  color TEXT[],
  sizes NUMERIC[]
);

INSERT INTO shoes (name, category, price, color, sizes) VALUES ('Nike Air Force 1 ''07', 'Men''s Shoes', 110, '{White,Black,Design Your Own}', '{6,6.5,7,7.5,8,8.5,9,9.5,10,10.5,11,11.5,12,12.5,13,14,15,16,17,18}');
