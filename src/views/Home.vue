<template>
  <div class="home container">
    <div>HelloHello</div>
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <ListCurrent :currentData="currentData" />
    <ListForecast :forecastData="forecastData.forecast" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import AxiosService from "@/services/AxiosService.js";
import ListCurrent from "@/components/ListCurrent.vue";
import ListForecast from "@/components/ListForecast.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
    ListCurrent,
    ListForecast
  },
  data() {
    return {
      currentData: {},
      forecastData: {},
    };
  },
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
