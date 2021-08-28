let secondHand = document.querySelector('[data-second-hand]')
let minuteHand = document.querySelector('[data-minute-hand]')
let hourHand = document.querySelector('[data-hour-hand]')

let setClock = () => {
    let currentDate = new Date()
    let secondsRatio = currentDate.getSeconds() / 60;
    let minutesratio = (secondsRatio + currentDate.getMinutes()) / 60;
    let hoursRatio = (minutesratio + currentDate.getHours()) / 12;

    setRotation(secondHand, secondsRatio)
    setRotation(minuteHand, minutesratio)
    setRotation(hourHand, hoursRatio)
}

function setRotation(element, rotationRatio) {
    element.style.setProperty('--rotation', rotationRatio * 360)
}

setClock()
setInterval(setClock, 1000)