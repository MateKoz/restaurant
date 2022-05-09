const confirmWelcomeBtn = document.querySelector('.welcome__form-btn');
const welcomeBox = document.querySelector(".welcome__box");
const inputWelcome = document.querySelector(".welcome__form-input");
const personName = document.querySelector('.header__name-input');
const errorInputWelcome = document.querySelector('.welcome__form-input-error');
const cartShop = document.querySelector(".nav__info-right");
const menuDishes = document.querySelector('.cart__shopping');
const shadowCarts = document.querySelector(".bgc-shadow");
const cancelBoxMenu = document.querySelector(".fa-xmark")

// confirm name and set form to display none. localstorage for name in input.

const confirmName = (e) => {
    e.preventDefault();
    let name = inputWelcome.value;
    localStorage.setItem('savedName', name);
    if (name.length === 0) {
        errorInputWelcome.style.visibility = 'visible';
    } else {
        showName();
    }
}

const showName = () => {
    const nameFromStorage = localStorage.getItem("savedName");
    personName.textContent = `${nameFromStorage}`;
    if (nameFromStorage != null) {
        welcomeBox.style.display = 'none';
    }
}
showName();

//function opens the list of selected dishes after clicking on the cart in the navigation;
const showMenu = () => {
    menuDishes.style.display = 'block';
    shadowCarts.style.display = 'block';
}

//display none after clicking X btn in menu carts shopping
const disableCarts = () => {
    menuDishes.style.display = 'none';
    shadowCarts.style.display = 'none';
}

//listener

cartShop.addEventListener('click', showMenu)
confirmWelcomeBtn.addEventListener('click', confirmName);
cancelBoxMenu.addEventListener("click", disableCarts)



const pizza = [
    {name: `Salami`, price: 23, ingredients: 'Salami, ser, papryka'},
    {name: `Capricosa`, price: 22, ingredients: 'Ser, pieczarki, szynka'},
    {name: `Hawajska`, price: 21, ingredients: 'Ser, kurczak, ananas, kukurydza'},
    {name: `Margerita`, price: 13, ingredients: 'Sos, ser, pomidory'},
    {name: `4 Sery`, price: 3, ingredients: 'Ser feta, gorgonzola, plesniowy, cheddar'}
];

const burger = [
    {name: `burger1`, price: 2332, ingredients: 'Salami, ser, papryka, 2'},
    {name: `burger2`, price: 223212, ingredients: 'Ser, pieczarki, szynka, 2'},
    {name: `burger3`, price: 213212, ingredients: 'Ser, kurczak, ananas, kukurydza, 2 '},
    {name: `burger4`, price: 133212, ingredients: 'Sos, ser, pomidory, 2'},
    {name: `burger5`, price: 33232, ingredients: 'Ser feta, gorgonzola, plesniowy, cheddar, 2'}
];

burger.forEach(item => console.log(item.name));





