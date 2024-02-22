const paragraph = document.getElementById("paragraph");
const button = document.getElementById("button");

button.addEventListener("click", function() {
	paragraph.textContent = "New text";
});
