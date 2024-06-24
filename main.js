// alert("you are the king")

// console.log("hi i am pranav")

// let x = 120;

// alert(x)

// let a = 34;
//  console.log(a);
//  a = 45
//  console.log(a);
  
//  let  a  = 23;    #you cannot reclared the vaiable with the same name

// const x = 22;

// console.log(x);
// x = 33;               //we cannot reassign value to the const declared variable

// let c  = "Pranav";
// console.log(c);
// console.log(typeof c);

// let y = true ;
// console.log(y);
// console.log(typeof y);

// let z;
// z = null;

// console.log(z);
// console.log(typeof z);

// let x = 22;

// let s = "pranav"

// let b = true

// console.log(11 + x + b)

// console.log( 33 + 44);
// console.log(x + 11);

// console.log( 11 + x + s)

// let  name  = "Pranav"
// let surname = "Shinde"

// console.log( name +" " + surname)

// console.log("My name is " + name + " " + surname +  ".")

// console.log( `My name is ${name} ${surname}.`)

// const statement = `My name is ${name} ${surname}.`;

// console.log(`good morning all , ${statement}`)










// lecture 2

// let x = "23"

// console.log(typeof x)

// console.log(typeof Number(x))

// let n = 45

// n = n.toString()
// n.toString();
// console.log(typeof n)

// let s = "my name is pranav";

// console.log(s)
// console.log(s[4])
// console.log(s.charAt(9))
//  console.log(s.indexOf('p'))
// console.log(s.substring(4,6)) 
// console.log(s.endsWith('v'))
// console.log(s.length)
// console.log(s.split(" "))
// console.log(s.includes("is"))
// console.log(s.replace("pranav", "Pranav"))



// let head = document.getElementById("myHeading");
// console.log(head)

// head.innerText = s;

// head.style.backgroundColor = "red";












//  lecture 3 

// let icecream = 30;
// let icecream = Number(prompt("kiti wala icecream: "))
// console.log(icecream)

// if(icecream === 10){
//     console.log("dabba icecream ?");
// }else if(icecream === 30){
//     console.log("cone icecream ?");
// }else{
//     console.log("nhi aahe")
// }

// switch(icecream){
//     case 10:
//         console.log("dabba icecream");
//         break;
//     case 30:
//         console.log("cone icecream");
//         break;    
//     default:
//         console.log("nhi aahe");

// }

//  let num  = 1;

// //  console.log(num++)
// //  console.log(num)
//  console.log(++num)
//  console.log(num)


// for (i = 0; i < 10; i = i +2){
//     console.log(Math.random("q"))
//     console.log("A") 
// }



// let i = 1;
// let j = 5;
// while(i<j){
//     console.log(Math.random())
//     console.log("condition is true")
//     ++i;
// }

// let num = "10";
// do{
//     console.log("10")
// }while(num === 10)

// while(num != 10){
//     console.log("10")
// }




















//lecture 4


// let arr = [1,2,3,4,5];
// let  arr1 =["Pranav", "Shinde"];
// let arr2 = [1,2,3,[4,5]]
// console.log(arr1)
// console.log(arr)
// console.log(arr2)

// console.log(arr[2])

// let arr3 = [];

// arr3[0] = 1;
// arr3[1] = 2;
// arr3[3]= 3;
// arr3[4]= 5;
// arr3[2] = 6;

// console.log(arr3)

// let arr4 = new Array(5,6,7,8,9);
// console.log(arr4)

// arr4.push(10)
// arr4.push(11)


// arr4.pop(5)
// arr4.pop()

// arr4.shift()
// arr4.unshift(22)

// let arr = [1,2,3,4,5,6,11,8,9]

// // arr.splice(4,3)

// arr.reverse()
// arr[0]=22222
// console.log(arr)
// let narr = arr.slice(1,5)
// console.log(narr)

// console.log(arr.includes(7))


// let arr = [];

// for(i = 1; i <= 100; ++i){
//     arr.push(i);
    
// }console.log(arr)


// let arr = [];


