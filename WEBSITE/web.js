console.log(`Hello`);
window.alert(`Message from Snoopy`);
window.alert(`Let's watch PEANUTS together?`);

//document.getElementById("H1").textContent = `HELLO There!!`;

//VARIABLES
//string
let name = "Snoopy";
//number
let age = 19;
//boolean
let x = true;

document.getElementById("p1").textContent = `Hi There`;
//document.getElementById("p2").textContent = `I'm ${age} years old`;
//document.getElementById("p3").textContent = x;

//ARITHMETIC OPERATOR
//same with c
//follows PE(modulo)MDAS
let a = 10;
a += age;
console.log(a);

//USER INPUT
//let user;
//user = window.prompt('What is your name?');
//console.log(user);

document.getElementById("submit").onclick = function(){
    user = document.getElementById("text").value;
    document.getElementById("p1").textContent = `Hello My BABYYY ${user}`;
}


