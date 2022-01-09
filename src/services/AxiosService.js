import axios from "axios";

const clientKey= "39ae3ffceeec4c45802185424211212";

const apiClient = axios.create({
  baseURL: "https://api.weatherapi.com/v1",
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
  timeout: 15000,
});

export default {
  getCurrent() {
    return apiClient.get(
      `/current.json?key=${clientKey}&q=London&aqi=no`
    );
  },
  getCurrentCity(city) {
    return apiClient.get(
      `/current.json?key=${clientKey}&q=${city}&aqi=no`
    );
  },
  getCurrentCityLatLng(lat, lng) {
    return apiClient.get(
      `/current.json?key=${clientKey}&q=${lat},${lng}&aqi=no`
    );
  },
  getForecast(city) {
    return apiClient.get(
      `forecast.json?key=${clientKey}&q=${city}&days=1&aqi=no&alerts=no`
    );
  },
  getForecastDays(city, days) {
    return apiClient.get(
      `forecast.json?key=${clientKey}&q=${city}&days=${days}&aqi=no&alerts=no`
    );
  },
  // updateCityData(newCity){
  //   return apiClient.get(
  //       `/current.json?key=${clientKey}&q=${newCity.lat},${newCity.lng}&aqi=no`
  //   );
  // },
};
