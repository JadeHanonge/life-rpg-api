
const express = require('express');
const cors = require('cors');
const playerRoutes = require('./backend/routes/app.routes.player');
const questsRoutes = require('./backend/routes/app.routes.quests')

const app = express();
const port = process.env.port;

// Middleware pour gérer les requêtes cross-origin
app.use(cors({
  origin: process.env.FRONT_URL,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true,
}));

app.options('*', cors());

// Utiliser les routes définies dans routes.js
app.use(express.json());
app.use('/api', playerRoutes, questsRoutes);

// Lancer le serveur
app.listen(port, () => {
  console.log(`Serveur API lancé sur http://localhost:${port}`);
});
