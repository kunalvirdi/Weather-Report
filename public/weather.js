class Weather {
  constructor(city, state) {
    this.API_Key = "dde6bf8b9a6b32a491b2cb163aafa22b";
    this.city = city;
    this.state = state;
  }

  //Fetch weather from API
  async getWeather() {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.state}&units=metric&appid=${this.API_Key}`
    );

    const data = await response.json();

    return data;
  }

  //Change the weather location

  changeLocation(city, state) {
    this.city = city;
    this.state = state;
  }
}
