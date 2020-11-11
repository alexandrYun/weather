const form = document.querySelector('.city__form');
const input = document.querySelector('.city__input');
const submit = document.querySelector('.city__submit');
const display = document.querySelector('.display');

const apiKey = 'e38f7f4aa4ee8e319fc7d462f6f99fda';
const getRequest = `api.openweathermap.org/data/2.5/weather?q=London&appid=${apiKey}`;

form.onsubmit = (e) => {
    e.preventDefault();
    console.log(input.value);
}

// if(input.value == '') {
//     submit.disabled = true;
//     submit.style.opacity = '0.5';
// } else if(input.value != '') {
//     submit.disabled = false;
// }

