"use strict"
//Dom Selection
const time = document.querySelector(".time")
const hour = document.querySelector("#hour")
const minutes = document.querySelector("#minutes")
const amPm = document.querySelector(".amPm")
const day = document.querySelector("#day")
const name = document.querySelector("#name")
const focus = document.querySelector("#focus")

function showTime() {
  const date = new Date()
  //get time output
  let displayHour = date.getHours()
  let displayMinutes = date.getMinutes()
  //returns a number set to an array
  let displayDay = date.getUTCDay()

  let daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ]

  day.textContent = daysOfWeek[displayDay]

  //set the time out as hours
  //but 1st check if the its less than 10 to add a zero
  if (displayHour < 10) {
    hour.textContent = `0${displayHour}`
  } else {
    hour.textContent = displayHour
  }

  //set the time out as minutes
  //but 1st check if the its less than 10 to add a zero

  if (displayMinutes < 10) {
    minutes.textContent = `0${displayMinutes}`
  } else {
    minutes.textContent = displayMinutes
  }
  if (displayHour <= 12) {
    amPm.textContent = "am"
  } else {
    amPm.textContent = "pm"
  }

  setTimeout(showTime, 1000)
}

function setDisplay() {
  //set the time in hours
  const date = new Date()
  //get time output
  let displayHour = date.getHours()
}

//run functions
showTime()
setDisplay()
