const button = document.getElementById("shButton");
const paragraph = document.getElementById("text");

button.addEventListener("click", function() {
	if(button.textContent == "Show") {
		button.textContent = "Hide";
		paragraph.style.display = "block";
	}
	else {
		button.textContent = "Show";
		paragraph.style.display = "none";
	}
});
