const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const dbPath = path.join(__dirname, 'slnx.sqlite'); 
const db = new sqlite3.Database(dbPath, (err) => {
  if (err) {
    console.error('Erro ao abrir banco:', err);
  } else {
    console.log('Conectado ao banco slnx.sqlite');
  }
});


db.run(
  `
  CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    phone TEXT  -- Adicionei o campo phone
  )
`,
  (err) => {
    
    if (err) {
      console.error('Erro ao criar tabela:', err);
    }
  }
);

module.exports = db;