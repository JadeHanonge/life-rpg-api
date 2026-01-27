const db = require('../config/db');

//recuperer all quest
const getALLQuests = (req, res) => {
    db.query('SELECT * FROM quests', (err, results) => {
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



module.exports = {
    getALLQuests, getDailyQuests, getWeeklyQuests, getMainQuests,
    getSideQuests, getRestQuests
}
