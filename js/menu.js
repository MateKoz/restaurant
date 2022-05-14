const iconDish = document.querySelectorAll('.header__menu-box');
const listDish = document.querySelector('.menu__options');
const listDishAll = document.querySelectorAll('.menu__options');
const cartShoppingBox = document.querySelector('.cart__shopping-box');
const sumPriceCarts = document.querySelector('.sum__price-span');
const navInfoPrice = document.querySelector('.nav__info-shop-price');
const tipDelete = document.querySelector('.cart__shopping-textInfo')

let arrPrice = [0];
let priceDish;

const showDish = e => {
	let idName = e.target.dataset.name;
	listDish.style.display = 'block';
	let title = document.createElement('div');
	title.classList.add('menu__options-main');
	listDish.append(title);
	iconDish.forEach(item => (item.style.display = 'none'));

	title.innerHTML = `
                <img src="img/landingpage/menu%20icon/${idName}.png" alt="${idName} icon"
                     class="menu__options-main-meal">
                <p class="menu__options-main-text">${idName}</p>
                <button class="menu__options-main-btn btn__dish-back">Powrót</button>
    `;

	// we dynamically add all the dishes from the dishes array

	dishes.forEach(item => {
		if (idName === item.type && idName !== 'drinks') {
			let dish = document.createElement('div');
			dish.classList.add('menu__options-dishes');
			listDish.append(dish);
			dish.innerHTML = `
                <div class="menu__option_dish">
                    <div class="dish__left-main">
                        <div class="dish__left-box">
                            <p class="dish__left-box-name" >${item.name}</p>
                            <p class="dish__right-box-price">${item.price} zł</p>
                        </div>
                        <p class="dish__left-box-ingredients"><span>Skład: </span>${item.ingredients}</p>
                        <button class="btn__dish" data-name="${item.name}" data-price="${item.price}">dodaj</button>
                    </div>
                    <div class="dish__right-box">
                        <img src="img/landingpage/dishes/${idName}/${item.img}.jpg" alt="${item.name}"
                             class="dish__right-box-img">
                    </div>
                </div>
            <div class="underline"></div>
            `;

		} else if (item.type === 'drinks' && idName === 'drinks') {
			let dish = document.createElement('div');
			dish.classList.add('menu__options-dishes');
			listDish.append(dish);
			dish.innerHTML = `
                <div class="menu__option_dish">
                    <div class="dish__left-main">
                        <div class="dish__left-box">
                            <p class="dish__left-box-name">${item.name}</p>
                            <p class="dish__right-box-price">${item.price} zł</p>
                        </div>
                        <button class="btn__dish" data-name="${item.name}" data-price="${item.price}">dodaj</button>
                    </div>
                    <div class="dish__right-box">
                        <img src="img/landingpage/dishes/${idName}/${item.img}.jpg" alt="${item.name}"
                             class="dish__right-box-img">
                    </div>
                </div>
            <div class="underline"></div>
            `;
		}
	});

	const btnBack = document.querySelector('.menu__options-main-btn');
	const allBtnPrice = document.querySelectorAll('.btn__dish');

	//the function adds items to the card with the given name and price

	const addDish = e => {
		let dishCart = document.createElement('div');
		dishCart.classList.add('cart__shopping-box-dish');
		cartShoppingBox.append(dishCart);

		dishCart.innerHTML = `
        <span class="box-dish">
            <p class="box-dish-name">${e.target.dataset.name}</p>
        </span>
        <p class="box-dish-price">${e.target.dataset.price} zł</p>
    `;
		priceDish = parseInt(e.target.dataset.price);
		arrPrice.push(priceDish);
		accountMoney();
	};

	//function which takes us back to the main menu after clicking the "powrót" button

	const backToMenu = () => {
		listDishAll.forEach(item => (item.style.display = 'none'));
		iconDish.forEach(item => (item.style.display = 'flex'));
		listDish.innerHTML = '';
	};

	allBtnPrice.forEach(item => item.addEventListener('click', addDish));
	btnBack.addEventListener('click', backToMenu);
};

const accountMoney = () => {
	let sumArrPrice = arrPrice.reduce(function (prev, curr) {
		return prev + curr;
	});

	sumPriceCarts.textContent = `Razem: ${sumArrPrice} zł.`;
	navInfoPrice.textContent = `Wartość: ${sumArrPrice} zł.`;
    tipDelete.textContent = 'Usuń pozycję klikając na nią'
};

cartShoppingBox.addEventListener('click', event => {
	const closestItem = event.target.closest('.cart__shopping-box-dish');
	const price = parseInt(closestItem.querySelector('.box-dish-price').innerText);
	console.log(price);
	const indexOfMeal = arrPrice.indexOf(price);
	arrPrice.splice(indexOfMeal, 1);
	closestItem.remove();

	accountMoney();

	if (arrPrice.length === 1) {
		sumPriceCarts.textContent = 'Koszyk jest pusty.';
		navInfoPrice.textContent = 'Koszyk pusty';
        tipDelete.textContent = '';
	}
});

iconDish.forEach(item => item.addEventListener('click', showDish));
