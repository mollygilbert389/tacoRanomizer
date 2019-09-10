$(document).ready(function() {

$("#recipe").hide()
$("#meatType").hide()

$("#getAtaco").on("click", function() {
    
    var queryURL = "https://taco-randomizer.herokuapp.com/random/"

    
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
        $("#recipe").show()
      
        let newName = tacoName.toLowerCase()
        console.log(newName)
        let beef = newName.includes("beef")
        let steak  = newName.includes("steak")
        let pork = newName.includes("pork")
        let chicken = newName.includes("chicken")
        let lamb = newName.includes("lamb")
        let carnitas = newName.includes("carnitas")
        let turkey = newName.includes("turkey")

        if (beef || steak || pork || chicken || lamb || carnitas || turkey) {
            $("#meatType").hide()
        }
        else {
            $("#meatType").show()
        }

        $("#recipe").text(recipe)

    
    
    });
  });

})