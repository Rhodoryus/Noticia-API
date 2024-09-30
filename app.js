const express = require('express');
const mongoose = require('mongoose');
const newsRoutes = require('./routes/news');
const swaggerSetup = require('./swagger');

const app = express();
app.use(express.json());

// Conexão com o MongoDB
mongoose.connect('mongodb://localhost:27017/news-api', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Conectado ao MongoDB'))
    .catch(err => console.error('Erro ao conectar ao MongoDB:', err));

// Usando rotas
app.use('/news', newsRoutes);

// Configurando o Swagger
swaggerSetup(app);

// Iniciando o servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
