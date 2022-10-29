const month = document.querySelector('#month');
const year = document.getElementById('year');
const dayNumber = document.getElementById('day-number');
const day = document.getElementById('day');

const date = new Date();

month.innerText = date.toLocaleString('default', { month: 'long' });

year.innerText = date.getFullYear();

dayNumber.innerText = date.getDate();

day.innerText = date.toLocaleString('default', { weekday: 'long' });

const displayTime = () => {
	const dateTime = new Date();
	let hours = dateTime.getHours();
	let minutes = dateTime.getMinutes();
	let seconds = dateTime.getSeconds();
	let session = document.getElementById('session');

	if (hours >= 12) {
		session.innerHTML = 'PM';
	} else {
		session.innerHTML = 'AM';
	}

	if (hours > 12) {
		hours -= 12;
	}

	if (hours < 10) {
		hours = '0' + hours;
	}
	if (minutes < 10) {
		minutes = '0' + minutes;
	}
	if (seconds < 10) {
		seconds = '0' + seconds;
	}

	document.getElementById('hour').innerHTML = hours;
	document.getElementById('minute').innerHTML = minutes;
	document.getElementById('second').innerHTML = seconds;
};

setInterval(displayTime, 10);
