const url = "https://catfact.ninja/fact";


const h1 = document.querySelector("h1")


// const fetchdata = ()=>{
//     fetch(url).then((response)=>{
//          console.log(response)
//          return response.json();
//     }).then((data)=>{
//         console.log(data)                    
//     })
// }

// fetchdata()                                  // below makinng this code short



const fetchdata = ()=>{
    fetch(url)
    .then((response)=> response.json())
    // .then((data)=>console.log(data))
    .then((data)=>h1.innerText = data.fact)
    .catch((e)=> console.log(e))
    .finally(()=> console.log("all done"))
}

fetchdata()    