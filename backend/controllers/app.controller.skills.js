const db = require('../config/db');

// Fonction pour récupérer tous les projets
const getAllSkill = (req, res) => {
  db.query('SELECT * FROM skills', (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }

    res.json(results);
  });
};

module.exports = {
  getAllSkill
};
