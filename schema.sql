DROP DATABASE IF EXISTS REPLACE_THIS;

CREATE DATABASE REPLACE_THIS;

USE REPLACE_THIS;

CREATE TABLE users (
  id INT UNSIGNED NOT NULL AUTO_INCREMENT,
  username varchar(80) NOT NULL,
  highscore INT NOT NULL DEFAULT '0',
  cart_style varchar (20) NOT NULL DEFAULT 'white',
  PRIMARY KEY (id)
);

CREATE TABLE scores (
  id INT UNSIGNED NOT NULL AUTO_INCREMENT,
  score INT NOT NULL default 0,
  user_id INT UNSIGNED NOT NULL REFERENCES users(id);
)

/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/
