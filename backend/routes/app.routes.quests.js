const express = require('express');
const { getALLQuests, updateStateQuest } = require('../controllers/app.controller.quests');

const router = express.Router();

router.get('/quests', getALLQuests)
router.put('/updateStateQuest/:id', updateStateQuest)


module.exports = router;