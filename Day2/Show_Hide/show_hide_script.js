const mydiv = document.getElementById("mydiv");
const button = document.getElementById("showHide");

button.addEventListener("click", function() {
	if(mydiv.style.display == "none") {
		mydiv.style.display = "block";
	}
	else {
		mydiv.style.display = "none";
	}
});
