
 var SandwichMaker = (function(maker){
 var meatPrices = { 
 Turkey: 1.00,
 Ham: 1.25,
 Bacon: 1.25,
 Chicken: 1.75,
 NoMeat: .00
};

 // Augment the original object with another method
 maker.addMeat = function(pick) {
   if (pick in meatPrices) {
     meatToppingPrice = meatPrices[pick];
   }
 };

 maker.getMeatToppingPrice = function() {
   return meatToppingPrice;
 };

 // Return the new, augmented object with the new method on it
 return maker;
})(SandwichMaker || {});
	
