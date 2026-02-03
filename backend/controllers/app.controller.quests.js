const db = require('../config/db');

//GET
//recuperer all quest
const getALLQuests = async (req, res) => {
    try{
        const [rows] = await db.query('SELECT q.id, q.name AS quest_name, q.done, q.rewards, t.name AS quest_type FROM quests q JOIN type_quest t ON q.type_quest_id = t.id');
        //console.log("quests: ", rows);  
        res.json(rows);
    }catch (err){
        res.status(500).json({ error: 'Unable to get quests'});
    }
     
}


//PUt
//changer le statu done
const updateStateQuest = async (req,res) => {
    const {id} = req.params;
    const {done} = req.body;

    try {
        await db.query("UPDATE quests SET done = ? WHERE id = ?", [done, id]);
        res.json({message: 'State updates successfully'});

    }catch (err){
        res.status(500).json({ error: 'Unable to update the state of the quest'});
    }
}





module.exports = {
    getALLQuests, updateStateQuest
}
