

function rate(selectedBtn, val) {

	// var selectedRating = document.getElementsByClassName("rate");
	let selectedRate = document.getElementsByClassName("rate");

	if (selectedRate && selectedRate.length > 0)
		selectedRate[0].innerText = val;


	//Reset the color of the btns:
	var btns = document.querySelectorAll(".bt");
	for (i = 0; i < btns.length; i++) {
		btns[i].style.backgroundColor = "#959eac";
	}

	//Change the color of the selected btn:
	selectedBtn.style.backgroundColor = "rgb(255, 136, 0)";



}


function submit() {
	var box2visiblty = document.querySelector(".content-box2");
	var box1visiblty = document.querySelector(".content-box");
	let selectedRate = document.getElementsByClassName("rate");


	if (selectedRate[0].innerText) {
		box1visiblty.style.display = "none";
		box2visiblty.style.display = "block";
	} else {
		alert("You didn't choose a ratting");
		//box1visiblty.preventDefault();
		//box2visiblty.preventDefault();
	}
}
