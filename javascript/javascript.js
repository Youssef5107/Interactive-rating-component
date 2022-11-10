var selectedRateValue = 0;


function rate(selectedBtn, val) {

	//Reset the color of the btns:
	var btns = document.querySelectorAll(".bt");
	for (i = 0; i < btns.length; i++) {
		btns[i].style.backgroundColor = "#959eac";
	}

	//Change the color of the selected btn:
	selectedBtn.style.backgroundColor = "rgb(255, 136, 0)";

	selectedRateValue = val;
}


function submit() {

	if (selectedRateValue > 0) {
		let selectedRateElement = document.querySelector(".rate");
		if (selectedRateElement) {
			selectedRateElement.innerText = selectedRateValue;
		}

		var box2visiblty = document.querySelector(".content-box2");
		var box1visiblty = document.querySelector(".content-box");

		if (box2visiblty) box1visiblty.style.display = "none";
		if (box1visiblty) box2visiblty.style.display = "block";
	} else {
		alert("You didn't choose a ratting");
	}
}

