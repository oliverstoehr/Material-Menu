/* JavaScript for Material Menu */

// Function registers all EventListeners
function registerMenu() {
	var menu = document.getElementById("material-menu");
	var toggles = document.getElementsByClassName("material-menu-toggle");
	
	menu.addEventListener("click", function () {
		if (event.target.classList.contains("material-wrapper")) {
			toggleMenu(this);
		} else if (event.target.nodeName == 'A') {
			toggleMenu(this);
		}				
	});

	for (i = 0; i < toggles.length; i++) {
		toggles[i].addEventListener("click", function () {
			toggleMenu(menu);
		});
	}
}

// opens and closes menu
function toggleMenu(menu) {
	menu.classList.toggle("active");
}

window.onload = registerMenu;