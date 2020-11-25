function fontsStyle(params) {

	let file_content = fs.readFileSync(source_folder + '/scss/fonts.scss');
	if (file_content == '') {
		fs.writeFile(source_folder + '/scss/fonts.scss', '', cb);
		return fs.readdir(path.build.fonts, function (err, items) {
			if (items) {
				let c_fontname;
				for (var i = 0; i < items.length; i++) {
					let fontname = items[i].split('.');
					fontname = fontname[0];
					if (c_fontname != fontname) {
						fs.appendFile(source_folder + '/scss/fonts.scss', '@include font("' + fontname + '", "' + fontname + '", "400", "normal");\r\n', cb);
					}
					c_fontname = fontname;
				}
			}
		})
	}
};

function testWebP(callback) {

	let webP = new Image();
	webP.onload = webP.onerror = function () {
		callback(webP.height == 2);
	};
	webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {

	if (support == true) {
		document.querySelector('body').classList.add('webp');
	} else {
		document.querySelector('body').classList.add('no-webp');
	}
});

/*-------------------------------------*/

let hamburger = document.querySelector('.hamburger'),
	menu = document.querySelector('.menu'),
	menuBody = document.querySelector('.menu__body'),
	body = document.querySelector('body');

if (window.innerWidth <= 768) {
	body.classList.add('mob')
}

hamburger.addEventListener('click', function () {
	hamburger.classList.toggle('hamburger_active');
	menu.classList.toggle('menu_active');
	if (body.classList.contains('mob') && menu.classList.contains('menu_active')) {
		body.style.overflow = 'hidden'
	} else {
		body.style.overflow = 'visible';
	}
});

/*Dropdowns*/

let typeDropdown = document.querySelector('.type'),
	typeBody = document.querySelector('.body-type'),
	typeItem = document.querySelectorAll('.type-item');

for (var i = 0; i<typeItem.length; i++) {
	typeItem[i].addEventListener('click', function(event) {
		let target = event.target;
		let text = target.textContent;
		let title = document.querySelector('.type-title');

		title.textContent = text;
	})
}

typeDropdown.addEventListener('click', function(e) {
	typeBody.classList.toggle('hide');
	typeDropdown.classList.toggle('dropdown_active');
})

/*-------------------------------------*/

let districtDropdown = document.querySelector('.district'),
	districtBody = document.querySelector('.body-district'),
	districtItem = document.querySelectorAll('.district-item');

for (var i = 0; i<districtItem.length; i++) {
	districtItem[i].addEventListener('click', function(event) {
		let target = event.target;
		let text = target.textContent;
		let title = document.querySelector('.district-title');

		title.textContent = text;
	})
}

districtDropdown.addEventListener('click', function(e) {
	districtBody.classList.toggle('hide');
	districtDropdown.classList.toggle('dropdown_active');
})

//Ranges

const slideValue = document.querySelector("#slider-value-1");
const inputSlider = document.querySelector("#range-input-1");

let inputSquare = document.querySelector('.input__square');
let leftValue = document.querySelector('#value-left-1');
let rightValue = document.querySelector('#value-right-1');

inputSlider.oninput = (() => {
	let value = inputSlider.value;
	slideValue.textContent = value;
	inputSquare.value = value;
	slideValue.style.left = (value/10) + '%';
	if (value >= 900) {
		rightValue.style.opacity = 0.3;
	} else {
		rightValue.style.opacity = 1;
	}

	if (value <= 100) {
		leftValue.style.opacity = 0.3;
	} else {
		leftValue.style.opacity = 1;
	}

	if (value == 1000) {
		slideValue.textContent = '1 000';
		slideValue.style.width = 43 + "px";
	} else {
		slideValue.style.width = 'auto';
	}

	if (inputSquare.value == '' || inputSquare.value == null) {
		inputSquare.style.borderBottom = 1+'px'+' '+'solid'+' '+'#827686';
	} else {
		inputSquare.style.borderBottom = 'none';
	}
})

inputSquare.oninput = (() => {
	let value = inputSquare.value;
	inputSlider.value = value;
	slideValue.style.left = (value/10) + '%';
	slideValue.textContent = value;
	if (value == '' || value == null) {
		inputSquare.style.borderBottom = 1+'px'+' '+'solid'+' '+'#827686';
		inputSlider.value = 0;
		slideValue.textContent = '0';
	} else {
		inputSquare.style.borderBottom = 'none';
	}
	if (value >= 1000) {
		inputSlider.value = 1000;
		slideValue.textContent = '1 000';
		slideValue.style.width = 43 + "px";
		slideValue.style.left = 100 + '%';
	} else {
		inputSlider.value = value;
		slideValue.style.width = 'auto';
	}

	if (value >= 900) {
		rightValue.style.opacity = 0.3;
	} else {
		rightValue.style.opacity = 1;
	}
	if (value <= 100) {
		leftValue.style.opacity = 0.3;
	} else {
		leftValue.style.opacity = 1;
	}
})



















const slideValue2 = document.querySelector("#slider-value-2");
const inputSlider2 = document.querySelector("#range-input-2");

let inputPrice = document.querySelector('.input__price');
let leftValue2 = document.querySelector('#value-left-2');
let rightValue2 = document.querySelector('#value-right-2');

inputSlider2.oninput = (() => {
	let value = inputSlider2.value;
	slideValue2.textContent = value;
	inputPrice.value = value;
	slideValue2.style.left = (value/980) + '%';
	if (value >= 81000) {
		rightValue2.style.opacity = 0.3;
	} else {
		rightValue2.style.opacity = 1;
	}

	if (value <= 10000) {
		leftValue2.style.opacity = 0.3;
	} else {
		leftValue2.style.opacity = 1;
	}

	if (inputPrice.value == '' || inputPrice.value == null) {
		inputPrice.style.borderBottom = 1+'px'+' '+'solid'+' '+'#827686';
	} else {
		inputPrice.style.borderBottom = 'none';
	}
})

inputPrice.oninput = (() => {
	let value = inputPrice.value;
	inputSlider2.value = value;
	slideValue2.style.left = (value/980) + '%';
	slideValue2.textContent = value;
	if (value == '' || value == null) {
		inputPrice.style.borderBottom = 1+'px'+' '+'solid'+' '+'#827686';
		inputSlider2.value = 0;
		slideValue2.textContent = '0';
	} else {
		inputPrice.style.borderBottom = 'none';
	}
	if (value >= 98000) {
		inputSlider2.value = 98000;
		slideValue2.textContent = '98000';
		slideValue2.style.left = 100 + '%';
	} else {
		inputSlider2.value = value;
	}

	if (value >= 81000) {
		rightValue2.style.opacity = 0.3;
	} else {
		rightValue2.style.opacity = 1;
	}

	if (value <= 10000) {
		leftValue2.style.opacity = 0.3;
	} else {
		leftValue2.style.opacity = 1;
	}
})