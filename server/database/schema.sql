-- SQLBook: Code
CREATE TABLE role (
  id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT NOT NULL,
  name VARCHAR (255) NOT NULL
);
# Nous avons trois rôles: admin, user et artist
INSERT INTO role(name) VALUES
  ("admin"),
  ("user"),
  ("artist");

CREATE TABLE user (
  id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT NOT NULL,
  name VARCHAR(50) NOT NULL,
  email VARCHAR(255) NOT NULL UNIQUE,
  password VARCHAR(500) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  role_id INT UNSIGNED NOT NULL DEFAULT 2,
  CONSTRAINT fk_user_role
  FOREIGN KEY (role_id) REFERENCES role(id)
);

# User 1 = email: admin@eart.com, password: password
# User 2 = email: user@eart.com, password: password
# User 3 = email: artist@eart.com, password: password
insert into user(name, email, password, role_id)
values
  ("anthony", "admin@eart.com", "$argon2id$v=19$m=65536,t=3,p=4$z+/VAgYwr9Txeqaob/tpPw$u+QnxJz7Nourod50tgGLJnbkxFtlwZ9kZCeOuKMqsVU", 1),
  ("nabil", "user@eart.com", "$argon2id$v=19$m=65536,t=3,p=4$qGPJ6S562z9Q5QdRofVwHA$A8FfFR/AHnEwcacjigTg3e+8Ii4Jwpz8SAwMuuWLBnU", 2),
  ("frank", "artist@eart.com", "$argon2id$v=19$m=65536,t=3,p=4$6ZC41p/mMjkv7qFP+O4PdA$TKImI/0VBwUgEGBljVf09QXd/NnH3Cgb28vFsFLSQgo", 3);

CREATE TABLE oeuvre (
  id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT NOT NULL,
  image VARCHAR(255)  NULL,
  title VARCHAR(255) NOT NULL,
  dimension VARCHAR(255) NOT NULL,
  description TEXT NOT NULL,
  year VARCHAR(4) NOT NULL,
  medium VARCHAR(255) NOT NULL,
  user_id INT UNSIGNED NOT NULL,
  CONSTRAINT fk_oeuvre_user
  FOREIGN KEY(user_id) REFERENCES user(id)
);

INSERT INTO oeuvre(image, title, dimension, description, year, medium, user_id)
VALUES
("pawn.jpg", "The Pawn", "73.7 cm × 92.1 cm", "The Pawn is an oil on canvas by the Dutch post-impressionist painter Vincent van Gogh. Painted in June 1889, it depicts the view from the east-facing window of his asylum room at Saint-Rémy-de-Provence, just before sunrise, with the addition of an ideal village.", "1889", "Oil on canvas", 1),
("boat.jpg", "Boat", "73.7 cm × 92.1 cm", "Just a boat", "2022", "Oil on canvas", 1),
("pawn1.jpg", "Growth", "4000 cm * 2670 cm", "Growth is an oil on canvas by the Dutch painter Vincent van Gogh.", "1885", "Oil on canvas", 3),
("toile.jpg", "Juste une toile", "4000 cm * 2670 cm", "Ici, nous avons la representation d'un toile qui représente toute l'art", "1885", "Oil on canvas", 3);

CREATE TABLE user_oeuvre (
  id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT NOT NULL,
  user_id INT UNSIGNED NOT NULL,
  oeuvre_id INT UNSIGNED NOT NULL,
  CONSTRAINT fk_user_oeuvre
  FOREIGN KEY (user_id) REFERENCES user(id),
  FOREIGN KEY (oeuvre_id) REFERENCES oeuvre(id)
);

INSERT INTO user_oeuvre(user_id, oeuvre_id)
VALUES
(3, 1),
(3, 2);

CREATE TABLE artist_request (
  id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT NOT NULL,
  user_id INT UNSIGNED NOT NULL UNIQUE,
  status BOOLEAN DEFAULT 0,
  CONSTRAINT fk_artist_request_user FOREIGN KEY (user_id) REFERENCES user(id)
);

INSERT INTO artist_request(user_id) VALUES
(2);