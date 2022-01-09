<template>
  <div class="home container">
<!--    <CitySelect label="Select a city" :options="cityList" v-model="city" />-->
    <CitySelect label="Select a city" :options="this.$store.state.cityList" v-model="city" />

    <ListCurrent :currentData="currentData" />
    <ListForecast :forecastData="forecastData.forecast" />
  </div>
</template>

<script>
// @ is an alias to /src

import CitySelect from "@/components/CitySelect.vue";
import AxiosService from "@/services/AxiosService.js";
import ListCurrent from "@/components/ListCurrent.vue";
import ListForecast from "@/components/ListForecast.vue";

import cityList from "@/assets/data/uaCities.json";

export default {
  name: "Home",
  components: {
    CitySelect,
    ListCurrent,
    ListForecast,
  },
  data: () => ({
    cityList,
    city: [Array],
    currentCityName: "",
    currentCityLat: "",
    currentCityLng: "",
    currentData: {},
    forecastData: {},
    // cityParams: this.updateNewCityData(),
  }),
  created: function () {
    console.log(this.$store.state.city.name);
    AxiosService.getCurrentCity(this.$store.state.city.name)
      .then((response) => {
        this.currentData = response.data;
        console.log("store", response.data);
      })
      .catch((error) => {
        console.log(error.response);
      });
    AxiosService.getForecastDays("London", 2)
      .then((response) => {
        this.forecastData = response.data;
        // console.log(response.data);
      })
      .catch((error) => {
        console.log(error.response);
      });
  },
  methods: {
    updateNewCityData() {
      const newCity = this.$store.state.city;
      console.log(newCity);
      return {
        newCity,
      };
    },
  },
  // computed() {
  mounted() {
    this.city = "Kiev";
    // this.city = this.$store.state.city;
    // this.city = this.$store.getters.getCityName;
    // this.city = this.$store.state.city.name;
    // cityList.forEach(city => {
    //     city.capital === 'primary' ? this.city = city.city : ''
    // });
  },
    // updated: function () {
    //     console.log(this.$store.state.city.name);
    //     AxiosService.getCurrentCity(this.$store.state.city.name)
    //         .then((response) => {
    //             this.currentData = response.data;
    //             console.log("store", response.data);
    //         })
    //         .catch((error) => {
    //             console.log(error.response);
    //         });
    //     AxiosService.getForecastDays("London", 2)
    //         .then((response) => {
    //             this.forecastData = response.data;
    //             // console.log(response.data);
    //         })
    //         .catch((error) => {
    //             console.log(error.response);
    //         });
    // },
};
</script>
