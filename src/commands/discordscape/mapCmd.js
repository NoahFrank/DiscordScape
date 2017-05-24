const graf = require('discord-graf');
const LOCS = require('../../locations');

module.exports = class MapCommand extends graf.Command {
    constructor(bot) {
        super(bot, {
            name: 'map',
            module: 'discordscape',
            memberName: 'map',
            description: 'Where should that booty go?',
            usage: 'map',
            details: 'Gives a list of possible locations your player can visit.',
            examples: ['map']
        });
    }

    run(message, args) {

        var locations_list = '```';
        for (var i = 0; i < LOCS.enumValues.length; i++) {
            locations_list += `(${i+1}) ${LOCS.enumValues[i].name} \n`
        }
        locations_list += '```'

        return Promise.resolve('Where would you like to go?\n'+locations_list);
    }
}