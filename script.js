const monthEl = document.getElementById("month");
const dayOfWeekEl = document.getElementById("day-of-week");
const todayEl = document.getElementById("today");
const yearEl = document.getElementById("year");

const now = new Date();

const month = now.getMonth();
const dayOfWeek = now.getDay();
const today = now.getDate();
const year = now.getFullYear();

monthEl.innerText = new Date(year, month).toLocaleString("en", {
    month: "long"
});
dayOfWeekEl.innerText = new Date(year, month, today).toLocaleString("en", {
    weekday: "long"
});
todayEl.innerText = today;
yearEl.innerText = year;
