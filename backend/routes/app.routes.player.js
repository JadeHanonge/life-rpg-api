const express = require('express');
const { getPlayerByID, getPlayerStat, updatePlayerXp } = require('../controllers/app.controller.player');

const router = express.Router();

router.get('/player/:id', getPlayerByID);
router.get('/player-stat', getPlayerStat)
router.put('/updateXp/:id', updatePlayerXp);


module.exports = router;