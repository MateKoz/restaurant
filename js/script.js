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








