/* 
object //leterals


*/
const jsuser ={

    name: "Amit",
    age:13,
    location:"dto",
    email:"amit@gmail.com",
    isLoggeIn:false
}

console.log(jsuser.email);
console.log(jsuser["email"]);

jsuser.greetingTwo = function(){
    console.log(`hello js user, ${this.location}`);

}
console.log(jsuser.greetingTwo());