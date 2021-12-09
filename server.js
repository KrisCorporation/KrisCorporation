const sqlite3 = require('sqlite3');

// open database in memory
let db = new sqlite3.Database('test.db', (err) => {
  if (err) {
    return console.error(err.message);
  }
  console.log('Connected to the in-memory SQlite database.');
});

db.run(`CREATE TABLE test(
	id INTEGER PRIMARY KEY AUTOINCREMENT,
	name TEXT)`
);

db.run('INSERT INTO test(id,name) VALUES (?)',[0,"coucou"]);
db.all('SELECT * FROM artists_backup',(err,data) => console.log(data));
// close the database connection
db.close((err) => {
  if (err) {
    return console.error(err.message);
  }
  console.log('Close the database connection.');
});
