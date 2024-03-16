ServerEvents.recipes(event => {
    const r = event.recipes.create.cutting

    r("2x create:shaft", "#forge:andesite_alloy")
})