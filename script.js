function getWeather() {
    const location = document.getElementById('location').value;
    const apiKey = 'YOUR_API_KEY'; // Insira sua chave de API aqui
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Falha ao obter dados do clima.');
            }
            return response.json();
        })
        .then(data => {
            const weatherDescription = data.weather[0].description;
            const temperature = data.main.temp;
            const weatherData = `${weatherDescription}. Temperatura: ${temperature}°C`;
            document.getElementById('result').textContent = `Previsão do Tempo: ${weatherData}`;
        })
        .catch(error => {
            console.error('Erro ao obter dados do clima:', error);
            document.getElementById('result').textContent = 'Falha ao obter dados do clima. Verifique a localização e tente novamente.';
        });
}
