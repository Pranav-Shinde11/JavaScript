// function sum(a,b){
//    const result = a + b;
//    displaysum(result);
// }

// // console.log(sum(22,30));

   

// function displaysum(result){

//     const h1 = document.querySelector("h1")
//     h1.innerText= result ;
// }

// sum(11,11)

// the fuction which we call in the arguement of the other function is known as the callback function

//  function sum(a,b,c){                          // the function in which we call the callback fuction is known as the high order function and here c is the callback fuction
//     const result = a + b;
//     c(result);
//  }
 
//  // console.log(sum(22,30));
 
    
 
//  function displaysum(result){
//      const h1 = document.querySelector("h1")
//      h1.innerText= result ;
//  }
 
//  sum(11,22,displaysum)
//  sum(77,55,alert)






// arr = [11,22,33,44,55];

// function calculatormulti (arr=[]){
//     const ans = [];
//      for( i = 0 ; i < arr.length; i++){
//         ans.push(arr[i] *10);
//      }

//      console.log(ans)
// }

// calculatormulti(arr)

// arr = [11,22,33,44,55];

// function calculatordivide (arr=[]){
//     const ans = [];
//      for( i = 0 ; i < arr.length; i++){
//         ans.push(arr[i] / 10);
//      }

//      console.log(ans)
// }

// calculatordivide(arr)                             //in above code snippet the code is repeating which is not good practice so we will try using callback function to avoid writing repetative code


// arr = [11,22,33,44,55];

// function calculator (arr=[], callback){
//     const ans = [];
//      for( i = 0 ; i < arr.length; i++){
//         ans.push(callback(arr[i]));
//      }

//      console.log(ans)
// }

// function multi(a){
//     return a * 10;
// }

// function divide(a){
//     return a /10;
// }

// calculator(arr , multi);
// calculator(arr, divide)                                   // this is how we can write compact code using callback function




// arr = [11,22,33,44,55];

// function calculator (arr=[], callback){
//     const ans = [];
//      for( i = 0 ; i < arr.length; i++){
//         ans.push(callback(arr[i]));
//      }

//      console.log(ans)
// }

// calculator(arr, (a) => a * 10);
// calculator(arr, (a) => a / 10);
// calculator(arr, (a) => a + 10);                             // more optimised



const gamelist = [];
const game = {};

const fetchdata = (callback) => {
    setTimeout((callback)=>{
        gamelist.push(
            {
                name : "game1",
                game_id : "1qwe",
            },
            {
                name : "game2",
                game_id : "2adf",
            },
            {
                name : "game3",
                game_id : "3qfgh",
            }
        );

        console.log("after fetching")




        setTimeout((callback) => {
            game.id = "eeeeee",
            game.name = "game 1"
            callback();
            console.log(game.id)
        },2000, callback);




        console.log(gamelist)
        // callback();  
    }, 4000, callback);
};

// console.log(gamelist)
// fetchdata();
// console.log(gamelist)


const display = () =>{
  setTimeout(()=>{
    for (let index = 0; index < gamelist.length; index++) {
    const p =  document.createElement("p")
    p.innerText= gamelist[index].name;
    document.body.append(p)    
    }
    console.log("after displaying")
    },2000)
}

fetchdata(display);