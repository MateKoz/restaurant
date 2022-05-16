const orderSummary = document.querySelector('.btn__summary-cart');
const mainFormSummary = document.querySelector('.order');
const returnBtnSummary = document.querySelector('.return__btn-summary')
const showPriceInSummary = document.querySelector('.order__p-sum');
const confirmSummaryCart = document.querySelector('.send-order');
const inputError = document.querySelector('.order__form-error')

const inputName = document.querySelector('#name-order');
const inputSurname = document.querySelector('#surname-order');
const cityInput = document.querySelector('#city-order');
const addressInput = document.querySelector('#address-order');
const phoneInput = document.querySelector('#phone-order');
const payCategory = document.querySelector('#pay-order');

const orderSummaryShowForm = () => {
    mainFormSummary.style.visibility = 'visible';
    menuDishes.style.display = 'none';
    let sumArrPrice = arrPrice.reduce(function (prev, curr) {
        return prev + curr;
    });

    showPriceInSummary.textContent = `${sumArrPrice} zł.`
    listDishAll.forEach(item => (item.style.display = 'none'));
    iconDish.forEach(item => (item.style.display = 'none'));
    listDish.innerHTML = '';
}

const returnToMenu = (e) => {
    e.preventDefault();
    mainFormSummary.style.visibility = 'hidden';
    inputError.style.visibility = 'hidden'
    listDishAll.forEach(item => (item.style.display = 'none'));
    iconDish.forEach(item => (item.style.display = 'flex'));
    listDish.innerHTML = '';
    clearInputs();
}

const confirmSummary = (e) => {
    e.preventDefault();
    if(inputName.value === '' || inputSurname.value === '' || cityInput.value === '' || addressInput.value === '' || phoneInput.value === '' || payCategory.value === 'none') {
        inputError.style.visibility = 'visible'
    } else {
        alert('Twoje zamówienie zostało wysłane do realizacji. Dziękujemy');
        returnToMenu(e);
        arrPrice = [0];
        cartShoppingBox.innerHTML = '';

        if (arrPrice.length === 1) {
            sumPriceCarts.textContent = 'Koszyk jest pusty.';
            navInfoPrice.textContent = 'Koszyk pusty';
            tipDelete.textContent = '';
            btnCompleteOrder.style.display = 'none'
        }
    }
}

const clearInputs = () => {
    inputError.style.visibility = 'hidden'
    inputName.value = '';
    inputSurname.value = '';
    cityInput.value = '';
    addressInput.value = '';
    phoneInput.value = '';
    payCategory.value = 'none';
}

orderSummary.addEventListener('click', orderSummaryShowForm);
returnBtnSummary.addEventListener('click', returnToMenu);
confirmSummaryCart.addEventListener('click', confirmSummary)