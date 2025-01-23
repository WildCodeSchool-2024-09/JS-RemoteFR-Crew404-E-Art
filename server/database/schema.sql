CREATE TABLE role (
  id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT NOT NULL,
  name VARCHAR (255) NOT NULL
);
CREATE TABLE user (
  id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT NOT NULL,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL,

  role_id INT UNSIGNED NOT NULL,
  CONSTRAINT fk_user_role
  FOREIGN KEY (role_id) REFERENCES role(id)
);

CREATE TABLE oeuvre (
  id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT NOT NULL,
  image VARCHAR(255) NOT NULL,
  title VARCHAR(255) NOT NULL,
  dimension VARCHAR(255) NOT NULL,
  description TEXT NOT NULL,
  year DATE NOT NULL,
  medium VARCHAR(255) NOT NULL,

  user_id INT UNSIGNED NOT NULL,
  CONSTRAINT fk_oeuvre_user
  FOREIGN KEY(user_id) REFERENCES user(id)
);



CREATE TABLE user_oeuvre (
  id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT NOT NULL,
  user_id INT UNSIGNED NOT NULL,
  oeuvre_id INT UNSIGNED NOT NULL,
  CONSTRAINT fk_user_oeuvre
  FOREIGN KEY (user_id) REFERENCES user(id),
  FOREIGN KEY (oeuvre_id) REFERENCES oeuvre(id)
);
INSERT INTO role(id, name) VALUES
  (1, "admin"),
  (2, "user");
insert into user(id, name, email, password, role_id)
values
  (1, "anthou", "anthou@yahoo.com", "word",1),
  (2, "john", "aliko@yahoo.com", "break",2);
INSERT INTO oeuvre(id, image, title, dimension, description, year, medium, user_id)
VALUES
(1, "https://www.google.com", "The Starry Night", "73.7 cm × 92.1 cm", "The Starry Night is an oil on canvas by the Dutch post-impressionist painter Vincent van Gogh. Painted in June 1889, it depicts the view from the east-facing window of his asylum room at Saint-Rémy-de-Provence, just before sunrise, with the addition of an ideal village.", "1889-06-01", "Oil on canvas", 1),
(2, "../public/assets/images/mountain.jpg", "Go wild", "4000 cm * 2670 cm", "Go wild is an oil on canvas by the Dutch painter Vincent van Gogh.", "1885-06-01", "Oil on canvas", 1);

INSERT INTO user_oeuvre(id, user_id, oeuvre_id)
VALUES
(1, 1, 1),
(2, 1, 2);

  


