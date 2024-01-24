const cart = ["kurta","shirt","paint"];
const promise = createOrder(cart);
promise.then(function(orderId){
    console.log(orderId);
})
.catch(function(err){
    console.log(err);
});
function createOrder(cart){

    const pr = new Promise(function(resolve,reject){
          if(!isValidate(cart)){
            const err=new Error("this cart is not valide");
            reject(err);
          }
          const orderId="12345"
          if(!orderId){
            resolve(orderId)
          }

    })
    return pr;
}
function isValidate(cart){
    return true;
}
