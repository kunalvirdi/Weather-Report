class Storage{
    constructor() {
        this.city;
        this.state;
        this.defaultCity = 'Patiala';
        this.defaultState = 'Punjab';
    }

    // Get data from Local Storage
    getLocation() {
        //If our local storage is empty then we add our default city and state
        if (localStorage.getItem('city') === null) {
            this.city = this.defaultCity;
        } else {
            this.city = localStorage.getItem('city');
        }

        if (localStorage.getItem("state") === null) {
          this.state = this.defaultState;
        } else {
          this.state = localStorage.getItem("state");
        }

        return {
            city: this.city,
            state: this.state
        }
    }

    //Store locaton to local Storage
    setLocation(city,state) {
        localStorage.setItem('city', city);
        localStorage.setItem('state', state);
    }
}