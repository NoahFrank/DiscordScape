class Monster {
    constructor(monster_name, description, total_hp, attack, defence, xp_given, drops) {
        this.monster_name = monster_name;
        this.description = description;
        this.current_hp = total_hp;
        this.total_hp = total_hp;
        this.attack = attack;
        this.defence = defence;
        this.xp_given = xp_given;
        this.drops = drops;
    }

    get getLevel() {
        return Math.floor((this.total_hp + this.attack + this.defence) / 2); // TODO: Monsters look stronger or weaker?
    }

    isDead() {
        return this.current_hp <= 0;
    }
}

module.exports = Monster;