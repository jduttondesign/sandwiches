var SandwichMaker = (function(maker){
 var breadPrices = {
 HoneyOat: .50, 
 Rye: .50, 
 White: .25, 
 Wheat: .25, 
 NoBread: .00
};

 // Private variable to store the different bread prices
	maker.addCondiment = function(pick) {
    if (pick in breadPrices) {
    breadToppingPrice = breadPrices[pick];
	}
  };

  maker.getBreadToppingPrice = function() {
  	return breadToppingPrice;
};
 // Return the new, augmented object with the new method on it
 return maker;
})(SandwichMaker || {});