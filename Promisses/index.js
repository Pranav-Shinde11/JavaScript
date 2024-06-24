// const a  = new Promise ( (resolve, reject) =>{
//      reject("forbidden")
// })  


// a.then(
//     (status)=>{
//         console.log(status)    // then method take the clla=back function in the argument , the first fuction work for resolve and second function wor fpr the reject            
//     },                         // by using then method we can catch both but for good practice use catch method to catch error
//     (error)=>{
//         console.log(error)
//     }
// )


// const a  = new Promise ( (resolve, reject) =>{
//     const hungry = false;

//     if(hungry){console.log("give me a food")}
//     else{console.log("i am not hungry")}
// })  


// a.then(
//     (message)=>{
//         console.log(message)
//     }
// ).catch(
//     (error)=>{
//         console.log(error)
//     }
// )

// const arr = [];
// const fetchdata = (arr =[]) =>{
//     return new Promise ((resolve, reject)=>{
      
//         setTimeout(() => {

//             arr.push({name : "lavatakd"})
//             if(arr.length < 1){reject("data not fetched")}
//             else{resolve("data fetched")}
            
//         }, 3000);
//     })
// }

// fetchdata(arr)
//    .then((message)=> console.log(message))
//    .then(()=> console.log("2"))
//    .then(()=> console.log("4"))               // wwe can create chain of the multiple then
//    .then(()=> console.log("6"))

//    .catch((error)=> console.log(error))
//    .finally(()=> console.log("will work either way"))

