ServerEvents.recipes(event => {
    event.remove({ type: "smelting", output: "#ingots" })
})
