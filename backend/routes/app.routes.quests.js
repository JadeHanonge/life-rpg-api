const express = require('express');
const { getALLQuests, updateStateQuest, addQuest, getQuestsType, deleteQuest} = require('../controllers/app.controller.quests');

const router = express.Router();

router.get('/quests', getALLQuests);
router.get('/questType', getQuestsType);
router.put('/updateStateQuest/:id', updateStateQuest);
router.post('/addQuest', addQuest);
router.delete('/deleteQuest/:id', deleteQuest);

module.exports = router;