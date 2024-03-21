const monthEl = document.getElementById("month")
const dayOfWeekEl = document.getElementById("day-of-week")
const todayEl = document.getElementById("today")
const yearEl = document.getElementById("year")


const monthsInYear = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

const daysOfWeek = ["Monday", "Tuesday", "Wednesday", "ThursDay", "Friday", "Saturday", "Sunday"]

const month = new Date().getMonth()
const dayOfWeek = new Date().getDay()
const today = new Date().getDate()
const year = new Date().getFullYear()
monthEl.innerText = monthsInYear[month]
dayOfWeekEl.innerText = daysOfWeek[dayOfWeek]
todayEl.innerText = today
yearEl.innerText = year

console.log(year)