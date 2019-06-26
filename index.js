var cart = [];

function getCart(){ return cart;}

function setCart(c){
  cart.push(c);
  return cart;
}

/*1) addToCart() can add items to the cart
2) addToCart() turns items into JavaScript objects before adding them to the cart
3) addToCart() properly structures the cart item as object with a key of `itemName` and the corresponding value { itemName: itemName } format
4) addToCart() sets the price (integer between 1 and 100) on the cart object using the key `price`
5) addToCart() chooses the price at random
6) addToCart() returns a message indicating that the item has been added*/

function addToCart(item){
    var shopping={
        itemName: [item],
        itemPrice:  Math.floor(Math.random() * Math.floor(100))
    }
    cart.push(shopping)
    return `${cart} has been added to your cart.`;
}




































// var cart = [];

// function getCart() {
// return cart;
// }

// function setCart(c) {
//   cart = c;
//   return cart;
// }

// // function getRandom(){
// //   return Math.floor(Math.random() * Math.floor(100))
// // }
// function addToCart(item) {
// // write your code here
//   var shopping = {
//   itemName: item,
//   itemPrice: Math.floor(Math.random() * Math.floor(100))
// };
// cart.push(shopping);
// return `${shopping.itemName} has been added to your cart.`;
// }

// function viewCart() {
//   // write your code here
//   if(!cart.length){
//     return `Your shopping cart is empty.`;
    
//   } 
  
//   for(var i = 0; i < cart.length; i++){
//       if(cart.length == 1){
    
//       return `In your cart, you have ${getCart()[0].itemName} at $${getCart()[0].itemPrice}.`;
   
//       }else if(cart.length == 2){
    
//           return `In your cart, you have ${getCart()[0].itemName} at $${getCart()[0].itemPrice}, and ${getCart()[1].itemName} at $${getCart()[1].itemPrice}.`;
//       } else {
//         return `In your cart, you have ${getCart()[0].itemName} at $${getCart()[0].itemPrice}, ${getCart()[1].itemName} at $${getCart()[1].itemPrice}, and ${getCart()[2].itemName} at $${getCart()[2].itemPrice}.`;
//       }
      
//   } 
  
  
// }

// function total() {
//   // write your code here
  
//   var totalCost= 0;
//   for(var i= 0; i < cart.length; i++){
//     totalCost = getCart()[i].itemPrice + totalCost;
//   }
//   return totalCost;
// }

// function removeFromCart(item) {
//   // write your code here
//   // if(!cart.length){
//   //   return `That item is not in your cart.`;
//   // } else if(cart.length){
//     var itemToRemove= searshItem(item)
   
    
//     return itemToRemove ? removeItem(itemToRemove) : notifyUserThereIsNoItemToRemove();
  
// }
// //itemToRemove ? removeItemFromCart(itemToRemove) : 'That item is not in your cart.'
// function placeOrder(cardNumber) {
//   // write your code here
//   if(!cardNumber){
//     return `Sorry, we don't have a credit card on file for you.`;
    
//   } else{
//     var cartTotal = total()
//     cart.length = 0;
//     return `Your total cost is $${cartTotal}, which will be charged to the card ${cardNumber}.`
//   }
// }




// function searshItem(itemName){
//   var result;
//   for(var i=0; i< getCart().length; i++){
//     if(getCart()[i].itemName === itemName){ result = getCart()[i]; }
    
//   }
//   return result;
// }
// function removeItem(itemToremove){
//   var x = cart.indexOf(itemToremove);
//   getCart().splice(x,1);
// }


