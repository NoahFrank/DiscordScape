class DiscordUser {
    constructor(id, username, discriminator) {
        this.id = id;
        this.username = username;
        this.discriminator = discriminator;
    }

    getID() {
        return this.id;
    }

    getName() {
        return this.username;
    }

    getDiscordUsername() {
        return `${this.username}#${this.discriminator}`;
    }
}

module.exports = DiscordUser;