// for(i = 1; i <= 100; ++i){
//     arr[i] = "Pranav";
    
// }console.log(arr)

// const arr = [];
// arr.push(12);
// arr.push(22);
// arr.push(33);

// // arr = [12]     you cant assign new value to the constant variable
// arr [1] = 55;


// console.log(arr)


// const myobj = { 
//     name: "Pranav",
//     Surname :"Shinde",
//     clg : "dyp"
// }

// console.log(myobj)

// console.log(myobj.name)


// myobj.age = 22;

// console.log(myobj)

// myobj = 22;

















// lecture 5

//  function cubesume(a, b){
//     let result = 0;
//     while(a <= b){
//         result = result + a * a * a;
//         ++a
//     }console.log(result)
//  }

// cubesume(3,4)


// let myfunc = function(a, b){
//     let result = 0;
//     while(a <= b){
//         result = result + a * a * a;
//         ++a
//     }return result;
//  }


//  let ans = myfunc(2,9)
//  console.log(ans)

 

// function printsum (a=2,b=4,c=5){
//     let result = a + b + c;
//     console.log(result);
// }

// printsum(22,33)


// const func = function (a=2,b=4,c=5){
//     let result = a + b + c;
//     return result;
// };

// let sum = func(33,66,88);

// console.log(sum)


// printsum(22,33,44);

// function intro (name = "first name",surname = "last name",college = "college"){
//     console.log(
//         `I am ${name} ${surname}. pursuing my bachelors in ${college}`
//     )
// }

// intro("Pranav", "shinde", "DYP")



// calling functon in another function
// function intro (name = "first name",surname = "last name",college = "college"){
//     console.log(
//         `I am ${name} ${surname}. pursuing my bachelors in ${college}`
//     )

//     console.log(`i remeber sum is ${sum}`)
// }

// intro("Pranav", "shinde", "DYP")


// let arr = [23,34,45,56,67];

// console.log(arr.length)

// function arrsum (arr = []){
//     // let arr = [22,33,44]
//     let sum = 0;
//     for(i = 0; i < arr.length; ++i){
//         sum = sum + arr[i];
//     }
//     console.log(sum)
// }

// let arr = [23,34,45,56,67];
// arrsum(arr)


// let a = 22;

// {
//     // var a = 33
//     // console.log(a)
// }

// console.log(a)



















// lecture 6
// console.log(document.body)
// console.log(document.head)

// console.log(document.documentElement)

// console.log(document.body.firstChild)

// console.log(document.body.firstElementChild)

// console.log(document.body.children)

// const arr = document.body.children

// console.log(arr)


// const newarr = Array.from(arr)
// console.log(newarr)


// for(i = 0; i < newarr.length ; ++ i){
//     console.log(newarr[i])
// }


// const abc  = "wiejf0wef"
// console.log(abc);

// console.log(document.getElementById("abc"))

// console.log(document.getElementsByClassName("qwe"))

// const abc = document.getElementsByClassName("qwe")
// console.log(abc)

// const abc = document.getElementsByClassName("qwe")

// console.log(abc[0])

// const opl = document.getElementsByName("email")

// console.log(opl[0])

// const tyu = document.getElementsByTagName("span")

// console.log(tyu)

// tyu[0].style.backgroundColor = "green";
// tyu[0].innerText = "sgarhadhaeth";
// tyu[0].innerHTML = "<span>dvadvadvadv</span>";


// console.log(btn)

// const btn = document.getElementById("btn")

// // console.log(btn)

// btn.style.backgroundColor = "yellow"
// btn.style.cursor = "pointer"
// btn.style.padding= "2vmax 4vmax"
// btn.style.border = "none"

// // console.log(btn.getAttribute("class"))
// console.log(btn.setAttribute( "class", "set"))


// const btns = document.querySelectorAll("button")

// btns[1].innerText = "asrg"


// function addheading(){
//     const h2 = document.createElement("h2")
//     h2.innerText = "Vocabulary";
//     document.body.prepend(h2);
//     // console.log("click")               we can print like this in fuction to ensure the function in working 
// }
// btn.onclick = addheading;

