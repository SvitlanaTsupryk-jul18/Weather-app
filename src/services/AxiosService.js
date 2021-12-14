import axios from "axios";

const apiClient = axios.create({
    baseURL: "https://api.weatherapi.com/v1",
    withCredentials: false,
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
    },
});

export default {
    getCurrent() {
        return apiClient.get("/current.json?key=39ae3ffceeec4c45802185424211212&q=London&aqi=no");
    },
    getCurrentCity(city) {
        return apiClient.get(`/current.json?key=39ae3ffceeec4c45802185424211212&q=${city}&aqi=no`);
    },
    getForecast(city) {
        return apiClient.get(`forecast.json?key=39ae3ffceeec4c45802185424211212&q=${city}&days=1&aqi=no&alerts=no`);
    },
    getForecastDays(city, days) {
        return apiClient.get(`forecast.json?key=39ae3ffceeec4c45802185424211212&q=${city}&days=${days}&aqi=no&alerts=no`);
    },
};
