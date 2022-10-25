
function rate(selectedBtn, val) {
	var btns = document.querySelectorAll(".bt");
	// var selectedRating = document.getElementsByClassName("rate");
	let selectedRate = document.getElementsByClassName("rate").innerHTML;

	for (i = 0; i < btns.length; i++) {
		btns[i].style.backgroundColor = "#959eac";
	}
	selectedBtn.style.backgroundColor = "rgb(255, 136, 0)";

	document.getElementsByClassName("rate").innerHTML = "val";
	selectedRate.innerHTML = "val";
}


function submit() {
	var box2visiblty = document.querySelector(".content-box2");
	var box1visiblty = document.querySelector(".content-box");
	var selectedbutton = document.querySelector(".bt");

	if (selectedbutton === false) {
		box1visiblty.preventDefault();
		box2visiblty.preventDefault();
		alert("You didn't choose a ratting");

	} else {

		box1visiblty.style.display = "none";
		box2visiblty.style.display = "block";
	}
}
