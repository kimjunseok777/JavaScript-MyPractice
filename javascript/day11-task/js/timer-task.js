
const $number = document.querySelector('#number')

const $timerStartBtn = document.querySelector('.timer-start-Btn')
const $timerStopBtn = document.querySelector('.timer-stop-Btn')
const $timerResetBtn = document.querySelector('.timer-reset-Btn')

let start;

function startBtn() {
    start = setInterval(() => {
        const count = parseInt($number.innerText)
        $number.innerText = count + 1
    }, 100)
}
$timerStartBtn.addEventListener('click', startBtn)

//-------------------------------------------------

function stopBtn() {
    clearInterval(start)
}
$timerStopBtn.addEventListener('click', stopBtn)

//-------------------------------------------------

function resetBtn() {
    clearInterval(start)
    $number.textContent = 0
}
$timerResetBtn.addEventListener('click', resetBtn)