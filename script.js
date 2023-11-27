document.addEventListener('DOMContentLoaded', function () {
    // First API call to get public IP address
    fetch('https://api64.ipify.org?format=json')
        .then(response => response.json())
        .then(data => {
            const ipElement = document.getElementById('ip');
            ipElement.innerText = `Your public IP address is: ${data.ip}`;

            // Second API call to get location based on the public IP address
            return fetch(`https://ipapi.co/${data.ip}/json/`);
        })
        .then(response => response.json())
        .then(data => {
            const locationElement = document.getElementById('location');
            locationElement.innerText = `Your location is: ${data.city}, ${data.region}, ${data.country_name}`;

            // Third API call to get weather based on the public IP address
            return fetch(`https://api.openweathermap.org/data/2.5/weather?q=${data.city}&appid=210c4532cbffc7077b27a551a882f4bc`);
        })
        .then(response => response.json())
        .then(data => {
            const weather1Element = document.getElementById('weather1');
            weather1Element.innerText = `The weather at your location is: ${data.weather[0].description}`;
        })
        .catch(error => console.error('Error:', error));
});
