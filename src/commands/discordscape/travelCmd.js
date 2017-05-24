const graf = require('discord-graf');
const LOCS = require('../../locations');
const storage = require('../../index').Storage;

module.exports = class TravelCommand extends graf.Command {
    constructor(bot) {
        super(bot, {
            name: 'travel',
            module: 'discordscape',
            memberName: 'travel',
            description: 'Move that booty somewhere else.',
            usage: 'travel',
            details: 'Moves the player to specified location.',
            examples: ['travel ZARROCK'],
            argType: 'single'
        });
    }

    run(message, args) {
        if (args[0].length === 0) {
            return Promise.resolve(`Please enter a location found on your "map"`);
        }
        const player_id = message.author.id;

        let givenLoc = args[0];
        while (givenLoc.includes('_') || givenLoc.includes(' ')) {
            givenLoc = givenLoc.replace('_', '').replace(' ', '');
        }

        return storage.getItem(player_id)
            .then( (player) => {
                let newLoc = null;
                for (let loc of LOCS.enumValues) {
                    if (loc.name.replace('_', '') === givenLoc.toUpperCase()) {
                        newLoc = loc;
                        break;
                    }
                }
                if (newLoc) { // If this new location is valid
                    player.location = newLoc;
                    return storage.setItem(player_id, player)
                        .then(() => {
                            return `Welcome to the town of ${player.location.pretty_name}!`;
                        })
                        .catch ( (err) => {
                            return `Failed to travel to ${args[0]}`;
                        })
                } else { // Could not find the given location
                    return `Please enter a valid location found on your "map"`;
                }
            })
            .catch( (err) => {
                return `Please create a character by running the "register" command!`;
            });
    }
};

