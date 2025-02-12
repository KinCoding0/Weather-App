let valueSearch = document.getElementById('valueSearch');
let city = document.getElementById('city');
let temperature = document.getElementById('temperature');
let description = document.querySelector('.description');
let clouds = document.getElementById('clouds');
let humidity = document.getElementById('humidity');
let pressure = document.getElementById('pressure');
let form = document.querySelector('form');
let main = document.querySelector('main');
form.addEventListener('submit', event => {
  event.preventDefault();
  if (valueSearch.value != '') {
    searchWeather();
  }
});
let id = 'bd4b3579ea1246316143e6fb010d7407';
let url =
  'https://api.openweathermap.org/data/2.5/weather?units=metric&appid=' + id;
const searchWeather = () => {
  fetch(url + '&q=' + valueSearch.value)
    .then(responsive => responsive.json())
    .then(data => {
      if (data.cod == 200) {
        console.log(data);
        city.querySelector('figcaption').innerText = valueSearch.value;
        city.querySelector('img').src =
          'https://flagsapi.com/' + data.sys.country + '/shiny/32.png';
        temperature.querySelector('img').src =
          'http://openweathermap.org/img/wn/' +
          data.weather[0].icon +
          '@4x.png';
        temperature.querySelector('figcaption span').innerText = data.main.temp;
        description.innerHTML = data.weather[0].description;
        clouds.innerHTML = data.clouds.all;
        humidity.innerHTML = data.main.humidity;
        pressure.innerHTML = data.main.pressure;
      } else {
        main.classList.add('error');
        setInterval(() => {
          main.classList.remove('error');
        }, 1000);
      }

      valueSearch.value = '';
    });
};
