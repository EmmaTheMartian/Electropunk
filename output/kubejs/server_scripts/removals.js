ServerEvents.recipes(event => {
    /**
     * @param {Internal.RecipeFilter_} filter
     * @param {Internal.Ingredient_[]} array
     */
    const removeAll = (filter, toRemove) => toRemove.forEach(element =>
        event.remove(Object.assign({}, { output: element }, filter)))


    //ANCHOR - Minecraft
    removeAll({ type: "crafting_shaped" }, [
        "minecraft:crafting_table",
        "minecraft:furnace",
        "minecraft:blast_furnace",
        "minecraft:smoker",
        "minecraft:chest",
        "minecraft:hopper",

        "create:andesite_alloy",
        "create:shaft",
        "create:fluid_tank",
        "create:belt_connector",
        "create:water_wheel",
        "create:large_water_wheel",
        "create:hand_crank",

        "turtlechargingstation:thundercharge_dynamo",
        "turtlechargingstation:turtle_charging_station",

        "railcraft:bronze_ingot",
        "railcraft:brass_ingot",
        "railcraft:invar_ingot",

        /factorium:mat_.*_plate/,
    ])

    removeAll({ type: "crafting_shapeless" }, [
        "create:cogwheel",
        "create:large_cogwheel",
    ])

    //ANCHOR - Create
    removeAll({ type: "create:mixing" }, [
        "create:andesite_alloy",
        "create:brass_ingot"
    ])

    removeAll({ type: "create:cutting" }, [
        "create:shaft",
    ])

    removeAll({ type: "create:deploying" }, [
        "create:cogwheel",
        "create:large_cogwheel",
    ])

    //ANCHOR - Farmer's Delight
    removeAll({ type: "farmersdelight:cutting" }, [
        "flint",
    ])

    //ANCHOR - Factorium
    removeAll({ type: "factorium:alloy" }, [
        "#forge:ingots/brass"
    ])
})
