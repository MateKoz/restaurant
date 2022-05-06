// confirm name and set form to display none

const confirmWelcomeBtn = document.querySelector('.welcome__form-btn');
const welcomeBox = document.querySelector(".welcome__box");
const inputWelcome = document.querySelector(".welcome__form-input");
const personName = document.querySelector('.hello__name')

const confirmName = (e) => {
    e.preventDefault();
    welcomeBox.style.display = 'none';
    const name = inputWelcome.value;
    personName.textContent = `${name}`

}

confirmWelcomeBtn.addEventListener('click', confirmName)



