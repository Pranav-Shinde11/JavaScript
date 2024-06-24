const title = document.getElementById("title")
const description = document.getElementById("description")
const form = document.querySelector("form")
const container = document.querySelector(".container")



// const tasks = [];
const tasks = localStorage.getItem("tasks") ? JSON.parse(localStorage.getItem("tasks")) : [];

showalltask();



function showalltask(){
    tasks.forEach((value, index)=>{
        const div = document.createElement("div")
        div.setAttribute("class","tasks")
    
        const innerdiv = document.createElement("div")
        div.append(innerdiv)
    
        const p = document.createElement("p")
        p.innerText = value.title
        innerdiv.append(p)
    
        const span = document.createElement("span")
        span.innerText = value.description
        innerdiv.append(span)
        
        const button = document.createElement("button")
        button.setAttribute("class" , "delbutton")
        button.innerText = "-"

        button.addEventListener("click",()=>{
            removetask()
            tasks.splice(index,1)
            // console.log(tasks)
            localStorage.setItem("tasks", JSON.stringify(tasks))
            showalltask()
        })
        div.append(button)

        container.append(div)
    })
}

function removetask(){
    tasks.forEach(()=>{
        const div = document.querySelector(".tasks")
        div.remove();
    })
}

form.addEventListener("submit", (e)=>{
    e.preventDefault();
    removetask();

    tasks.push({
        title: title.value,
        description:description.value
    })
    console.log(tasks)

    localStorage.setItem("tasks", JSON.stringify(tasks))
    showalltask();
})

