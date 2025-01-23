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
  (1, "anthou", "anthou@yahoo.com", "word",1);

  


