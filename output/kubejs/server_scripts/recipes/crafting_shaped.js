ServerEvents.recipes(event => {
    const r = event.recipes.minecraft.crafting_shaped

    //ANCHOR - minecraft:*
    r("crafting_table", ["PP", "LL"], {
        P: "#planks",
        L: "#logs",
    })

    r("furnace", ["SSS", "C C", "CBC"], {
        S: "smooth_stone_slab",
        C: "#forge:ingots/copper",
        B: "brickfurnace:brick_furnace",
    })

    r("blast_furnace", ["SSS", "I I", "IBI"], {
        S: "smooth_stone_slab",
        I: "#forge:ingots/iron",
        B: "brickfurnace:brick_blast_furnace",
    })

    r("smoker", ["III", "C C", "CBC"], {
        I: "iron_trapdoor",
        C: "#forge:ingots/copper",
        B: "brickfurnace:brick_smoker",
    })

    r("chest", ["PPP", "PIP", "PPP"], {
        P: "#planks",
        I: "#forge:nuggets/iron"
    })

    //ANCHOR - create:*
    r("create:andesite_alloy", ["AZ", "ZA"], {
        A: "andesite",
        Z: "#forge:ingots/zinc"
    })

    r("2x create:shaft", ["Z", "Z", "Z"], {
        Z: "#forge:andesite_alloy"
    })

    r("create:cogwheel", ["SPS", "PHP", "SPS"], {
        P: "#planks",
        S: "stick",
        H: "create:shaft"
    })

    r("create:large_cogwheel", ["SPS", "PHP", "SPS"], {
        P: "#planks",
        S: "stick",
        H: "create:cogwheel"
    })

    r("create:fluid_tank", ["CCC", " B ", "CCC"], {
        C: "#forge:plates/copper",
        B: "barrel"
    })

    r("create:belt_connector", ["RRR", "R R", "RRR"], {
        R: "create_dd:rubber"
    })

    r("create:water_wheel", ["LLL", "LCL", "LLL"], {
        L: "#forge:stripped_logs",
        C: "create:gearbox"
    })

    r("create:large_water_wheel", ["LLL", "LCL", "LLL"], {
        L: "#forge:stripped_logs",
        C: "create:water_wheel"
    })

    r("create:hand_crank", ["S  ", "LLL", "  S"], {
        S: "create:shaft",
        L: "#forge:stripped_logs"
    })

    //ANCHOR - Create D&D
    r("create_dd:andesite_sheet", ["AAA"], {
        A: "#forge:andesite_alloy"
    })
})