// // addheading()

// function deleteheading(){
//     const h2 = document.querySelector("h2")
//     h2.remove();
// }

// btns[1].onclick = deleteheading;

















// lecture 7

const arr = [2,3,4,5,6,45,23];

// const myfunc = function qwe(value, index){                method 1
//     if (value === 5){
//         console.log("5 exist")
//     }
// }

// const myfunc = (value, index) => {                        method 2
//     if (value === 5){
//         console.log("5 exist")
//     }
// }


// arr.find((value, index) => {                               method 3
//     if (value === 5){
//         console.log(" exist")
//     }
// })

// arr.find((value, index) => {
//     console.log(index)
// })


// arr.find((value) => {
//     if (value === 45){
//         console.log(value)
//     }
// })

// const result =arr.find((value) => {                         find function return only on valur greater or smaller then the given value to print all the value in the result use filter method
//     if (value < 4){
//         return value;
//     }
// })

// console.log(result)


// const allvalue = arr.filter((value,index)=>{
//     if (value < 3){
//         return value;
//     }
// })

// console.log(allvalue)

// const bool = arr.every((value, index)=>{
//     return value < 77
// })

// console.log(bool)


// const bool = arr.some((value, index)=>{
//     return value > 23
// })

// console.log(bool)

// for ( value of arr) {
//      value += 3;

//     console.log(value )
// }

// arr.forEach((value,index) =>{
//     // console.log(value)
//     console.log(index)
// })

// let totalsum = 0;

// arr.forEach((value,index)=>{
//     totalsum += value;
// })

// console.log(totalsum)


// const change = arr.forEach((value, index)=>{                 foreach method can only make changes in the element and print it does not store manipulated value in the new variable or does not cause any changes to the original array
//      return value + 20;
// })
// console.log(change)

// const change = arr.map((value,index)=>{                      if we want to make changes in the arrays element and store that result in the array format and print it out then we can use map method         it does not cause any changes in the original array
//     value += 20;
//     return value;
// })

// console.log(change)
// console.log(arr)

// const result = arr.reduce((previos, value, index)=>{
//     // console.log(previos)
//     console.log(index)
//     return previos + value;
// })
// console.log(result)


// arr.reduce(( previousvalue,value, index)=>{                  to understand the reduce function print this function parameters one by one 
//     console.log(previousvalue)
//     console.log(value)
//     console.log(index)
// })










//  lecture 8 projects done






















// lecture 9 event listener           in seperate folder


















// lecture 10 math object and Date

// console.log(Math.round(4.5))

// const a = Math.ceil(32.3)
// console.log(a)

// console.log(Math.floor(4.4))

// console.log(Math.pow(3,3))

// console.log(Math.sqrt(23))

// console.log(Math.abs(-11))   //return positive value only

// const fun1 = (a, b)=>{
//     console.log (Math.abs(a -b))
// }

// (fun1(4,12))

// console.log(Math.sin(90*3.14/180))

// console.log(Math.PI)



// const degree = (a)=>{
//    return (a * Math.PI /180)
// }
// console.log(Math.sin(degree(30)))

// console.log(Math.log10(10))


// // const dinank = new Date(2002,02,11);     type of inserting date 1. put it blank it will return cureent date ,  put year , month date format , put yymmdd with hhssmsms , if you put single value it will consider as milisecond 
// // const dinank1 = new Date(2002,11,11);
// // const dinank2 = new Date(2002,12,11);
// // console.log(dinank1)
// // console.log(dinank2)

// const dinank = new Date();
// console.log(dinank.getDate())
// console.log(dinank.getDay())
// console.log(dinank.getFullYear())

// console.log(dinank.toUTCString())

// console.log(dinank.toISOString())


// const tarikh = new Date("2024/05/23")

// tarikh.setHours(55)
// console.log(tarikh)










// local storage and session storage  seperate folder









//  16   Execution context and execution stack 

//  JS is single thread synchronus langauge 





































































