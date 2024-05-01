// Initializing variables to hold the time values
let [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0]

// referring the timer display element
const timerRef = document.querySelector('.timer-Display')

// Initializing the variable to hold the setInterval ID
let int = null

document.getElementById('start-Timer').addEventListener('click', () => {
  // If the timer is already running, clear the interval
  if (int !== null) {
    clearInterval(int)
  }
  // Start the timer by calling the displayTimer function every 10 milliseconds
  int = setInterval(displayTimer, 10)
})

document.getElementById('stop-Timer').addEventListener('click', () => {
  // Stop the timer by clearing the interval
  clearInterval(int)
})

document.getElementById('reset-Timer').addEventListener('click', () => {
  // Stop the timer by clearing the interval
  clearInterval(int);
  // Reset the time values to zero
  [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0]
  // Updating the timer display to show "00 : 00 : 00 : 000"
  timerRef.textContent = '00 : 00 : 00 : 000'
})

function displayTimer () {
  // Increment the milliseconds value by 10
  milliseconds += 10
  // If the milliseconds value reaches 1000, reset it to zero and increment the seconds value
  if (milliseconds === 1000) {
    milliseconds = 0
    seconds++
    // If the seconds value reaches 60, reset it to zero and increment the minutes value
    if (seconds === 60) {
      seconds = 0
      minutes++
      // If the minutes value reaches 60, reset it to zero and increment the hours value
      if (minutes === 60) {
        minutes = 0
        hours++
      }
    }
  }
  // Format the time values as strings with leading zeros if necessary
  const h = hours < 10 ? '0' + hours : hours
  const m = minutes < 10 ? '0' + minutes : minutes
  const s = seconds < 10 ? '0' + seconds : seconds
  let ms
  if (milliseconds < 10) {
    ms = '00' + milliseconds
  } else if (milliseconds < 100) {
    ms = '0' + milliseconds
  } else {
    ms = milliseconds
  }
  // Update the timer display with the formatted time values
  timerRef.textContent = `${h} : ${m} : ${s} : ${ms}`
}
