let main_mega_menu_openorclose = false;

document.getElementById('nav-icon4').onclick = function () {
	this.classList.toggle('open');
};

document.getElementById('nav-icon4').addEventListener("click", () => {
	let megaMenu = document.querySelector(".main_mega_menu");
	let menuContent = document.querySelector(".main_mega_menu div");
	let header = document.querySelector(".menu-header");

	if (main_mega_menu_openorclose == false) {
		megaMenu.style.display = "flex";
		let scrollBarWidth = window.innerWidth - document.documentElement.clientWidth;

		setTimeout(() => {
			menuContent.style.left = "0";
		}, 10);

		main_mega_menu_openorclose = true;
		document.body.style.overflow = "hidden";
		document.body.style.paddingRight = scrollBarWidth + "px";
		// header.style.paddingRight = scrollBarWidth + "px";
	}
	else {
		menuContent.style.left = "-500px";
		megaMenu.style.opacity = "0";

		setTimeout(() => {
			megaMenu.style.display = "none";
			document.body.style.overflow = "auto";
			document.body.style.paddingRight = "0px";
			header.style.paddingRight = "0px";
			megaMenu.style.opacity = "1";
		}, 600);

		main_mega_menu_openorclose = false;
	}
});



let main_mega_menu_openorclose_2 = false;

document.getElementById('nav-icon').onclick = function () {
	this.classList.toggle('open');
};

document.getElementById('nav-icon').addEventListener("click", () => {
	// alert("ok")
	let menuContent_2 = document.querySelector(".main_mega_menu_2");
	let header = document.querySelector(".menu-header");

	if (main_mega_menu_openorclose_2 == false) {
		let scrollBarWidth = window.innerWidth - document.documentElement.clientWidth;

		setTimeout(() => {
			menuContent_2.style.top = "0";
		}, 10);

		main_mega_menu_openorclose_2 = true;
		document.body.style.overflow = "hidden";
		document.body.style.paddingRight = scrollBarWidth + "px";
		header.style.paddingRight = scrollBarWidth + "px";

	}
	else {
		menuContent_2.style.top = "-100%";

		setTimeout(() => {
			document.body.style.overflow = "auto";
			document.body.style.paddingRight = "0px";
			header.style.paddingRight = "0px";
		}, 600);

		main_mega_menu_openorclose_2 = false;
	}
});