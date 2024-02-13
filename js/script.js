// ============================================= Navigation =============================================

let menuIcon = document.querySelector('.menuIcon');
let nav = document.querySelector('.overlay-menu');

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

menuIcon.addEventListener('click', () => {
    if (nav.style.transform != 'translateX(0%)') {
        nav.style.transform = 'translateX(0%)';
        nav.style.transition = 'transform 0.2s ease-out';
    } else { 
        nav.style.transform = 'translateX(-100%)';
        nav.style.transition = 'transform 0.2s ease-out';
        }
    });

/*======================================================
                        Audio player
  ======================================================*/

const button = document.querySelector('.play-button');
const audio = document.querySelector('.audio');
const icon = document.querySelector('.button-icons');

button.addEventListener('click', () =>{
    audio.volume = 0.02;
    player();
})

function player(){
    if (audio.paused) {
        audio.play();
        button.classList.toggle("play");
        icon.classList.replace("fa-volume-xmark", "fa-volume-high");
     } else {
        audio.pause();
        button.classList.toggle("play");
        icon.classList.replace("fa-volume-high","fa-volume-xmark");
     }
}

/*======================================================
                        Scroll Reveal
  ======================================================*/


ScrollReveal({
    // reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.donut-one, .donut-two, .donut-three, .donut-four, .cane-image,', { origin: 'bottom' });
ScrollReveal().reveal('.about-img, .navi, .product-indicators, .contact-section-container', { origin: 'left' });
ScrollReveal().reveal('.about-content, .heading, .product-menu', { origin: 'right' });


/*======================================================
                    Product section
  ======================================================*/

const starters = JSON.parse(
	"[" +
		'{ "type":"separator", "description":"Croissants" },' +
		'{ "type":"food", "name":"Croissant nature", "description":"Fruits à coque, œuf, lait, soja, blé, orge, avoine, seigle", "price":"2.00€" },' +
		'{ "type":"food", "name":"Croissant chocolat", "description":"Fruits à coque, œuf, lait, soja, blé, orge, avoine, seigle, sésame", "price":"3.50€" },' +
        '{ "type":"food", "name":"Croissant framboises", "description":"Fruits à coque, œuf, lait, soja, blé, orge, avoine, seigle, sésame, céleri", "price":"3.00€" },' +
		'{ "type":"separator", "description":"Muffins" },' +
		'{ "type":"food", "name":"Muffin carramel", "description":"Nuts, Egg, Milk, Soya, Wheat, Sulphites", "price":"2.10€" },' +
		'{ "type":"food", "name":"Muffin chocolat", "description":"Nuts, Egg, Milk, Soya, Wheat", "price":"1.50€" },' +
		'{ "type":"food", "name":"Muffin crumble", "description":"Nuts, Egg, Milk, Soya, Wheat", "price":"1.20€" },'+
        '{ "type":"separator", "description":"Cookies" },' +
		'{ "type":"food", "name":"Cookie chocolat", "description":"Nuts, Egg, Milk, Soya, Wheat", "price":"2.00€" },' +
		'{ "type":"food", "name":"Cookie chocolat blanc", "description":"Nuts, Egg, Milk, Soya, Wheat", "price":"1.00€" },' +
		'{ "type":"food", "name":"Cookie double chocolat", "description":"Nuts, Egg, Milk, Soya, Wheat", "price":"1.00€" } ]'
);
const mains = JSON.parse(
	"[" +
		'{ "type":"separator", "description":"Nos capsules" },' +
		'{ "type":"food", "name":"Espresso signature", "description":"10 gélules dans une boîte", "price":"12.00€" },' +
		'{ "type":"food", "name":"Espresso signature décaféinés", "description":"10 gélules dans une boîte", "price":"10.60€" },' +
		'{ "type":"food", "name":"haricots moulus", "description":"10 gélules dans une boîte", "price":"8.20€" },' +
		'{ "type":"food", "name":"Haricots moulus décaféinés", "description":"10 gélules dans une boîte", "price":"12.50€" } ]'
);
const desserts = JSON.parse(
	"[" +
		'{ "type":"separator", "description":"Nos donuts" },' +
		'{ "type":"food", "name":"Donut Oreo ", "description":"Cookies & crème fourrés, glaçage chocolat, Drizzle vanille & biscuit oreo", "price":"2.00€" },' +
		'{ "type":"food", "name":"Donut Chocolat érable", "description":"Glaçage à l\'érable et filet de chocolat.", "price":"3.50€" },' +
		'{ "type":"food", "name":"Donut arc-en-ciel aux fraises", "description":"Glaçage aux fraises avec Sprinkles.", "price":"2.50€" },' +
		'{ "type":"food", "name":"Donut arc-en-ciel en chocolat", "description":"Glaçage au chocolat et pépites arc-en-ciel.", "price":"2.00€" },' +
		'{ "type":"food", "name":"Donut arc-en-ciel vanille", "description":"Glaçage à la vanille et pépites arc-en-ciel.", "price":"2.00€" },' +
		'{ "type":"food", "name":"Donut glacé", "description":"Le donut glacé classique.", "price":"1.50€" } ]'
);
const drinks = JSON.parse(
	"[" +
		'{ "type":"separator", "description":"Eau & Soda" },' +
		'{ "type":"drink", "name":"Eau gazeuse", "description":"5dl", "price":"4.50€" },' +
		'{ "type":"drink", "name":"Ice Tea", "description":"5dl", "price":"4.50€" },' +
		'{ "type":"drink", "name":"Coca-cola", "description":"3dl", "price":"5.50€" },' +
		'{ "type":"drink", "name":"Eau plate", "description":"", "price":"FREE" },' +
		'{ "type":"separator", "description":"Boissons chaudes" },' +
		'{ "type":"drink", "name":"Espresso", "description":"", "price":"4.50€" },' +
		'{ "type":"drink", "name":"Cafe latte", "description":"", "price":"4.50€" },' +
        '{ "type":"drink", "name":"Chocolat chaud", "description":"", "price":"4.50€" },' +
		'{ "type":"drink", "name":"Tea", "description":"", "price":"5.00€" } ]'
);

/////////////////////////////////////////////////////////////////
let sl = 0;

let startersbutton = document.getElementById("startersbutton");
let mainsbutton = document.getElementById("mainsbutton");
let dessertsbutton = document.getElementById("dessertsbutton");
let drinksbutton = document.getElementById("drinksbutton");

let ni1 = document.getElementById("ni1");
let ni2 = document.getElementById("ni2");
let ni3 = document.getElementById("ni3");
let ni4 = document.getElementById("ni4");

startersbutton.addEventListener("click", (e) => {
	setIndicator(0);
	populateItems(starters);
});
mainsbutton.addEventListener("click", (e) => {
	setIndicator(1);
	populateItems(mains);
});
dessertsbutton.addEventListener("click", (e) => {
	setIndicator(2);
	populateItems(desserts);
});
drinksbutton.addEventListener("click", (e) => {
	setIndicator(3);
	populateItems(drinks);
});

function populateItems(items) {
	let menu = document.querySelector(".product-menu");
	menu.innerHTML = "";
	for (i = 0; i < items.length; i++) {
		if (items[i].type === "separator") {
			let menuitem = document.createElement("div");
			menuitem.setAttribute("class", "product-menu-separator");
			menuitem.innerHTML = items[i].description;
			menu.appendChild(menuitem);
		}
		if (items[i].type === "food") {
			let menuitem = document.createElement("div");
			let menuitemname = document.createElement("div");
			let menuitemdesc = document.createElement("div");
			let menuitemprize = document.createElement("div");
			menuitem.setAttribute("class", "product-menu-item");
			menuitemname.setAttribute("class", "product-menu-item-name");
			menuitemdesc.setAttribute("class", "product-menu-item-description");
			menuitemprize.setAttribute("class", "product-menu-item-price");

			menuitemname.innerHTML = items[i].name;
			menuitemdesc.innerHTML = items[i].description;
			menuitemprize.innerHTML = items[i].price;

			menuitem.appendChild(menuitemname);
			menuitem.appendChild(menuitemdesc);
			menuitem.appendChild(menuitemprize);
			menu.appendChild(menuitem);
		}
		if (items[i].type === "drink") {
			let drinkitem = document.createElement("div");
			let drinkitemname = document.createElement("div");
			let drinkitemdesc = document.createElement("div");
			let drinkitemprize = document.createElement("div");
			drinkitem.setAttribute("class", "drink-item");
			drinkitemname.setAttribute("class", "drink-item-name");
			drinkitemdesc.setAttribute("class", "drink-item-description");
			drinkitemprize.setAttribute("class", "drink-item-price");

			drinkitemname.innerHTML = items[i].name;
			drinkitemdesc.innerHTML = items[i].description;
			drinkitemprize.innerHTML = items[i].price;

			drinkitem.appendChild(drinkitemname);
			drinkitem.appendChild(drinkitemdesc);
			drinkitem.appendChild(drinkitemprize);
			menu.appendChild(drinkitem);
		}
	}
}
function setIndicator(sel) {
	sl = sel;
	let vp = "";
	if (window.innerWidth < 800) {
		vp = "60px";
	} else {
		vp = "85%";
	}
	let elems = [ni1, ni2, ni3, ni4];
	for (i = 0; i < elems.length; i++) {
		if (i === sel) {
			elems[i].style.width = vp;
			elems[i].style.boxShadow = "2px 2px 10px 2px var(--icolor" + (i + 1) + ")";
		} else {
			elems[i].style.width = "0";
			elems[i].style.boxShadow = "none";
		}
	}
}

window.addEventListener("resize", (e) => {
	setIndicator(sl);
});

//default runs
setIndicator(sl);
populateItems(starters);
