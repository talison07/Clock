let day = document.getElementById("day");
let hours= document.getElementById("hours");
let minutes= document.getElementById("minutes");
let seconds= document.getElementById("seconds");

const relogio = setInterval(function time (){
    const dt = new Date();
    let d = dt.getDay();
    let hr = dt.getHours();
    let min = dt.getMinutes();
    let s = dt.getSeconds();

    day.textContent = d;
    hours.textContent= hr;
    minutes.textContent = min;
    seconds.textContent= s;
})
