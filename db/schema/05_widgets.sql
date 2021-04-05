-- Drop and recreate Widgets table (Example)
-- NOT USED ---- KEEP FOR NOW AS SKELETON

DROP TABLE IF EXISTS widgets CASCADE;
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> a6257d667a5e230296620a55d0391026485ff521
CREATE TABLE widgets (
  id SERIAL PRIMARY KEY NOT NULL,
  user_id INTEGER REFERENCES users(id),
  name VARCHAR(255) NOT NULL
);

<<<<<<< HEAD
=======
=======
-- CREATE TABLE widgets (
--   id SERIAL PRIMARY KEY NOT NULL,
--   user_id INTEGER REFERENCES users(id),
--   name VARCHAR(255) NOT NULL
-- );
>>>>>>> b95e53a31fc8586b509ff7a1a47ab4674fd18ef4
>>>>>>> a6257d667a5e230296620a55d0391026485ff521
