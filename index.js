"use strict"
//Dom Selection
const time = document.querySelector(".time")
const hour = document.querySelector("#hour")
const minutes = document.querySelector("#minutes")
const amPm = document.querySelector(".amPm")
const day = document.querySelector("#day")
const name = document.querySelector("#name")
const focus = document.querySelector("#focus")
const focu = document.querySelector(".focus")
const bg = document.querySelector(".container")
const welcome = document.querySelector(".welcome")
const lightGreen = "#f9fcfb"

function showTime() {
  const date = new Date()
  //get time output
  let displayHour = date.getHours()
  let displayMinutes = date.getMinutes()
  //returns a number set to an array
  let displayDay = date.getUTCDay()

  let daysOfWeek = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday"
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

  if (displayHour <= 12) {
    bg.style.backgroundImage = 'url("./img/morning.jpg")'
    welcome.textContent = "Good Morning"
  } else if (displayHour <= 18) {
    bg.style.backgroundImage = 'url("./img/afternoon.jpg")'
    welcome.textContent = "Good Afternoon"
    welcome.style.color = lightGreen
    name.style.color = lightGreen
    focus.style.color = lightGreen
    focu.style.color = lightGreen
  } else {
    bg.style.backgroundImage = 'url("./img/evening.jpg")'
    welcome.textContent = "Good Evening"
    welcome.style.color = lightGreen
    name.style.color = lightGreen
    focus.style.color = lightGreen
    focu.style.color = lightGreen
  }
}

function getName() {
  //check if the string-key in the has a obj or string
  if (localStorage.getItem("name") === null) {
    //if on keep on its init value
    name.textContent = "{Enter Name}"
  } else {
    //if it has data get it
    name.textContent = localStorage.getItem("name")
  }
}

function setName(e) {
  const vObj = e.target.innerText

  console.log(vObj)
  //check what type of event wat targeted
  if (e.type === "keypress") {
    //check of the key code
    if (e.which == 13 || e.keyCode == 13) {
      //setItems in local storage api with two params key "name", value "e.target.innerText"
      localStorage.setItem("name", vObj)

      //to blur the name
      name.blur()
    } else {
      localStorage.setItem("name", vObj)
    }
  }
}

function getFocus() {
  //check if the localstorage has item with the key to the value
  if (localStorage.getItem("focus") === null) {
    //return to its init value
    focus.textContent = "{Enter focus}"
  } else {
    //get the data from the local storage
    localStorage.getItem("focus")
  }
}

function setFocus(e) {
  //check what type of event wat targeted
  if (e.type === "keypress") {
    //check of the key code
    if (e.which == 13 || e.keyCode == 13) {
      //set items in the local str with two params
      localStorage.setItem("focus", e.target.innerText)

      //set on the choosen item
      focus.blur()
    } else {
      localStorage.setItem("focus", e.target.innerText)
    }
  }
}

//add eventlistner
name.addEventListener("keypress", setName)
name.addEventListener("blur", setName)
focus.addEventListener("keypress", setFocus)
focus.addEventListener("blur", setFocus)

//run functions
showTime()
setDisplay()
getFocus()
getName()
