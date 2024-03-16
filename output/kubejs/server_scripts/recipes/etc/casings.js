ServerEvents.recipes(event => {
    const badCasingsToGoodCasings = {
        "create:andesite_casing": "create_dd:andesite_sheet",
        "create:copper_casing": "#forge:plates/copper",
        "create:brass_casing": "#forge:plates/brass",
        "create_dd:steel_casing": "#forge:plates/steel",
        "create_dd:tin_casing": "#forge:plates/tin",
        "create_dd:zinc_casing": "#forge:plates/zinc",
        "create_dd:bronze_casing": "#forge:plates/bronze",
        "createutilities:void_casing": "createutilities:void_steel_sheet",
    }

    event.forEachRecipe({ type: "create:item_application" }, recipe => {
        if (Object.keys(badCasingsToGoodCasings).includes(recipe.originalRecipeResult.id)) {
            event.remove({ id: recipe.getId() })
            event.recipes.create.item_application(
                recipe.originalRecipeResult,
                [recipe.originalRecipeIngredients[0], badCasingsToGoodCasings[recipe.originalRecipeResult.id]]
            )
        }
    })
})
