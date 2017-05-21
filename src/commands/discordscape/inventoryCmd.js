const graf = require('discord-graf');

module.exports = class InventoryCommand extends graf.Command {
    constructor(bot) {
        super(bot, {
            name: 'inventory',
            aliases: ['inv'],
            module: 'discordscape',
            memberName: 'inventory',
            description: 'Displays the player\'s inventory',
            usage: 'inventory [page number]',
            details: 'Displays which items are in a player\'s inventory and the quantity of each of item.',
            examples: ['inv', 'inventory', 'inv 2'],
            argsType: 'multiple',
            argsCount: 2
        });
    }

    run(message, args) {
        if(!args[0]) throw new graf.CommandFormatError(this, message.guild);
        const player_name = message.author;
        // Need to implement keystore to pull playerid info from then return inventory
        return Promise.resolve(`Sum: ${total}`);
    }
};