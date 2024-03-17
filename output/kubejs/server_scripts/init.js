// priority: 1000

const ingotsToPlates = {
    "minecraft:copper_ingot": "#forge:plates/copper",
    "minecraft:iron_ingot": "#forge:plates/iron",
    "minecraft:gold_ingot": "#forge:plates/gold",
}

ServerEvents.tags("item", event => {
    event.add("forge:plates", /railcraft:.*_plate/)
})

PlayerEvents.loggedIn(event => {
    if (!event.player.persistentData.givenInventory) {
        event.player.persistentData.givenInventory = true

        event.player.give(Item.of("cookie")
            .withName(Component.gold("Fortune Cookie"))
            .withLore([Component.aqua("Take this gift; and prepare for perilous road ahead. -Astra")]))
    }
})
