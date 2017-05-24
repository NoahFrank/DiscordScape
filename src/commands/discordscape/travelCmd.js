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
        const player_id = message.author.id;
        var givenLoc = args[0];
        while (givenLoc.includes('_') || givenLoc.includes(' ')) {
            givenLoc = givenLoc.replace('_', '').replace(' ', '');
        }
        return storage.getItem(player_id)
            .then( (player) => {
                var newLoc;
                for (var i = 0; i < LOCS.enumValues.length; i++) {
                    if (LOCS.enumValues[i].name.replace('_', '') === givenLoc.toUpperCase()) {
                        newLoc = LOCS.enumValues[i];
                    }
                }
                player.location = newLoc;
                return storage.setItem(player_id, player)
                    .then(() => {
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

