const db = require('../config/db');

//put the status of quest undone of daily quest.
const updateStateDaily = async () => {
    await db.query(`UPDATE quests SET done = false 
        WHERE type_quest_id = 1
        AND done = true 
        AND last_reset < CURRENT_DATE
        `
    );
}

//put the status of quest undone for weekly quest.
const updateStateWeekly = async () => {
    const isMonday = new Date().getDay() === 1;
    if(isMonday){
        await db.query(`UPDATE quests SET done = false, last_reset = CURRENT_DATE 
            WHERE type_quest_id = 2 
            AND done = true
        `)
    }
}

module.exports = {
    updateStateDaily, updateStateWeekly
}