// const Discord = require('discord.js');
// const client = new Discord.Client();
//
// client.on('ready', () => {
//     console.log('I am ready!');
// });
//
// client.on('message', message => {
//     if (message.content === 'ping') {
//     message.reply('pong');
// }
// });
//
// client.login('MzE1NTY3MTg4NTUzNzYwNzY4.DAIm9Q.uFlHUz8U6CcYeEMjp-U4u_PTb4o');


const graf = require('discord-graf');

const version = '0.0.1';
const bot = new graf.Bot({
    name: 'DiscordScape',
    version: version,
    about: `**DiscordBot** v${version} created by Noah and Cole.`,
    updateURL: 'https://raw.githubusercontent.com/NoahFrank/DiscordScape/master/package.json',
    token: 'MzE1NTY3MTg4NTUzNzYwNzY4.DAIm9Q.uFlHUz8U6CcYeEMjp-U4u_PTb4o',
    commandPrefix: '.'
});


const TestCommand = require('./commands/general/testcommand');
// const SomeOtherCommand = require('./commands/general/some-other-command');
// const YetAnotherCommand = require('./commands/some-mod/another-command');

const client = bot
    .registerDefaults()
    .registerModules([
        ['general', 'General'],
        ['discordscape', 'DiscordScape']
    ])
    .registerCommands([
        TestCommand
    ])
.createClient();