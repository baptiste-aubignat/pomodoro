var x = document.getElementById("reset");
var y = document.getElementById("start");
x.style.display = "none";
y.style.display = "block";

const minutesDepart = 25;
let temps = minutesDepart * 60;
const min = minutesDepart;
const defaut = document.getElementById("timer");

defaut.innerText = `${min}:00`;

const time = document.getElementById("timer");

function start() {
    var x = document.getElementById("reset");
    var y = document.getElementById("start");
    x.style.display = "block";
    y.style.display = "none";
    setInterval(() => {
        let secondes = parseInt(temps % 60, 10);
        let minutes = parseInt(temps / 60, 10);
        minutes = minutes < 10 ? "0" + minutes: minutes;
        secondes = secondes < 10 ? "0" + secondes: secondes;
        time.innerText = `${minutes}:${secondes}`;
        temps = temps <= 0 ? 0 : temps - 1;
    }, 1000);
}

function reset() {
    /*var x = document.getElementById("reset");
    var y = document.getElementById("start");
    x.style.display = "none";
    y.style.display = "block";
    document.getElementById("timer").innerText = `${min}:00`;*/
    location.reload();
}