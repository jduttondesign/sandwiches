  var SandwichMaker = (function(maker){
  	var condimentPrices = {
  	Mustard: .25,
  	Ketchup: .25,
  	Relish: .25,
  	Mayonaise: .25,
  	NoCondiments: .00
    };
	
// Augment the original object with another method
	maker.addCondiments = function(pick) {
    if (pick in condimentsPrices) {
    condimentsToppingPrice = condimentsPrices[pick];
	}
  };

  maker.getCondimentsToppingPrice = function() {
  	return condimentsToppingPrice;
};

 // Return the new, augmented object with the new method on it
    return maker;
})(SandwichMaker || {});