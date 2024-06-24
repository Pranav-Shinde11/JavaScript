const url = "https://catfact.ninja/fact";


const h1 = document.querySelector("h1")



// const fetchdata = async()=>{
//    const response = await fetch(url);
//    console.log(response)
//    const data = await response.json()
//    h1.innerHTML = data.fact;
// }

// fetchdata().catch((e)=>{                      //for error handling
//     console.log(e)
// })




// const fetchdata = async()=>{

//     try {
//         const response = await fetch(url);
//         console.log(response)
//         const data = await response.json()
//         h1.innerHTML = data.fact;
        
//     } catch (error) {
//         console.log(error.message)                               // error handling by using try catch block
//     }                                                            // try-catch block is considered mandatory with the async function
    
//  }
 
//  fetchdata()


// const fetchdata = async()=>{

//     try {
//         throw new Error (" Mi kahihi karin")
//         const response = await fetch(url);
//         // console.log(response)
//         const data = await response.json()
//         h1.innerHTML = data.fact;
//         // throw new Error (" Mi kahihi karin")
//     } catch (error) {
//         console.log(error.message)                               
//     } finally{
//         console.log("green flag 💚")
//     }                                                           
    
//  }
 
//  fetchdata()


// const e = new Error("mi kahihi karin")
// e.name = "kay laka"                                // error modification
// console.log(e.message)
// console.log(e.name)