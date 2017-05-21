class Item {
    constructor(name, description, sell_value, effect) {
        this.name = name;
        this.description = description;
        this.sell_value = sell_value;

        this.effect = effect; // function that performs an item's effect
    }
}

module.exports.Item = Item;