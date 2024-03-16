ServerEvents.recipes(event => {
    const r = event.recipes.create.mixing

    r("create:andesite_alloy", ["andesite", "#forge:ingots/zinc"]).heated()
    r("2x create:andesite_alloy", ["andesite", "#forge:ingots/zinc"]).superheated()

    r("create:brass_ingot", ["#forge:ingots/copper", "#forge:ingots/zinc"]).heated()
    r("2x create:brass_ingot", ["#forge:ingots/copper", "#forge:ingots/zinc"]).superheated()
})