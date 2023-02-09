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
  shoes_id INTEGER,
  title TEXT,
  date DATE,
  username TEXT,
  body TEXT,
  rating INTEGER,
  amount INTEGER
);

INSERT INTO shoes (name, category, price, color, sizes) VALUES ('Nike Dunk Low ''Medium Curry''', 'Men''s Shoes', 110, '{Tan/White}', '{6,6.5,7,7.5,8,8.5,9,9.5,10,10.5,11,11.5,12,12.5,13,14,15,16,17,18}'),
('Nike Air Force 1', 'Men''s Shoes', 130, '{White,Black,Design Your Own}', '{6,6.5,7,7.5,8,8.5,9,9.5,10,10.5,11,11.5,12,12.5,13,14,15,16,17,18}');

INSERT INTO shoes (name, category, price, color, sizes)
SELECT substr(md5(random()::text), 1, 10), 'Men''s Shoes', (random() * 100 + 65)::integer, '{White,Black}', '{6,6.5,7,7.5,8,8.5,9,9.5,10,10.5,11,11.5,12,12.5,13,14,15,16,17,18}'
FROM generate_series(1, 1000000);

INSERT INTO reviews(shoes_id, title, date, username, body, rating) VALUES('1','I can walk!', 'Feb 01, 2023', 'BigSteppa', 'I could walk before but now I can walk in style.', 5), 
('1','The tan not tanning', 'Jan 12, 2023', 'BlackAirForceKi','Going back to black forces so I can terrorize basketball courts.', 1),
('1','The Old Chimney Sweep', 'Dec 24, 2022', 'IOnlyJackNikes37', 'Size a little small. Probably perfect for the person these were for.', 3)
