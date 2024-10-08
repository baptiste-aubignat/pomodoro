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

// Fonction start servant à démarrer le minuteur en créant un Intervall, celle-ci est appelée grâce au bouton Start et également à la fin du temps de pause
function start() {
    var x = document.getElementById("reset");
    var y = document.getElementById("start");
    var z = document.getElementById("travail");
    var k = document.getElementById("pause");

    x.style.display = "block";
    y.style.display = "none";
    z.style.color = "lime";
    k.style.color = "white";
    
    // Création de l'Intervall, lorsque celui-ci arrive à 0, il est effacé et la fonction pause() est appelée
    work = setInterval(() => {
        let secondes = parseInt(temps % 60, 10);
        let minutes = parseInt(temps / 60, 10);

        minutes = minutes < 10 ? "0" + minutes: minutes;
        secondes = secondes < 10 ? "0" + secondes: secondes;
        time.innerText = `${minutes}:${secondes}`;
        temps = temps <= 0 ? 0 : temps - 1;

        if(temps == 0) {
            clearInterval(work);
            pause();
        }
    }, 1000);
}

// Fonction servant à réinitialiser le minuteur, celle-ci est appelée grâce au bouton Reset
function reset() {
    /*var x = document.getElementById("reset");
    var y = document.getElementById("start");
    x.style.display = "none";
    y.style.display = "block";
    document.getElementById("timer").innerText = `${min}:00`;*/

    location.reload();
}

// Fonction servant à lancer un temps de pause, celle-ci est appelée automatiquement une fois le temps de travail terminé et appelle ensuite la fonction start() pour lancer un nouveau minuteur une fois le temps de pause terminé
function pause() {
    var z = document.getElementById("travail");
    var k = document.getElementById("pause");

    z.style.color = "white";
    k.style.color = "lime";

    // Création d'un nouvel Intervall pour le temps de pause, une fois qu'il arrive à 0, il est effacé et la fonction start() est appelée
    p = setInterval(() => {
        let secondes = parseInt(tempsPause % 60, 10);
        let minutes = parseInt(tempsPause / 60, 10);

        minutes = minutes < 10 ? "0" + minutes: minutes;
        secondes = secondes < 10 ? "0" + secondes: secondes;
        time.innerText = `${minutes}:${secondes}`;
        tempsPause = tempsPause <= 0 ? 0 : tempsPause - 1;

        if(tempsPause == 0) {
            clearInterval(p);
            temps = minutesDepart * 60;
            tempsPause = 300;
            start();
        }
    }, 1000);
}