ServerEvents.recipes(event => {
    event.remove({ type: "crafting_shaped", output: "stick" })

    event.forEachRecipe({ type: "crafting_shapeless", input: "#logs", output: "#planks" }, r => {
        event.remove({ id: r.getId() })
        event.shapeless(Item.of(r.originalRecipeResult.id, 2), r.originalRecipeIngredients[0])
    })

    event.shaped("2x stick", ["P", "P"], {
        P: "#planks"
    })
})
