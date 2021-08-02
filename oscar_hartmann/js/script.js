//   Is Mobile

let isMobile = { 
	Android: function () { return navigator.userAgent.match(/Android/i); },
	BlackBerry: function () { return navigator.userAgent.match(/BlackBerry/i); },
	iOS: function () { return navigator.userAgent.match(/iPhone|iPad|iPod/i); },
	Opera: function () { return navigator.userAgent.match(/Opera Mini/i); },
	Windows: function () { return navigator.userAgent.match(/IEMobile/i); },
	any: function () { return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows()); }
};

if (isMobile.any()) {
	document.querySelector('html').classList.add('touch');
}

//   WEBP

function testWebP(callback) {
	var webP = new Image();
	webP.onload = webP.onerror = function () {
		callback(webP.height == 2);
	};
	webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}
testWebP(function (support) {
	if (support === true) {
		document.querySelector('html').classList.add('webp');
	} else {
		document.querySelector('html').classList.add('no-webp');
	}
});

'use strict';;

const body = document.body;
const header = document.querySelector('header')

// Menu

const burger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');
const headerWrapper = document.querySelector('.header__wrapper');
const langs = document.querySelector('.header__langs');

if (burger && menu) {
	burger.onclick = () => {
		burger.classList.toggle('active');
		menu.classList.toggle('active');
		langs.classList.toggle('active');
		header.classList.toggle('active');
		headerWrapper.classList.toggle('active');
		body.classList.toggle('lock');
	}
}

// Langs

langs.addEventListener('click', (e) => {
	e.preventDefault();
	if (e.target.classList.contains('header__lang')) {
		const lang = langs.querySelectorAll('.header__lang');
		lang.forEach(elem => {
			elem.classList.remove('active');
		})
		e.target.classList.add('active')
	}
})

// Fix header

function fixHeader() {
	if (window.scrollY > 35) {
		header.classList.add('header-fixed')
	} else {
		header.classList.remove('header-fixed')
	}
}

fixHeader();

window.addEventListener('scroll', fixHeader)

// Read more

const readMore = document.querySelectorAll('.read-more');

readMore.forEach(elem => {
	elem.addEventListener('click', (e) => {
		e.target.classList.add('active');
		e.target.parentElement.classList.add('active');
	})
})