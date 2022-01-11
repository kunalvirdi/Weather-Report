class UI{
    constructor() {
        //All the variables
        this.location = document.getElementById('w-location');
        this.desc = document.getElementById('w-desc');
        this.string = document.getElementById('w-string');
        this.icon = document.getElementById('w-icon');
        this.hum = document.getElementById('w-humadity');
        this.cloud = document.getElementById('cloud');
        this.feelsLike = document.getElementById('feelslike');
        this.wind = document.getElementById('wind');
    }


    paint(data) {

        //Add data to the HTML elements
        
        this.location.textContent = `${data.name} ${data.sys.country}`;
        this.desc.textContent = `${data.weather[0].description}`;
        this.string.textContent = data.main.temp + `°C`;
        this.icon.src = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
        this.hum.textContent = `Humidity: ${data.main.humidity}%`;
        this.cloud.textContent = `Cloudiness: ${data.clouds.all}%`;
        this.feelsLike.textContent = `Feels Likes: ${data.main.humidity}°C`;
        this.wind.textContent=`Wind: ${this.msTokmh(data.wind.speed)}km/h ${data.wind.deg}°`
    }



    msTokmh(ms) {
        const ans = ms * 3.6;

        return Math.round(ans,2);
    }
}