  var SandwichMaker = (function(maker){
  var cheesePrices = {
 	American: .25, 
 	Swiss: .50, 
 	Jack: .50, 
 	Cheddar: .50, 
 	NoCheese: .00
 };

	maker.addCondiment = function(pick) {
    if (pick in cheesePrices) {
    cheeseToppingPrice = cheesePrices[pick];
	}
  };

    maker.getCheeseToppingPrice = function() {
  	return cheeseToppingPrice;
};


 // Return the new, augmented object with the new method on it
 return maker;
})(SandwichMaker || {});