ServerEvents.recipes(event => {
    /**
     * @param {Internal.RecipeFilter_} filter
     * @param {Internal.Ingredient_[]} items
     * @param {Internal.ItemStack} replace
     * @param {Internal.ItemStack} replaceWith
     */
    const replaceMany = (filter, items, replace, replaceWith) => items.forEach(element =>
        event.replaceInput(Object.assign({}, { output: element }, filter), replace, replaceWith));


    replaceMany({ type: "minecraft:crafting_shaped" }, [
        "iron_axe",
        "iron_pickaxe",
        "iron_sword",
        "iron_shovel",
        "iron_hoe",
        "iron_helmet",
        "iron_chestplate",
        "iron_leggings",
        "iron_boots",
        "bucket",
    ], "iron_ingot", "#forge:plates/iron")

    replaceMany({ type: "minecraft:crafting_shaped" }, [
        "golden_axe",
        "golden_pickaxe",
        "golden_sword",
        "golden_shovel",
        "golden_hoe",
        "golden_helmet",
        "golden_chestplate",
        "golden_leggings",
        "golden_boots",
    ], "gold_ingot", "#forge:plates/gold")

    replaceMany({ type: "minecraft:crafting_shaped" }, [
        "railcraft:steel_axe",
        "railcraft:steel_pickaxe",
        "railcraft:steel_sword",
        "railcraft:steel_shovel",
        "railcraft:steel_hoe",
        "railcraft:steel_helmet",
        "railcraft:steel_chestplate",
        "railcraft:steel_leggings",
        "railcraft:steel_boots",
    ], "#forge:ingots/steel", "#forge:plates/steel")

    event.replaceInput({ type: "crafting_shaped", output: "create:mechanical_press", input: "iron_block" }, "iron_block", "#forge:ingots/iron")
})