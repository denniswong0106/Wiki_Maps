DROP TABLE IF EXISTS pins CASCADE;

--- Table for Pins ---
-- One map can have many pins --
CREATE TABLE pins (
  id SERIAL PRIMARY KEY NOT NULL,
  longitude VARCHAR(255) NOT NULL,
  latitude VARCHAR(255) NOT NULL,
  title VARCHAR(255) NOT NULL,
  description TEXT,
  pin_img VARCHAR(255) NOT NULL,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  map_id INTEGER REFERENCES maps(id) ON DELETE CASCADE
);
