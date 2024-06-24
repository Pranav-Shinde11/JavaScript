const mybtn = document.getElementById("mybtn")
const box1 =document.getElementById("box1")
const heading = document.getElementById("heading")


mybtn.addEventListener("click", ()=>{
    // console.log("clicked")
    box1.classList.add("classbox")
})

function func1() {
    mybtn.style.transform = "scale(1.2)";
    box1.style.backgroundColor ="pink"   
}

box1.addEventListener("mouseover", func1)

// box1.removeEventListener("mouseover", func1)



box1.addEventListener("mouseleave", ()=>{
    mybtn.style.transform = ""
    box1.style.backgroundColor =""
})

mybtn.addEventListener("contextmenu", (e)=>{
    e.preventDefault()
    mybtn.style.backgroundColor="red";
})

// addEventListener("contextmenu", (e)=>{
//     e.preventDefault()
//     heading.style.filter ="blur(5px)"
// })


addEventListener("click" , (e)=>{
    console.log(e.clientX)
    console.log(e.clientY)
})

