const db = require('../config/db');
const { updateStateDaily, updateStateWeekly } = require('../services/app.services');

//GET
//recuperer all quest
const getALLQuests = async (req, res) => {
    try {
        await updateStateDaily();
        await updateStateWeekly();
        const [rows] = await db.query('SELECT q.id, q.name AS quest_name, q.done, q.rewards, t.name AS quest_type FROM quests q JOIN type_quest t ON q.type_quest_id = t.id');
        //console.log("quests: ", rows);  
        res.json(rows);
    } catch (err) {
        res.status(500).json({ error: 'Unable to get quests', err });
    }
}

//recupere le type de quest et leur id
const getQuestsType = async (req, res) => {
    try {
        const [rows] = await db.query(`SELECT * FROM type_quest`);
        res.json(rows);
    } catch (err) {
        res.status(500).json({ error: 'Unable to get quests type', err });
    }
}

//get the steps of the quest
const getStepQuest = async (req, res) => {
    const {id} = req.params;
    
    try {
        const [rows] = await db.query(`SELECT * FROM quest_step WHERE quest_id = ?`, [id]);
        res.json(rows);
    }catch (err) {
        res.status(500).json({ error: 'Unable to get quests step', err });
    }
}


//PUT
//changer le statu done
const updateStateQuest = async (req, res) => {
    const { id } = req.params;
    const { done, date } = req.body;

    try {
        await db.query("UPDATE quests SET done = ? , last_reset = ? WHERE id = ?", [done, date, id]);
        res.json({ message: 'State updates successfully' });

    } catch (err) {
        res.status(500).json({ error: 'Unable to update the state of the quest', err });
    }
}


//POST
//add a quest
const addQuest = async (req, res) => {
    const { name, typeQuestId, rewards } = req.body;
    //console.log("name: ",name, "typeId: ", typeQuestId, "rewards: ", rewards);

    try {
        await db.query(`INSERT INTO quests (name, type_quest_id, rewards)
            VALUES (?, ?, ?)
        `, [name, typeQuestId, JSON.stringify(rewards)]);
        res.json({ message: 'Quest add successfully' });

    } catch (err) {
        res.status(500).json({ error: 'Unable to add the quest', err });
    }
}

//add step to a quest
const addStepQuest = async (req,res) => {
    const {id} =req.params;
    const {step} = req.body;
    
    try{
        await db.query(`INSERT INTO quest_step (quest_id, step)
            VALUES (?, ?)
        `, [id, step]);
        res.json({ message: 'Step add successfully' });
        
    } catch (err){
        res.status(500).json({ error: 'Unable to add the step', err });
        console.log(err);
        
    }
}



//DELETE
//delete a quest
const deleteQuest = async (req, res) => {
    const { id } = req.params;
    console.log("id: ", id);


    try {
        await db.query(`DELETE FROM quests WHERE id = ?`, [id]);
        res.json({ message: 'Quest delete successfully' });

    } catch (err) {
        res.status(500).json({ error: 'Unable to delete the quest', err });
    }
}





module.exports = {
    getALLQuests, getStepQuest, updateStateQuest, addQuest, addStepQuest, getQuestsType, deleteQuest
}
