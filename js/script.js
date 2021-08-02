/*Данные по погоде*/
let countryList = document.querySelector('.country-list');
let selectedCity = document.querySelector('.selected-city');
let temperature = document.querySelector('.temperature');
let feels_likeTemperature = document.querySelector('.feels_like-temperature');
let pressure = document.querySelector('.pressure');
let humidity = document.querySelector('.humidity');
let windSpeed = document.querySelector('.wind-speed');
let weatherDescription = document.querySelector('.weather-description');
let weatherIcon = document.querySelector('.weather-icon');

/*---------------------------------------------------------------------------------------*/
let citiesSearch = document.querySelector('.cities-search');
let citiesSearchButton = document.querySelector('.cities-search-button');

citiesSearchButton.onclick = function() {
	city = citiesSearch.value;
	weatherSearch();
}

/*---------------------------------------------------------------------------------------*/
let city = "Moscow";
let apiKey = "0489a7246fa2a2ee031b7a968af86b25";

function weatherSearch() {
	fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)
	/*Преобразует строку в массив*/
	.then(function (response) {
		return response.json();
	})
	/*Что выводить*/
	.then(function (data) {
		console.log(data);
		countryList.innerHTML = `Страна: ${data.sys.country}`;
		selectedCity.innerHTML = `Погода в ${data.name}`;
		temperature.innerHTML = Math.round(data.main.temp - 273) + "&deg;";
		feels_likeTemperature.innerHTML = "Ощущается как " + Math.round(data.main.feels_like - 273) + "&deg;";
		pressure.innerHTML = `Давление ${data.main.pressure} бар`;
		humidity.innerHTML = `Влажность ${data.main.humidity} %`;
		windSpeed.innerHTML = `Скорость ветра ${data.wind.speed} м/с`;
		weatherDescription.innerHTML = data.weather[0]['description'];
		weatherIcon.innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png" width = "200px">`;
	})
	/*Обработка ошибок*/
	.catch(function () {
		alert('Данного города нет в нашшем списке')
	}) 
}

weatherSearch();
/*---------------------------------------------------------------------------------------*/


