DROP TABLE IF EXISTS tools;

CREATE TABLE tools (
  id serial PRIMARY KEY,
  name text NOT NULL,
  series text UNIQUE NOT NULL,
  oring integer NOT NULL,
  connection text NOT NULL,
  length integer NOT NULL,
  weight integer NOT NULL,
  voltage integer NOT NULL
);

CREATE TABLE users (
  id serial PRIMARY KEY,
  username text UNIQUE NOT NULL,
  password text NOT NULL
);