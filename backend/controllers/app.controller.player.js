const db = require('../config/db');

//founction pour tous ce qui vien du player
//recupere un player par son ID, reupere level + xp + pseudo
const getPlayerByID = (req,res) => {
    const{id} = req.params;
    
     db.query('SELECT * FROM player WHERE id = ?', [id], (err, results) => {
        if (results.length === 0) {
            return res.status(404).json({ error: 'player not found' });
        }
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(results);
    });
           
    
};

//recupere main skill
const getPlayerMainSkills = (req,res) => {
    db.query('SELECT * FROM player_skills WHERE player_id = 1 AND type_skill_player_id = 1', (err, results) => {
        if (results.length === 0) {
            return res.status(404).json({ error: 'player skill not found' });
        }
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(results);
    })
}

//recupere passive skill
const getPlayerPassiveSkills = (req,res) => {
    db.query('SELECT * FROM player_skills WHERE player_id = 1 AND type_skill_player_id = 2', (err, results) => {
        if (results.length === 0) {
            return res.status(404).json({ error: 'player skill not found' });
        }
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(results);
    })
}

//recupere les stat du joueur
const getPlayerStat = (req,res) => {
    db.query('SELECT stat.name, player_stat.point FROM player_stat JOIN stat ON player_stat.stat_id = stat.id ', 
        (err, results) => {
            if (results.length === 0) {
                return res.status(404).json({ error: 'player stat not found' });
            }
            if (err) {
                return res.status(500).json({ error: err.message });
            }
            res.json(results);
        }   
    )
}

//fetch name stat by their id
const getPlayerStatName = (req,res) => {
    
    db.query('SELECT * FROM stat', (err, results) => {
        if (results.length === 0) {
            return res.status(404).json({ error: 'Stat not found' });
        }
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(results);
    })
}



module.exports = {
    getPlayerByID, getPlayerMainSkills, getPlayerPassiveSkills, getPlayerStat,
    getPlayerStatName
}