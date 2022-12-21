import axios from "axios";

const baseUrl = process.env.REACT_APP_OPEN_WEATHER_BASE_URL;
const apiKey = process.env.REACT_APP_OPEN_WEATHER_API_KEY;

export const getCurrentWeather = async (city = "Singapore", country = "") => {
    console.log(city, country);
    const url = baseUrl + '/weather?q=' + city + ',' + country + '&appid=' + apiKey;
    return await axios({
        method: 'GET',
        url: url,
    }).then(function (response) {
        let data = response.data;
        return data;
    }).catch(function (error) {
        return error.response;
    });
}