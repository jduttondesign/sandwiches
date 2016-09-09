
var SandwichMaker = (function() {
var totalPrice = 0;

  // Private variable to store the price
  

  // Return the public interface that other code can interact with
  return {
    addTopping: function(toppingPrice) {
      totalPrice += toppingPrice;
      console.log(totalPrice);
      display.innerHTML=totalPrice;
  
    
    // getTotalPrice: function(){
    // 	return totalPrice;


    }

  };
})();