export class HomeService {


    // Make call to weather api
    getWeatherReport() {
        // Dummy Data
        let city1 = { city: 'Tokyo', temp: 22.5, forecast: 'Sunny', summary: 'May be good to flaunt those new shades' };
        let city2 = { city: 'Dallas', temp: 38, forecast: 'Cloudy', summary: 'Might be too hot to wear your cowboy outfit' };
        let city3 = { city: 'Mumbai', temp: 26, forecast: 'Rain', summary: 'Don\'t forget your umbrella. Trains are delayed.' };
        let city4 = { city: 'London', temp: -5, forecast: 'Snow', summary: 'Brace yourself everyone, winter is coming.' };
        return [city1, city2, city3, city4];
    }
}