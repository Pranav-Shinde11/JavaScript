const btn = document.querySelector("button")

const PI = (name, age)=>{
    let income = Math.floor(Math.random()*120000)
    // console.log(new Date())

    // let eat = veg
    // if(eat){
    //     eat = "veg";
    // }else{
    //     eat ="non-veg"
    // }
    console.log(`My name is ${name}, I am ${age} year old, i earn  $${income} per month`)
}
//  const customtimeout = setTimeout(PI,5000, "pranav", 22 , "veg" )
const customtimeout = setInterval(PI,2000, "pranav", 22)



// setTimeout((name, age, eat)=>{
//     console.log(`My name is ${name}, I am ${age} year old, i eat ${eat} food`),
//     1000,
//     "Pranav Shinde",
//     22,
//     "non-veg"
// })

// btn.addEventListener("click", ()=>{
//     // console.log(customtimeout)
//     clearTimeout(customtimeout)
// })

btn.addEventListener("click", ()=>{
    // console.log(customtimeout)
    clearInterval(customtimeout)
})

