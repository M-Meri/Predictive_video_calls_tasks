const items = document.querySelectorAll("#theList li");

items.forEach(item => {
	item.addEventListener("mouseover", function() {
		item.style.backgroundColor = "yellow";
	});
	item.addEventListener("mouseout", function() {
		item.style.backgroundColor = "white";
	});
});
