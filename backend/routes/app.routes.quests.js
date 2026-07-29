const express = require('express');
const { getALLQuests, updateStateQuest, addQuest, getQuestsType, deleteQuest, addStepQuest, getStepQuest, deleteQuestStep } = require('../controllers/app.controller.quests');

const router = express.Router();

router.get('/quests', getALLQuests);
router.get('/questType', getQuestsType);
router.get('/questStep/:id', getStepQuest)
router.put('/updateStateQuest/:id', updateStateQuest);
router.post('/addQuest', addQuest);
router.post('/addStepQuest/:id', addStepQuest);
router.delete('/deleteQuest/:id', deleteQuest);
router.delete('/deleteQuesStep/:id', deleteQuestStep);


module.exports = router;