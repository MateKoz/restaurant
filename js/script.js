// confirm name and set form to display none

const confirmWelcomeBtn = document.querySelector('.welcome__form-btn');
const welcomeBox = document.querySelector(".welcome__box");
const inputWelcome = document.querySelector(".welcome__form-input");
const personName = document.querySelector('.hello__name')


const confirmName = (e) => {
    e.preventDefault();
    let name = inputWelcome.value;
    localStorage.setItem('savedName', name);
    showName();
}

const showName = () => {
    const nameFromStorage = localStorage.getItem("savedName");
    personName.textContent = `${nameFromStorage}`;
    if (nameFromStorage != null) {
        welcomeBox.style.display = 'none';
    }
}
showName();



confirmWelcomeBtn.addEventListener('click', confirmName);






