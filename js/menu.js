const iconDish = document.querySelectorAll(".header__menu-box");
const listDish = document.querySelector('.menu__options');

const dishes = [
    {name: `Chicken Burger`, type: "burger", price: 30, ingredients: 'bułka, ser, kurczak, pomidor, ogórek, sos', img: "chicken"},
    {name: `Cheese Burger`, type: "burger", price: 32, ingredients: 'bułka, podwójny ser, burger wołowy, pomidor, ogórek, sos', img: "cheeseburger"},
    {name: `Bacon Burger`, type: "burger", price: 34, ingredients: 'bułka, ser, burger wołowy, bekon, papryka, sos', img: "bacon"},
    {name: `Vege Burger`, type: "burger", price: 28, ingredients: 'bułka, ser wegański, burger z ciecierzycy, sałata, ogórek, pomidor', img: "vegan"},
    {name: `Double Burger`, type: "burger", price: 41, ingredients: 'bułka, podwójny burger wołowy, podwójny ser, pomidor, ogórek, sos', img: "double"},

    {name: `Salami`, type: "pizza", price: 32, ingredients: 'ser, salami, jalapeno', img: ""},
    {name: `Capricosa`, type: "pizza", price: 34, ingredients: 'Ser, pieczarki, szynka', img: ""},
    {name: `Hawajska`, type: "pizza", price: 37, ingredients: 'Ser, kurczak, ananas, kukurydza', img: ""},
    {name: `Margerita`, type: "pizza", price: 29, ingredients: 'ser, pomidory, bazylia', img: ""},
    {name: `4 Sery`, type: "pizza", price: 38, ingredients: 'sos, ser feta, gorgonzola, ser pleśniowy, cheddar', img: ""},

    {name: `Sałatka grecka`, type: "salad", price: 27, ingredients: 'ser, salami, jalapeno', img: ""},
    {name: `Sałatka Cesar`, type: "salad", price: 28, ingredients: 'Ser, pieczarki, szynka', img: ""},
    {name: `Sałatka z tuńczykiem`, type: "salad", price: 26, ingredients: 'Ser, kurczak, ananas, kukurydza', img: ""},
    {name: `Sałatka z brokułem `, type: "salad", price: 24, ingredients: 'ser, pomidory, bazylia', img: ""}
];

const showDish = (e) => {
    let idName = e.target.dataset.name
    console.log(idName);
    listDish.style.display = 'block';
    let title = document.createElement('div');
    listDish.append(title);

    title.innerHTML = `
          <div class="menu__options-main">
                <img src="img/landingpage/menu%20icon/${idName}.png" alt="${idName} icon"
                     class="menu__options-main-meal">
                <p class="menu__options-main-text">${idName}</p>
            </div>
    `

    dishes.forEach(item => {
        if(idName === item.type) {
            let dish = document.createElement('div');
            listDish.append(dish);

            dish.innerHTML = `      
            <div class="menu__options-dishes">
                <div class="menu__option_dish">
                    <div class="dish__left-main">
                        <div class="dish__left-box">
                            <p class="dish__left-box-name">${item.name}</p>
                            <p class="dish__right-box-price">${item.price} zł</p>
                        </div>
                        <p class="dish__left-box-ingredients"><span>Skład: </span>${item.ingredients}</p>
                        <button class="btn__dish">dodaj</button>
                    </div>
                    <div class="dish__right-box">
                        <img src="img/landingpage/dishes/${idName}/${item.img}.jpg" alt="${item.name}"
                             class="dish__right-box-img">
                    </div>
                </div>
            </div>
            <div class="underline"></div>
            `




        }
    });
}

iconDish.forEach(item => item.addEventListener('click', showDish))