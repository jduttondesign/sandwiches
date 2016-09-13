// Variable to hold the final price. Default to 0.
var finalSandwichPrice = 0;
var display = document.getElementById("output");
// Variable to hold topping that the user selects
var selectedTopping;

// Get a reference to the <select> element that has all the meat options
var breadChooser = document.getElementById("bread");
var MeatChooser = document.getElementById("Meat");
var cheeseChooser = document.getElementById("cheese");
var veggiesChooser = document.getElementById("veggies");
var condimentsChooser = document.getElementById("condiments");
var meatToppingPrice = 0;
var breadToppingPrice = 0;
var veggieToppingPrice = 0;
var condimentsToppingPrice = 0;
var cheeseToppingPrice = 0;

//display.innerHTML += " Place order:";
/* 
  A <select> element broadcasts a change event, so you listen for it
  and get the value of the topping from your augmented IIFE
*/

// breadChooser.addEventListener("change", function(event) {
//   // Get the value chosen from the DOM
//   selectedTopping = event.target.value;
// });

MeatChooser.addEventListener("change", function(event) {
  selectedTopping = event.target.value;

 SandwichMaker.addMeat(selectedTopping);
 
 // Add the topping to the SandwichMaker to increase the total price
 SandwichMaker.addTopping(SandwichMaker.getMeatToppingPrice());
 display.innerHTML += selectedTopping + " " + SandwichMaker.getMeatToppingPrice() + "<br>";
});

cheeseChooser.addEventListener("change", function(event) {
   selectedTopping = event.target.value;
	console.log (selectedTopping);
   SandwichMaker.addCheese(selectedTopping);
 // Add the topping to the SandwichMaker to increase the total price
 SandwichMaker.addTopping(SandwichMaker.getCheeseToppingPrice());
 display.innerHTML += selectedTopping + " " + SandwichMaker.getCheeseToppingPrice() + "<br>";
});

 veggiesChooser.addEventListener("change", function(event) {
   selectedTopping = event.target.value;

   SandwichMaker.addVeggies(selectedTopping);
 // Add the topping to the SandwichMaker to increase the total price
 SandwichMaker.addTopping(SandwichMaker.getVeggiesToppingPrice());
 display.innerHTML += selectedTopping + " " + SandwichMaker.getVeggiesToppingPrice() + "<br>";
});


 condimentsChooser.addEventListener("change", function(event) {
   selectedTopping = event.target.value;

   SandwichMaker.addCondiments(selectedTopping);
 // Add the topping to the SandwichMaker to increase the total price
 SandwichMaker.addTopping(SandwichMaker.getCondimentsToppingPrice());
 display.innerHTML += selectedTopping + " " + SandwichMaker.getCondimentsToppingPrice() + "<br>";
});

