const graf = require('discord-graf');
const storage = require('../../index').Storage;

module.exports = class ExploreCommand extends graf.Command {
    constructor(bot) {
        super(bot, {
            name: 'explore',
            module: 'discordscape',
            memberName: 'explore',
            description: 'Discover the area around you!',
            usage: 'explore',
            details: 'Gives a list of possible actions your player can take at their current location.',
            examples: ['explore']
        });
    }

    run(message, args) {
        const player_id = message.author.id;
        // Pull playerid info from storage then print explore options from location
        return storage.getItem(player_id)
            .then( (player) => {
                return `Your current location is ${player.location.pretty_name} : ${player.location.explore}`;
            })
            .catch( (err) => {
                return `Please create a character by running the "register" command!`;
            });
    }
};