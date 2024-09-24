const minutesDepart = 25
let temps = minutesDepart * 60

const time = document.getElementById("timer")

setInterval(() => {
    let secondes = parseInt(temps % 60, 10)
    let minutes = parseInt(temps / 60, 10)
    minutes = minutes < 10 ? "0" + minutes: minutes
    secondes = secondes < 10 ? "0" + secondes: secondes
    time.innerText = `${minutes}:${secondes}`
    temps = temps <= 0 ? 0 : temps - 1
}, 1000)