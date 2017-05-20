const graf = require('discord-graf');

module.exports = class TestCommand extends graf.Command {
    constructor(bot) {
        super(bot, {
            name: 'add-numbers',
            aliases: ['add', 'add-nums'],
            module: 'general',
            memberName: 'add',
            description: 'Adds numbers together.',
            usage: 'add-numbers <number> [number2] [number3...]',
            details: 'This is an incredibly useful command that finds the sum of numbers. This command is the envy of all other commands.',
            examples: ['add-numbers 42 1337'],
            argsType: 'multiple'
        });
    }

    run(message, args) {
        if(!args[0]) throw new graf.CommandFormatError(this, message.guild);
        const total = args.reduce((prev, arg) => prev + parseFloat(arg), 0);
        return Promise.resolve(`Sum: ${total}`);
    }
};