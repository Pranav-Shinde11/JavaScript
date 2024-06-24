const zodiac = document.getElementById("zodiac");


const body = document.getElementById("container");



const changebackground = ()=> {
   console.log(zodiac.value)

    switch (zodiac.value) {
        case "aries":
            body.style.backgroundColor="#f7d7d7"
            break;
        case "tarus":
            body.style.backgroundColor="#f7f4d7"
            break;
        case "gemini":
            body.style.backgroundColor="#e4f7d7"
            break;
        case "cancer":
            body.style.backgroundColor="#d7dcf7"
            break;
        case "leo":
            body.style.backgroundColor="#f0d7f7"
            break;
        case "vigro":
            body.style.backgroundColor="#d7f7eb"
            break;
        case "libra":
            body.style.backgroundColor="#b6eafa"
            break;
        case "scorpio":
            body.style.backgroundColor="#f7ead2"
            break;
        case "sagittarius":
            body.style.backgroundColor="#f7d2de"
            break;
        case "aquarius":
            body.style.backgroundColor="#e2d2f7"
            break;
        case "capricorn":
            body.style.backgroundColor="#f7d2d8"
            break;
        case "pisces":
            body.style.backgroundColor="#f4d2f7"
            break;
            
    
        default:
            
            break;
    }
    
}


