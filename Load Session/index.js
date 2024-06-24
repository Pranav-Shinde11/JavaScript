const myinput =document.getElementById("myinput")
const mybtn =document.getElementById("mybtn1")
const delbtn = document.getElementById("mybtn2")

// const click =  ()=>{
//     // alert(myinput.value);
//     localStorage.setItem("key1" , myinput.value);
// }
const click =  ()=>{
    // alert(myinput.value);
    localStorage.setItem("key1" , JSON.stringify({ name:"Pranav", surname:"Shinde"}));
}

mybtn.addEventListener("click",click)
delbtn.addEventListener("click", ()=>{
//    console.log(sessionStorage.key(1))
// sessionStorage.removeItem("key1")
   localStorage.clear()

})

if(localStorage.getItem("key1")){
    // alert(localStorage.getItem("key1"))
    console.log(JSON.parse(localStorage.getItem("key1")))
}
