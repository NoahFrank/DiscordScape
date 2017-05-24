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

        let locations_list = '```';
        for (let loc of LOCS.enumValues) {
            locations_list += `- ${loc.pretty_name} \n`
        }
        locations_list += '```';

        return Promise.resolve('Where would you like to go?\n'+locations_list);
    }
};