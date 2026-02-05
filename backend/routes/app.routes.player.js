const express = require('express');
const { getPlayerByID, getPlayerStat, updatePlayerXp, updateStat, updatePlayerLevel } = require('../controllers/app.controller.player');

const router = express.Router();

router.get('/player/:id', getPlayerByID);
router.get('/player-stat', getPlayerStat)
router.put('/updateXp/:id', updatePlayerXp);
router.put('/updateStat/:id', updateStat);
router.put('/updatePlayerLevel/:id', updatePlayerLevel)


module.exports = router;