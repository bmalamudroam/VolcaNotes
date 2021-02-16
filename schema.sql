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

/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/
