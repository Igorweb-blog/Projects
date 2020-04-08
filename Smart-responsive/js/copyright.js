let date = document.getElementById('date');
let today = new Date();
let year = today.getFullYear();

date.textContent = (year-1) + ' - ' + (year);