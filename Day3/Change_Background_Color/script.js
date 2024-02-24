const allButtons = document.querySelectorAll(".buttons");

allButtons.forEach(button => {
	button.addEventListener("click", function() {
		document.body.style.backgroundColor = button.dataset.color;
	});
});
