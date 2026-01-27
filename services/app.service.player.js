const playerService = require("../backend/controllers/app.controller.player")

//reshape player stat data
const PlayerStats = () => {
    const player_stat = playerService.getPlayerStat();
    const stat_name = playerService.getPlayerStatName();

}