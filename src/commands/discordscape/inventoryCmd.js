const graf = require('discord-graf');
const storage = require('../../index').Storage;

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
            examples: ['inv', 'inventory', 'inv 2']
        });
    }

    run(message, args) {
        const player_id = message.author.id;
        // Pull playerid info from storage then return inventory
        return storage.getItem(player_id)
            .then( (player) => {
                return `You have ${player.inventory.gold} gold, and ${player.inventory.items.length} items.`;
            })
            .catch( (err) => {
                return `Please create a character by running the "register" command!`;
            });
    }
};