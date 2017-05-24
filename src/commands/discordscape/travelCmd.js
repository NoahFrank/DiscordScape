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
            examples: ['travel ZARROCK']
        });
    }

    run(message, args) {
        const player_id = message.author.id;

        return storage.getItem(player_id)
            .then( (player) => {
                player.location.name = args[0];
                storage.setItem(player.location.name, args[0])
                    .then(() => {
                        //console.log(player.location);
                        return `Welcome to the town of ${player.location.name}!`;
                    })
                    .catch ( (err) => {
                        return 'Could not set the location in storage';
                    })
            })
            .catch( (err) => {
                return `Uh.. hello? That's not a real place!`;
            });
    }
}

