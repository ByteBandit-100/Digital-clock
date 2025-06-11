const time = document.querySelector("#live-time");
const todayDate = document.querySelector("#date-of-today")

setInterval(()=>{
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    time.innerText = `${hours} : ${minutes} : ${seconds}`
},1000)

const date = new Date();
todayDate.innerText = date.toLocaleDateString();
