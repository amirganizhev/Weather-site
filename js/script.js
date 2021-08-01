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
		countryList.innerHTML = data.sys.country;
		selectedCity.innerHTML = data.name;
		temperature.innerHTML = Math.round(data.main.temp - 273) + "&deg;";
		feels_likeTemperature.innerHTML = Math.round(data.main.feels_like - 273) + "&deg;";
		pressure.innerHTML = data.main.pressure;
		humidity.innerHTML = data.main.humidity;
		windSpeed.innerHTML = data.wind.speed;
		weatherDescription.innerHTML = data.weather[0]['description'];
		weatherIcon.innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png">`;
	})
	/*Обработка ошибок*/
	.catch(function () {
		alert('Данного города нет в нашшем списке')
	}) 
}

weatherSearch();
/*---------------------------------------------------------------------------------------*/


