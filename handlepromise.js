const cart = ["paints","shirt","kurta"];

const promise= createOrder(cart);

promise.then(function(orderId)
{
    console.log(orderId);
})

function createOrder(cart){
    const pr = new Promise(function(resolve,reject){
        if(!isValidate(cart)){
            const err= new Error("cart is not valid")
            reject(err);  
        } 
        const orderId="12345";
        if(!orderId){
            resolve(orderId);
        }
    });
    return pr;
    
}
function isValidate(cart){
    return true;
}