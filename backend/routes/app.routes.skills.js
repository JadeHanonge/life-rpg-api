const express = require('express');
const { getAllSkill } = require('../controllers/app.controller.skills');

const router = express.Router();

// Route pour récupérer tous les projets
router.get('/skills', getAllSkill);

module.exports = router;
