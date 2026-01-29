const express = require('express');
const { getPlayerByID, getPlayerMainSkills, getPlayerPassiveSkills, getPlayerStat, getPlayerStatName } = require('../controllers/app.controller.player');

const router = express.Router();

router.get('/player/:id', getPlayerByID);
router.get('/player-main-skills', getPlayerMainSkills)
router.get('/player-passive-skills', getPlayerPassiveSkills)
router.get('/player-stat', getPlayerStat)


module.exports = router;