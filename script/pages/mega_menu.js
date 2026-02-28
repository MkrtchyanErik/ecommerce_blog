let main_mega_menu_openorclose = false;
let main_mega_menu_openorclose_2 = false;

if (main_mega_menu_openorclose_2 == false) {
	
	document.getElementById('nav-icon4').onclick = function () {
		this.classList.toggle('open');
	};
	
	document.getElementById('nav-icon4').addEventListener("click", () => {
	let megaMenu = document.querySelector(".main_mega_menu");
	let menuContent = document.querySelector(".main_mega_menu div");
	
	if (main_mega_menu_openorclose == false) {
		megaMenu.style.display = "flex";		
		setTimeout(() => {
			menuContent.style.left = "0";
		}, 10);
		
		main_mega_menu_openorclose = true;
	}
	else {
		menuContent.style.left = "-500px";
		megaMenu.style.opacity = "0";
		
		setTimeout(() => {
			megaMenu.style.display = "none";
			document.body.style.overflow = "auto";
			megaMenu.style.opacity = "1";
		}, 600);
		
		main_mega_menu_openorclose = false;
	}
});

}

if (main_mega_menu_openorclose == false) {

document.getElementById('nav-icon').onclick = function () {
	this.classList.toggle('open');
};

document.getElementById('nav-icon').addEventListener("click", () => {
	let menuContent_2 = document.querySelector(".main_mega_menu_2");

	if (main_mega_menu_openorclose_2 == false) {

		setTimeout(() => {
			menuContent_2.style.top = "0";
		}, 10);

		main_mega_menu_openorclose_2 = true;
		document.body.style.overflow = "hidden";

	}
	else {
		menuContent_2.style.top = "-100%";

		setTimeout(() => {
			document.body.style.overflow = "auto";

		}, 600);

		main_mega_menu_openorclose_2 = false;
	}
});
}