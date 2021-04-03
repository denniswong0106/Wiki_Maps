-- Drop and recreate Widgets table (Example)
-- NOT USED ---- KEEP FOR NOW AS SKELETON

DROP TABLE IF EXISTS widgets CASCADE;
CREATE TABLE widgets (
  id SERIAL PRIMARY KEY NOT NULL,
  user_id INTEGER REFERENCES users(id),
  name VARCHAR(255) NOT NULL
);
