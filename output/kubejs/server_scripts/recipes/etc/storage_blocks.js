ServerEvents.recipes(event => {
    event.forEachRecipe({ type: "crafting_shaped", output: "#forge:storage_blocks" }, recipe => {
        event.remove({ type: "crafting_shaped", output: recipe.originalRecipeResult })
        event.recipes.create.compacting(recipe.originalRecipeResult, recipe.originalRecipeIngredients[0].asStack().withCount(recipe.originalRecipeIngredients.length))
    })
})
