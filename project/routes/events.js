const express = require('express');
const mongoose = require('mongoose');
const app = express();

const Evento = mongoose.model('Evento', new mongoose.Schema({
  titulo: String,
  descricao: String,
  data: Date,
  local: String
}));
app.get('/eventos', (req, res) => {
  Evento.find({}, (err, eventos) => {
    if (err) {
      return res.status(500).send({ message: "Erro ao buscar eventos" });
    }
    res.status(200).json(eventos);
  });
});

mongoose.connect('mongodb://localhost/eventos', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Conectado ao MongoDB');
    app.listen(3000, () => {
      console.log('Servidor rodando na porta 3000');
    });
  })
  .catch(err => {
    console.log('Erro ao conectar ao MongoDB', err);
  });