const db = require('../config/db');

//GET
//recuperer all quest
const getALLQuests = (req, res) => {
    db.query('SELECT q.id, q.name AS quest_name, q.done, q.rewards, t.name AS quest_type FROM quests q JOIN type_quest t ON q.type_quest_id = t.id', 
        (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(results);

    })
}

//recupere les daily uniquement
const getDailyQuests = (req,res) => {
    db.query('SELECT * FROM quests WHERE type_quest_id = 1', (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(results);

    })
}

//recupere les weekly uniquement
const getWeeklyQuests = (req,res) => {
    db.query('SELECT * FROM quests WHERE type_quest_id = 2', (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(results);

    })
}

//recupere les main uniquement
const getMainQuests = (req,res) => {
    db.query('SELECT * FROM quests WHERE type_quest_id = 3', (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(results);

    })
}

//recupere les side uniquement
const getSideQuests = (req,res) => {
    db.query('SELECT * FROM quests WHERE type_quest_id = 4', (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(results);

    })
}

//recupere les side uniquement
const getRestQuests = (req,res) => {
    db.query('SELECT * FROM quests WHERE type_quest_id = 5', (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(results);

    })
}

//PUt
//changer le statu done
const updateStateQuest = (req,res) => {
    const {id} = req.params;
    const {done} = req.body;

    try {
        db.query("UPDATE quests SET done = ? WHERE id = ?", [done, id]);
        res.json({message: 'State updates successfully'});

    }catch (err){
        res.status(500).json({ error: 'Unable to update the state of the quest'});
    }
}





module.exports = {
    getALLQuests, getDailyQuests, getWeeklyQuests, getMainQuests,
    getSideQuests, getRestQuests, updateStateQuest
}
