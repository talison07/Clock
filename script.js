
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

    if(d=1){
        day.textContent ="Seg"
    }

    else if(d=2){
        day.textContent ="Ter"
    }

    else if(d=3){
        day.textContent ="Qua"
    }

    else if(d=4){
        day.textContent ="Qui"
    }

    else if(d=5){
        day.textContent ="Sex"
    }

    else if(d=6){
        day.textContent ="Sab"
    }

    else if(d=7){
        day.textContent ="Dom"
    }


})