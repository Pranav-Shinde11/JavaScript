
const input = document.getElementById("numOfwords")
const container = document.querySelector(".container")


const generateword = (n)=>{
    let word ="";
    const Alpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    for(i =0; i< n; ++i){
        const random = (Math.random() * 25).toFixed(0);
        word += Alpha[random];
    } return word;
}
// console.log(generateword(56));






const generatepara = (()=>{
    const numberOfwords = Number(input.value);
    console.log(numberOfwords)

    // const sample =generateword((Math.random()*10).toFixed(0))
   
    let data = "";

    for(let i = 0; i < numberOfwords; ++i){
        const random =(Math.random()*10).toFixed(0)
        data += generateword(random).toLowerCase()
        data += " "
    }
    // console.log(data)

    const para = document.createElement("p")
    para.innerText = data
    para.setAttribute("class", "paras" )

    container.append(para)
    
})
// generatepara()