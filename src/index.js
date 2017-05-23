const storage = require('node-persist');
const graf = require('discord-graf');
const config = require('config');

// init storage where we store player data
storage.init({
    dir: '../storage'
});

module.exports.Storage = storage;

const version = '0.0.1';
const bot = new graf.Bot({
    name: 'DiscordScape',
    version: version,
    about: `**DiscordBot** v${version} created by Noah and Cole.`,
    updateURL: 'https://raw.githubusercontent.com/NoahFrank/DiscordScape/master/package.json',
    token: config.get('key'),
    commandPrefix: '.'
});


const RegisterCommand = require('./commands/discordscape/registerCmd');
const InventoryCommand = require('./commands/discordscape/inventoryCmd');

const client = bot
    .registerDefaults()
    .registerModules([
        ['general', 'General'],
        ['discordscape', 'DiscordScape']
    ])
    .registerCommands([
        RegisterCommand,
        InventoryCommand
    ])
.createClient();