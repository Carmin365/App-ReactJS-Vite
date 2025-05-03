const express = require('express');
const cors = require('cors');
const db = require('./db');

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());


app.post('/cadastro', (req, res) => {
  const { name, email, phone } = req.body; 

  if (!name || !email) {
    return res.status(400).json({ error: 'Nome e email são obrigatórios.' });
  }

  const stmt = db.prepare('INSERT INTO users (name, email, phone) VALUES (?, ?, ?)'); // Insere phone
  stmt.run(name, email, phone, function (err) {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: 'Erro ao inserir no banco.' });
    }
    res.json({ success: true, id: this.lastID }); 
  });
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});