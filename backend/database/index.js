const sqlite3 = require('sqlite3').verbose();

let db = new sqlite3.Database('./mydb.sqlite3', (err) => {
  if (err) {
    console.error(err.message);
  }
  console.log('Connected to the mydb.sqlite3 database.');
});

//This code creates a new table named files with columns for id, name, size, and path.
db.run(`CREATE TABLE files (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    size INTEGER,
    path TEXT
  )`, (err) => {
    if (err) {
      console.error(err.message);
    }
    console.log('Created files table.');
  });


