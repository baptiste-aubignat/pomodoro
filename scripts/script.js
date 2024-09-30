var x = document.getElementById("reset");
var y = document.getElementById("start");
x.style.display = "none";
y.style.display = "block";

const minutesDepart = 25;
let temps = minutesDepart * 60;
let tempsPause = 300;
const min = minutesDepart;
const defaut = document.getElementById("timer");

defaut.innerText = `${min}:00`;

const time = document.getElementById("timer");

function start() {
    var x = document.getElementById("reset");
    var y = document.getElementById("start");
    var z = document.getElementById("travail");
    var k = document.getElementById("pause");
    x.style.display = "block";
    y.style.display = "none";
    z.style.color = "lime";
    k.style.color = "white";

    work = setInterval(() => {
        let secondes = parseInt(temps % 60, 10);
        let minutes = parseInt(temps / 60, 10);
        minutes = minutes < 10 ? "0" + minutes: minutes;
        secondes = secondes < 10 ? "0" + secondes: secondes;
        time.innerText = `${minutes}:${secondes}`;
        temps = temps <= 0 ? 0 : temps - 1;
    }, 1000);

    if(secondes == 0 && minutes == 0) {
        clearInterval(work);
        pause();
    }
}

function reset() {
    /*var x = document.getElementById("reset");
    var y = document.getElementById("start");
    x.style.display = "none";
    y.style.display = "block";
    document.getElementById("timer").innerText = `${min}:00`;*/
    location.reload();
}

function pause() {
    var z = document.getElementById("travail");
    var k = document.getElementById("pause");
    z.style.color = "white";
    k.style.color = "lime";

    p = setInterval(() => {
        let secondes = parseInt(tempsPause % 60, 10);
        let minutes = parseInt(tempsPause / 60, 10);
        minutes = minutes < 10 ? "0" + minutes: minutes;
        secondes = secondes < 10 ? "0" + secondes: secondes;
        time.innerText = `${minutes}:${secondes}`;
        tempsPause = tempsPause <= 0 ? 0 : tempsPause - 1;
    }, 1000);

    if(secondes == 0 && minutes == 0) {
        clearInterval(p);
        temps = minutesDepart * 60;
        tempsPause = 300;
        start();
    }
}