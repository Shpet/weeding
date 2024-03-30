const WEEDING_DATE_STRING = '09/13/2024 01:00:00 PM GMT+0200'

export function countdown() {
  const countdownElement = document.querySelector('.tables__countdown')
  const endDate = new Date(WEEDING_DATE_STRING).getTime()
  let days, hours, minutes, seconds

  if (isNaN(endDate)) {
    console.error('countdown end date is invalid')
    return
  }

  if (!countdownElement) {
    console.error('countdown element is invalid')
    return
  }

  const daysElement = countdownElement.querySelector('.tables__countdown-days')
  const hoursElement = countdownElement.querySelector(
    '.tables__countdown-hours'
  )
  const minutesElement = countdownElement.querySelector(
    '.tables__countdown-minutes'
  )
  const secondsElement = countdownElement.querySelector(
    '.tables__countdown-seconds'
  )

  setInterval(calculate, 1000)

  function calculate() {
    let startDate = new Date()
    startDate = startDate.getTime()

    let timeRemaining = parseInt((endDate - startDate) / 1000)

    if (timeRemaining < 0) {
      return
    }

    days = parseInt(timeRemaining / 86400)
    timeRemaining = timeRemaining % 86400

    hours = parseInt(timeRemaining / 3600)
    timeRemaining = timeRemaining % 3600

    minutes = parseInt(timeRemaining / 60)
    timeRemaining = timeRemaining % 60

    seconds = parseInt(timeRemaining)

    daysElement.innerText = `${days.toString().padStart(2, '0')}`
    hoursElement.innerText = `${hours.toString().padStart(2, '0')}`
    minutesElement.innerText = `${minutes.toString().padStart(2, '0')}`
    secondsElement.innerText = `${seconds.toString().padStart(2, '0')}`

    return {
      days,
      hours,
      minutes,
      seconds
    }
  }
}
