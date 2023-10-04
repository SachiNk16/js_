//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

//console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    //console.log("Hello world");
}

//console.log(typeof anotherId);












// ********************************************************************

// Stack(primitive) ,   Heap(non-primitive)

let myyoutubename ="sachinkumar"
let anothername = "myyoutubename"
//console.log(anothername);
//console.log(myyoutubename);



let userone ={
    email: "sachin@gmail.com",
    Upi: "user@bl"
}

let usertwo= userone
usertwo.email="kumar@gmail.com"

console.log(userone.email);
console.log(usertwo.email);