const form = document.querySelector('.city__form');
const input = document.querySelector('.city__input');
const submit = document.querySelector('.city__submit');
const display = document.querySelector('.display');
const city = document.querySelector('.display__city');
const temperature = document.querySelector('.display__temperature');
const wind = document.querySelector('.display__wind');
const weatherType = document.querySelector('.display__weathertype');

const apiKey = 'e38f7f4aa4ee8e319fc7d462f6f99fda';

form.onsubmit = (e) => {
    e.preventDefault();
    submit.style.animation = 'submit 0.2s';
    setTimeout(() => {
        submit.style.animation = null;
    }, 200)
    let getRequest = `http://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=${apiKey}`;
    fetch(getRequest)
    .then(response => response.json())
    .then(json => {
        city.innerHTML = json.name;
        temperature.innerHTML = `${(json.main.temp - 273).toFixed(1)}°`;
        wind.innerHTML = `Ветер: ${json.wind.speed} м/с`;
        weatherType.innerHTML = `${json.weather[0].main} (${json.weather[0].description})`;
        if (json.weather[0].main == 'Clear') {
            display.classList.remove(...display.classList);
            display.classList.add('display', 'display_clear');
        } else if (json.weather[0].main == 'Rain') {
            display.classList.remove(...display.classList);
            display.classList.add('display', 'display_rain');
        } else if (json.weather[0].main == 'Clouds') {
            display.classList.remove(...display.classList);
            display.classList.add('display', 'display_cloudy');
        } else if (json.weather[0].main == 'Snow') {
            display.classList.remove(...display.classList);
            display.classList.add('display', 'display_snow');
        } else if (json.weather[0].main == 'Mist') {
            display.classList.remove(...display.classList);
            display.classList.add('display', 'display_mist');
        } else {
            display.classList.remove(...display.classList);
            display.classList.add('display');
        }
    })
}