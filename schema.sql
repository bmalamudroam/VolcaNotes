DROP DATABASE IF EXISTS quizgame;

CREATE DATABASE quizgame;

USE quizgame;

CREATE TABLE users (
  id INT UNSIGNED NOT NULL AUTO_INCREMENT,
  username varchar(80) NOT NULL,
  highscore INT NOT NULL DEFAULT '0',
  PRIMARY KEY (id)
);

CREATE TABLE scores (
  id INT UNSIGNED NOT NULL AUTO_INCREMENT,
  score INT NOT NULL default '0',
  username varchar(80) NOT NULL,
  PRIMARY KEY (id)
  -- FOREIGN KEY (userid) REFERENCES users(id)
);

-- CREATE TABLE challengesets (
--   id INT UNSIGNED NOT NULL AUTO_INCREMENT,
--   setname VARCHAR(120) NOT NULL,
--   PRIMARY KEY (id)
-- );

CREATE TABLE challenges (
  id INT UNSIGNED NOT NULL AUTO_INCREMENT,
  challengeset VARCHAR(100) NOT NULL,
  question VARCHAR(120) NOT NULL,
  answer VARCHAR(120) NOT NULL,
  PRIMARY KEY (id),
  -- FOREIGN KEY (challengeset) REFERENCES challengesets(id)
);

/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/
