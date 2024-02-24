const button = document.getElementById("clickMe");
const paragraph = document.getElementById("numberOfClicks");

let i = 1;

button.addEventListener("click", function() {
	paragraph.textContent = i;
	i++;
});
