const express = require('express');
const { getALLQuests, getDailyQuests, getWeeklyQuests, getMainQuests, getSideQuests, getRestQuests, updateStateQuest } = require('../controllers/app.controller.quests');

const router = express.Router();

router.get('/quests', getALLQuests)
router.get('/quests/dayly', getDailyQuests)
router.get('/quests/weekly', getWeeklyQuests)
router.get('/quests/main', getMainQuests)
router.get('/quests/side', getSideQuests)
router.get('/quests/rest', getRestQuests)
router.put('/updateStateQuest/:id', updateStateQuest)


module.exports = router;