const cart=["shirt","kurta","paints"];
async function  createOrder(){
   return "Amit kumar verma";
}

const num=createOrder();
console.log(num);

const p = new Promise((reslove,reject) =>{
    reslove("promise resolved")
})
async function handlePromise(){
    const k = await p;
    console.log(k);
}
handlePromise();