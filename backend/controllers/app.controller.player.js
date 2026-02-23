const db = require('../config/db');

//founction pour tous ce qui vien du player
//recupere un player par son ID, reupere level + xp + pseudo
const getPlayerByID = async (req,res) => {
    const{id} = req.params;
    try {
        const [rows] = await db.query('SELECT * FROM player WHERE id = ?', [id]);
        res.json(rows);
    }catch (err){
        res.status(500).json({ error: 'Unable to fetch player'});
    }   
};

//recupere les stat du joueur
const getPlayerStat = async (req,res) => {
    try{
        const [rows] = await db.query('SELECT stat.name, player_stat.point, stat.id FROM player_stat JOIN stat ON player_stat.stat_id = stat.id ');
        res.json(rows);
    }catch (err){
        res.status(500).json({ error: 'Unable fetxh the stat of the player'});
    }
}



//PUT
//change the xp of player
const updatePlayerXp = async (req, res) => {
    const {id} = req.params;
    const {xp} = req.body;

    try {
        await db.query("UPDATE player SET xp = ? WHERE id = ?", [xp, id]);
        res.json({message: 'Xp updates successfully'});

    }catch (err){
        res.status(500).json({ error: 'Unable to update the xp'});
    }
}

//change the level of the player
const updatePlayerLevel = async (req, res) => {
    const {id} = req.params;
    const {level, maxXp} = req.body;

    try {
        await db.query("UPDATE player SET level = ? , max_xp = ? WHERE id = ?", [level, maxXp, id]);
        res.json({message: 'Level updates successfully'});

    }catch (err){
        res.status(500).json({ error: 'Unable to update the level'});
    }
}

//modification des stats
const updateStat = async (req, res) => {
    const {id} = req.params;
    const {point, stat_id} = req.body;
     
    try{
        await db.query("UPDATE player_stat SET point = ? WHERE player_id = ? AND stat_id = ?", [point, id, stat_id])
        res.json({message: 'Stat updates successfully'});
    }catch (err){
        res.status(500).json({ error: 'Unable to update the stat of the player'});
    }
}



module.exports = {
    getPlayerByID, getPlayerStat,
    updatePlayerXp, updateStat, updatePlayerLevel
}