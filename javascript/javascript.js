
function rate(selectedBtn, val) {
	var btns = document.querySelectorAll(".bt");
	for (i = 0; i < btns.length; i++) {
		btns[i].style.backgroundColor = "#959eac";
	}
	selectedBtn.style.backgroundColor = "rgb(255, 136, 0)";
}




