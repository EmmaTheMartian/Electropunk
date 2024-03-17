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
        "minecraft:barrel",

        "create:andesite_alloy",
        "create:shaft",
        "create:fluid_tank",
        "create:belt_connector",
        "create:water_wheel",
        "create:large_water_wheel",
        "create:hand_crank",
        "create:fluid_pipe",

        "turtlechargingstation:thundercharge_dynamo",
        "turtlechargingstation:turtle_charging_station",

        "railcraft:bronze_ingot",
        "railcraft:brass_ingot",
        "railcraft:invar_ingot",
        "railcraft:low_pressure_steam_boiler_tank",
        "railcraft:high_pressure_steam_boiler_tank",
        "railcraft:solid_fueled_firebox",
        "railcraft:fluid_fueled_firebox",
        // "railcraft:iron_tank_wall",
        // "railcraft:iron_tank_valve",
        // "railcraft:iron_tank_gauge",
        // "railcraft:steel_tank_wall",
        // "railcraft:steel_tank_valve",
        // "railcraft:steel_tank_gauge",

        /factorium:mat_.*_plate/,
    ])

    event.remove({ type: "crafting_shaped", input: "iron_nugget", output: /minecraft:chainmail_.*/, id: /mna:.*/ })

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

    removeAll({ type: "create:compacting" }, [
        "create_dd:steel_ingot"
    ])

    //ANCHOR - Farmer's Delight
    removeAll({ type: "farmersdelight:cutting" }, [
        "flint",
    ])

    //ANCHOR - Railcraft
    removeAll({ type: "railcraft:blasting" }, [
        "railcraft:steel_ingot",
        "railcraft:steel_block",
    ])
})
