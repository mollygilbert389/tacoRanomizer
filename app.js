$(document).ready(function() {

    let tacoName = ""

$("#getAtaco").on("click", function() {
    
    var queryURL = "http://taco-randomizer.herokuapp.com/random/"

    
      $.ajax({
      url: queryURL,
      method: "GET"
    })
      .then(function(response) {
        console.log(response)
        let tacoName = response.base_layer.name
        let recipe = response.base_layer.recipe
        
        $("#yourTaco").empty()
        $("#yourTaco").append(tacoName + " Taco")
      
        let newName = tacoName.toLowerCase()
        console.log(newName)
        let beef = newName.includes("beef")
        let steak  = newName.includes("steak")
        let pork = newName.includes("pork")
        let chicken = newName.includes("chicken")
        let lamb = newName.includes("lamb")
        let carnitas = newName.includes("carnitas")

        if (beef || steak || pork || chicken || lamb || carnitas) {
            $("#meatType").empty()
            $("#meatType").append("Carnivore Taco")
            $("#recipe").text(recipe)
        }
        else {
            $("#meatType").empty()
            $("#meatType").append("Vegetarian Taco")
            $("#recipe").text(recipe)
        }


    
    
    });
  });

})