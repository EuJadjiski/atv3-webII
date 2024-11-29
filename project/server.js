const express = require('express');
const mongoose = require('mongoose');
const app = express();

app.use(express.json());

app.post('/eventos', (req, res) => {
    const novoEvento = req.body;
    res.status(201).json({
        message: 'Evento criado com sucesso!',
        evento: novoEvento
    });
});

  mongoose.connect('mongodb://localhost:27017/eventos')
  .then(() => console.log('Conectado ao MongoDB!'))
  .catch((err) => console.error('Erro ao conectar ao MongoDB:', err));

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});