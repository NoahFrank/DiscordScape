const Skills = require('./skills');
const Inventory = require('./inventory');
const LOCS = require('./locations');

class Player {
    constructor(discord_username) {
        this.owner = discord_username;
        this.level = 1;
        this.hitpoints = 50;
        this.skills = new Skills();
        this.inventory = new Inventory();
        this.location = LOCS.UMBRIDGE; // Default location of player is Umbridge
    }
}

module.exports.Player = Player;