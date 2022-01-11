
const storage = new Storage();
const weatherLocaton = storage.getLocation();
const weather = new Weather(weatherLocaton.city, weatherLocaton.state);
const ui = new UI();


//On page load load all the contents
document.addEventListener('DOMContentLoaded', getWeather);


document.querySelector('#w-changeBtn').addEventListener('click', (e)=>{
    const city = document.getElementById('city').value;
    const state = document.getElementById('state').value;


    //Set city and state to local storage
    storage.setLocation(city, state);
    
    //Change the city and state and render new data on screen
    weather.changeLocation(city, state);
    getWeather();

     $("#locModal").modal("hide");
});

function getWeather() {
    weather.getWeather().then((res) => ui.paint(res));
}
