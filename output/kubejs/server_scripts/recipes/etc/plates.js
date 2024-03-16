ServerEvents.recipes(event => {
    /**
     * @param {Internal.ItemStack} result
     * @param {string[]} pattern
     * @param {{[key in string]: Internal.InputItem_}} key
     * @returns {Internal.RecipeJS}
     */
    const r = (result, pattern, key) => {
        const keyJson = {}
        Object.keys(key).forEach(k => {
            keyJson[k] = key[k].toJson()
        })
        event.custom({
            type: "railcraft:rolling",
            key: keyJson,
            pattern: pattern,
            result: result.toJson(),
        })
    }

    const recipes = event.findRecipes({ type: "create:pressing", output: "#forge:plates" })
    event.remove({ type: "railcraft:rolling", output: "#forge:plates" })
    event.remove({ type: "create:pressing", output: "#forge:plates" })
    recipes.forEach(recipe => {
        event.recipes.create.compacting(recipe.getOriginalRecipeResult(), recipe.getOriginalRecipeIngredients()[0].asIngredient().withCount(2))
        r(recipe.getOriginalRecipeResult().copyWithCount(2), ["III"], { I: recipe.getOriginalRecipeIngredients()[0].asIngredient() })
    })
})
