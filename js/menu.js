const iconDish = document.querySelectorAll(".header__menu-box");
const listDish = document.querySelector('.menu__options');
const listDishAll = document.querySelectorAll('.menu__options');

let arrPrice = [];

const showDish = (e) => {
    let idName = e.target.dataset.name
    listDish.style.display = 'block';
    let title = document.createElement('div');
    title.classList.add('menu__options-main');
    listDish.append(title);
    iconDish.forEach(item => item.style.display = 'none')

    title.innerHTML = `
                <img src="img/landingpage/menu%20icon/${idName}.png" alt="${idName} icon"
                     class="menu__options-main-meal">
                <p class="menu__options-main-text">${idName}</p>
                <button class="menu__options-main-btn btn__dish-back">Powrót</button>
    `

    // we dynamically add all the dishes from the dishes array

    dishes.forEach(item => {
        if (idName === item.type && idName !== 'drinks') {
            let dish = document.createElement('div');
            dish.classList.add("menu__options-dishes")
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
            `
        } else if (item.type === 'drinks' && idName === 'drinks') {
            let dish = document.createElement('div');
            dish.classList.add("menu__options-dishes")
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
            `
        }
    });

    const cartShoppingBox = document.querySelector('.cart__shopping-box');
    const sumPriceCarts = document.querySelector('.sum__price-span');
    const sumPriceText = document.querySelector('.sum__price-p');
    const navInfoPrice = document.querySelector('.nav__info-shop-price');
    const btnBack = document.querySelector('.menu__options-main-btn');
    const allBtnPrice = document.querySelectorAll('.btn__dish');


    //the function adds items to the card with the given name and price

    const addDish = e => {
        let dishCart = document.createElement('div')
        dishCart.classList.add('cart__shopping-box-dish')
        cartShoppingBox.append(dishCart)
        dishCart.innerHTML = `
        <span class="box-dish">
            <i class="fa-solid fa-trash-can"></i>
            <p class="box-dish-name">${e.target.dataset.name}</p>
        </span>
        <p class="box-dish-price">${e.target.dataset.price} zł</p>
    `

        const priceDish = e.target.dataset.price * 1
        arrPrice.push(priceDish)

        const sumArrPrice = arrPrice.reduce(function (prev, curr) {
            return prev + curr
        })
        sumPriceText.textContent = 'Razem :'
        sumPriceText.style.paddingRight = `3rem`
        sumPriceCarts.textContent = `${sumArrPrice} zł`
        navInfoPrice.textContent = `( ${sumArrPrice} zł )`

        const allTrashIcon = document.querySelectorAll('.fa-trash-can')
        allTrashIcon.forEach(item => item.addEventListener('click', deleteItem))
    }

    const deleteItem = e => {
        let parent = e.target.parentElement.parentElement
        let price = parseInt(parent.querySelector('.box-dish-price').textContent)
        console.log(price);

        arrPrice.reduce(function (prev, curr) {
            return prev + curr
        });

    }

    //function which takes us back to the main menu after clicking the "powrót" button
    const backToMenu = () => {
        listDishAll.forEach(item => (item.style.display = 'none'))
        iconDish.forEach(item => (item.style.display = 'flex'))
        listDish.innerHTML = ''
    }

    allBtnPrice.forEach(item => item.addEventListener('click', addDish))
    btnBack.addEventListener('click', backToMenu)
}

iconDish.forEach(item => item.addEventListener('click', showDish));