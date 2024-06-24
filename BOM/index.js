//browser object model

// BOM => navigator, document, history, screen, location

//navigator


// console.log(navigator)

// navigator.geolocation.getCurrentPosition(
//     ((m)=>{
//         console.log(m.coords.altitude)
//     }),
//     (e)=>{
//         console.log(e)
//     }
// )

// console.log(history)

const back = () => history.back()
// const back = () => history.forward()


// console.log(location)

// console.log(location.protocol)
// console.log(location.hostname)
// console.log(location.port)
// console.log(location.host)
// console.log(location.pathname)
// console.log(location.href)
// console.log(location.search)

const func1 = ()=> location.assign("https://youtube.com")
const func2 = ()=> location.replace("https://youtube.com")

const reload = () => location.reload()