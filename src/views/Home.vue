<template>
  <div class="home container">
    <CityForm :currentData="currentData"  :currentCity="currentCity"/>
    <ListCurrent :currentData="currentData" />
    <ListForecast :forecastData="forecastData.forecast" />
  </div>
</template>

<script>
// @ is an alias to /src

import CityForm from "@/components/CityForm.vue";
import AxiosService from "@/services/AxiosService.js";
import ListCurrent from "@/components/ListCurrent.vue";
import ListForecast from "@/components/ListForecast.vue";

export default {
  name: "Home",
  components: {
    CityForm,
    ListCurrent,
    ListForecast
  },
  data: () => ({
    currentCityName: "",
    currentCityLat: "",
    currentCityLng: "",
    currentData: {},
    forecastData: {},
  }),
  created: function () {
    AxiosService.getCurrentCity("London")
      .then((response) => {
        this.currentData = response.data;
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error.response);
      });
    AxiosService.getForecastDays("London",2)
      .then((response) => {
        this.forecastData = response.data;
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error.response);
      });
  },
};
</script>
