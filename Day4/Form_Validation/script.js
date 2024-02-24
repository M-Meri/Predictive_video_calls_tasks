const button = document.getElementById("submit");
const input = document.getElementById("email");

button.addEventListener("click", function() {
	if(input.value.trim() == ""){
		alert("Enter your email");
	}
});
