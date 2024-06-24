const name = document.getElementById("name")
const addtotags = document.querySelector(".tags")

const addname = ()=>{
    console.log(name.value)

    const tag = document.createElement("div")
    tag.setAttribute("class" , "tag")

    tag.innerText = `Hey, I am ${name.value}`

     addtotags.append(tag)

}