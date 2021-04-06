-- HERE I ADD 'real' data that we can use for demo. Run this prior to seeding with fake data.

INSERT INTO users(name, email, city, profile_pic) VALUES
('Ryan Reynolds', 'ryan@reynolds.com', 'Vancouver', '../../public/images.mr-don.png'),
('The Other Ryan', 'gooslings@ryan.com', 'Calgary', '../../public/images.profile-hex.png'),
('Regular Joe', 'joeBiden@gmail.com', 'Washington', '../../public/images.profile-hex.png')
;

INSERT INTO maps (contributor_id, title, description, thumbnail_img, city) VALUES
(1, 'Places to see rain in Vancouver', 'I love seeing rain fall, it is my favorite hobby. I created a map to show my favorite places to find rain.', '../../public/images.brick-wall.png', 'Vancouver'),
(1, 'Places to hide from Deadpool', 'Deadpool is scary', '../../public/images.brick-wall.png', 'Vancouver'),
(2, 'Places for oilers fans to hang out in Calgary', 'Just a fun social place for us to hang out', '../../public/images.brick-wall.png', 'Calgary'),
(3, 'Top places to have Sushi', 'I love sushi', '../../public/images.brick-wall.png', 'Washington')
;

INSERT INTO favorites (user_id, map_id) VALUES
(1, 1), (1, 2), (1, 3), (2, 4);

