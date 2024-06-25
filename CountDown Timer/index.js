const dayselement = document.querySelector(".days")
const hourelement = document.querySelector(".hours")
const minuteelement = document.querySelector(".minutes")
const secondelement = document.querySelector(".seconds")
let h1 = document.querySelector("h1")
const timerdiv = document.querySelector(".timer")


const second = 1000,
      minute = 60 * second,
      hour = 60 * minute,
      day = 24 * hour;

    const timerfunc = ()=>{
       
      let now = new Date();

      let dd = String(now.getDate()).padStart(2, "0");
      let mm = String(now.getMonth() + 1).padStart(2, "0");
      let yyyy = now.getFullYear();

      // console.log(`${dd}/${mm}/${yyyy}`)

      function getValidDay() {
         let day;
         do {
             day = prompt("Enter Day");
             if (isNaN(day) || day < 1 || day > 31) {
                 alert("Please provide a valid day between 1 and 31.");
             }
         } while (isNaN(day) || day < 1 || day > 31);
         return day.toString().padStart(2, "0");
     }
     
     function getValidMonth() {
         let month;
         do {
             month = prompt("Enter Month");
             if (isNaN(month) || month < 1 || month > 12) {
                 alert("Please provide a valid month between 1 and 12.");
             }
         } while (isNaN(month) || month < 1 || month > 12);
         return month.toString().padStart(2, "0");
     }
     
     const enterday = getValidDay();
     const entermonth = getValidMonth();
     
     console.log(`Day: ${enterday}, Month: ${entermonth}`);
     
     


      // const enterday = prompt("Enter Day").padStart(2, "0")
      // const entermonth = prompt("Enter Month").padStart(2, "0")

      now = `${mm}/${dd}/${yyyy}`
      let targetdate = `${entermonth}/${enterday}/${yyyy}`
    

      if (now > targetdate){
          targetdate = `${entermonth}/${enterday}/${yyyy +1}`
      }



       const intervalid = setInterval(() => {
        const timer = new Date(targetdate).getTime();
        const today = new Date().getTime();                          // here we need to put today new date beacause if we put it now timer will pause setinterval will not work
        const diff = timer - today;

        const leftday = (Math.floor(diff / day));
        const lefthour = (Math.floor(diff % day /hour));
        const leftminute = (Math.floor(diff % hour / minute));
        const leftsec = (Math.floor(diff % minute /second));

        dayselement.innerText = leftday
        hourelement.innerText = lefthour
        minuteelement.innerText = leftminute 
        secondelement.innerText = leftsec

        if(diff < 0){
         timerdiv.style.display = "none";
         h1.innerText = "ALL DOWN"
         clearInterval(intervalid)
        }

        
       }, 1000);
    }



    timerfunc() 