var SandwichMaker = (function(maker){
var veggiePrices = {
Lettuce: .35, 
Peppers: .50, 
Onions: .50, 
Pickles: .25, 
NoVeggies: .00
};
	

	maker.addVeggies = function(pick) {
    if (pick in veggiesPrices) {
    veggiesToppingPrice = veggiesPrices[pick];
	}
  };

  maker.getVeggiesToppingPrice = function() {
  	return veggiesToppingPrice;
};

 // Return the new, augmented object with the new method on it
  return maker;
})(SandwichMaker || {});