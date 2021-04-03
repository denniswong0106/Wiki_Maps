DROP TABLE IF EXISTS favorites CASCADE;

--- Table for favorites---
-- Links Users and Maps in a Many to Many relationship
CREATE TABLE favorites (
  id SERIAL PRIMARY KEY NOT NULL,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  map_id INTEGER REFERENCES maps(id) ON DELETE CASCADE
);
