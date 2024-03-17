ServerEvents.recipes(event => {
    const r = (result, input, slagOutput, time) => {
        event.custom({
            type: "railcraft:blasting",
            cookingTime: time,
            experience: 0.0,
            ingredient: input.toJson(),
            result: result.toJson(),
            slagOutput: slagOutput
        })
    }


    r(Item.of("create_dd:steel_ingot"), Item.of("create_dd:industrial_iron_ingot"), 1, 800)
    r(Item.of("create_dd:steel_block"), Item.of("create_dd:industrial_iron_block"), 9, 800 * 9)
})