// let a = "Pranav";
// var b = "Shinde";

// console.log("Hey MY name is " + a + " " + b);
// console.log(`Hey MY name is ${a} ${b}.`);

// const statement = `My name is ${a} ${b}.`
// console.log(`what i say ${statement}.`)
// alert("Boom!!!");
// const a = 42;
// const result = `The value of a is ${a}`;
// console.log(result);

var q = 23;                //var is function scoped
//q = typeof String(q);
q = q.toString();
//console.log(typeof Number(q));
console.log(typeof(q));

let w = 'efw';             //you  can resign value of the let  ( let and const are block scoped) 
w = 'qerqer';
console.log(w);

const msg = 'qwert';       //you cannot reasign value of const
msg = 'adfgh';
console.log(msg);