DROP TABLE IF EXISTS shoes;

CREATE TABLE shoes (
  id SERIAL,
  name TEXT,
  category TEXT,
  price NUMERIC,
  color TEXT[],
  sizes NUMERIC[]
);

INSERT INTO shoes (name, category, price, color, sizes) VALUES ('Nike Air Force 1 ''07', 'Men''s Shoes', 110, '{White,Black,Design Your Own}', array(SELECT * FROM generate_series(6,18,0.5)));
