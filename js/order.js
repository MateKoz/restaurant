const orderSummary = document.querySelector('.btn__summary-cart');
const mainFormSummary = document.querySelector('.order');
const returnBtnSummary = document.querySelector('.return__btn-summary')
const showPriceInSummary = document.querySelector('.order__p-sum');
const requiredInput = document.querySelector('#name-order');
const confirmSummaryCart = document.querySelector('.send-order');
const inputError = document.querySelector('.order__form-error')


const orderSummaryShowForm = () => {
    mainFormSummary.style.visibility = 'visible';
    menuDishes.style.display = 'none';
    let sumArrPrice = arrPrice.reduce(function (prev, curr) {
        return prev + curr;
    });
    showPriceInSummary.textContent = `${sumArrPrice} zł.`
    shadowCarts.style.display = 'none';

    listDishAll.forEach(item => (item.style.display = 'none'));
    iconDish.forEach(item => (item.style.display = 'none'));
    listDish.innerHTML = '';
}

const returnToMenu = (e) => {
    e.preventDefault();
    mainFormSummary.style.visibility = 'hidden';
    listDishAll.forEach(item => (item.style.display = 'none'));
    iconDish.forEach(item => (item.style.display = 'flex'));
    shadowCarts.style.display = 'none';
    listDish.innerHTML = '';
}

const confirmSummary = (e) => {
    e.preventDefault();
    console.log(requiredInput.value.length)
    if(requiredInput.value.length === 0) {
        inputError.style.visibility = 'visible'
    } else {
        console.log('udało sie');
        inputError.style.visibility = 'hidden'

    }

}

orderSummary.addEventListener('click', orderSummaryShowForm);
returnBtnSummary.addEventListener('click', returnToMenu);
confirmSummaryCart.addEventListener('click', confirmSummary)