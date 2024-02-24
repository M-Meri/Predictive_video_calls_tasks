const input = document.getElementById("theInput");
const button = document.getElementById("theButton");
const paragraph = document.getElementById("inputDisplay");

button.addEventListener("click", function() {
	paragraph.textContent = input.value;
});
