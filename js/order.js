const btnOrderSummary = document.querySelector('.btnssda');
const windowOrderSummary = document.querySelector('.order');
const orderSum = document.querySelector('.order__p-sum')

const showWindow = () => {
    let sumArrPrice = arrPrice.reduce(function (prev, curr) {
        return prev + curr;
    });

    windowOrderSummary.style.visibility = 'visible';
    menuDishes.style.display = 'none';
    shadowCarts.style.display = 'none';
    orderSum.textContent = `${sumArrPrice} zł.`
}

btnOrderSummary.addEventListener('click', showWindow)