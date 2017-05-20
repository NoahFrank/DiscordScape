const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
    message.reply('pong');
}
});

client.login('MzE1NTY3MTg4NTUzNzYwNzY4.DAIm9Q.uFlHUz8U6CcYeEMjp-U4u_PTb4o');