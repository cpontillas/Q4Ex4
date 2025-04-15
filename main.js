function checkMonth() {
	var inputMonth = document.getElementById('month').value;

	switch (parseInt(inputMonth)) {
	case 1:
		document.getElementById('buwan').innerHTML = "It is January";
		break;
	case 2:
		document.getElementById('buwan').innerHTML = "It is February";
		break;
	case 3:
		document.getElementById('buwan').innerHTML = "It is March";
		break;
	case 4:
		document.getElementById('buwan').innerHTML = "It is April";
		break;
	case 5:
		document.getElementById('buwan').innerHTML = "It is May";
		break;
	case 6:
		document.getElementById('buwan').innerHTML = "It is June";
		break;
	case 7:
		document.getElementById('buwan').innerHTML = "It is July";
		break;
	case 8:
		document.getElementById('buwan').innerHTML = "It is August";
		break;
	case 9:
		document.getElementById('buwan').innerHTML = "It is September";
		break;
	case 10:
		document.getElementById('buwan').innerHTML = "It is October";
		break;
	case 11:
		document.getElementById('buwan').innerHTML = "It is November";
		break;
	case 12:
		document.getElementById('buwan').innerHTML = "It is December";
		break;
	default:
		document.getElementById('buwan').innerHTML = "Invalid entry. Try again. "

	}
}