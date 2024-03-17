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

    const plateRecipe = (plate, ingot) => {
        event.recipes.create.compacting(Item.of(plate), Item.of(ingot, 2))
        r(Item.of(plate), ["III"], { I: Ingredient.of(ingot) })
    }

    const recipes = event.findRecipes({ type: "create:pressing", output: "#forge:plates" })
    event.remove({ type: "railcraft:rolling", output: "#forge:plates" })
    event.remove({ type: "create:pressing", output: "#forge:plates" })
    recipes.forEach(recipe => {
        // event.recipes.create.compacting(recipe.getOriginalRecipeResult(), recipe.getOriginalRecipeIngredients()[0].asIngredient().withCount(2))
        // r(recipe.getOriginalRecipeResult().copyWithCount(2), ["III"], { I: recipe.getOriginalRecipeIngredients()[0].asIngredient() })
        plateRecipe(recipe.originalRecipeResult.id, recipe.originalRecipeIngredients[0].getFirst().id)
    })

    plateRecipe("railcraft:invar_plate", "#forge:ingots/invar")
    plateRecipe("railcraft:lead_plate", "#forge:ingots/lead")
    plateRecipe("railcraft:silver_plate", "#forge:ingots/silver")
})
