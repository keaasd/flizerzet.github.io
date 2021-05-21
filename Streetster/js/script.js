/*--------------------Menu--------------------*/

let burger = document.querySelector('.hamburger');
let menu = document.querySelector('.menu');
let cart = document.querySelector('.cart')

burger.onclick = () => {
	burger.classList.toggle('active');
	menu.classList.toggle('active');
	cart.classList.toggle('active');
}

/*--------------------/Menu--------------------*/

/*--------------------Sticky header--------------------*/

let header = document.querySelector('header');
let firstBlock = document.querySelector('.first')

function fixHeader() {
	if (window.scrollY > 36) {
		header.classList.add('header__fixed');
		firstBlock.classList.add('active');
	} else {
		header.classList.remove('header__fixed');
		firstBlock.classList.remove('active');
	}
}

fixHeader();

window.addEventListener('scroll', fixHeader)

/*--------------------/Sticky header--------------------*/

/*--------------------Sliders--------------------*/

let mobileSlider = document.querySelector('.categories__slider')

function checkSlider() {
	if (window.innerWidth < 651) {
		categoriesSlider.destroy();
		mobileSlider.classList.add('categories__mobile');
	} else {
		mobileSlider.classList.remove('categories__mobile');
	}
}

let categoriesSlider = new Swiper('.categories__slider', {
	centeredSlides: true,
	slidesPerView: 2,
	spaceBetween: 20,
	loop: true,
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	breakpoints: {
		1024: {
			spaceBetween: 70,
		},
		768: {
			spaceBetween: 40,
		},
	}
})

checkSlider();

window.onresize = checkSlider;

let newsSlider = new Swiper('.news__slider', {
	slidesPerView: 1,
	slidesPerScroll: 1,
	loop: true,
	spaceBetween: 42,
	navigation: {
		nextEl: '.news-arrow-next',
		prevEl: '.news-arrow-prev',
	},
	breakpoints: {
		1024: {
			slidesPerView: 3,
		},
		600: {
			slidesPerView: 2,
		},
	}
})

/*--------------------/Sliders--------------------*/

/*--------------------News text formatter--------------------*/

let newsTexts = document.querySelectorAll('.new__text');

for (let i = 0; i < newsTexts.length; i++) {
	const text = newsTexts[i];
	if (text.textContent.length >= 120) {
		let newText = text.textContent.slice(0, 122) + '...';
		text.textContent = newText;
	}
}

/*--------------------/News text formatter--------------------*/

/*--------------------Mobile search--------------------*/

const searchBtn = document.querySelector('.search');
const searchInput = document.querySelector('.header__input');
const closeSearchBtn = document.querySelector('.search__close')

searchBtn.onclick = () => {
	searchInput.classList.toggle('active');
}

closeSearchBtn.onclick = () => {
	searchInput.classList.remove('active')
}



/*--------------------/Mobile search--------------------*/

const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
	anchor.addEventListener('click', function (e) {
		e.preventDefault()

		const blockID = anchor.getAttribute('href').substr(1)

		document.getElementById(blockID).scrollIntoView({
			behavior: 'smooth',
			block: 'start'
		})
	})
}