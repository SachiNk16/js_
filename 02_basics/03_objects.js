// singleton



//object literals

const mysym= Symbol("key1")


const jsuser ={
name: "Sachin",
"full name":"sachin kumar",
[mysym]:"mykey1",
age:20,
location:"delhi",
email:"sachin@gmail.com"


}

console.log(jsuser.age);
console.log(jsuser["age"]);
console.log(jsuser["full name"]);
console.log(jsuser[mysym]);

jsuser.email="sachin@kumar.com"
Object.freeze(jsuser)

console.log(jsuser);
