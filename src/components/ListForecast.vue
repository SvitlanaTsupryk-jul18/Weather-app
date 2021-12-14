<template>
  <div class="list">
    #1
    <h1>{{ forecastData ? forecastData.forecastday[0].date : 0}}</h1>
    <h2>{{ forecastData ? forecastData.forecastday[0].day.maxtemp_c  : 0}}</h2>
    <p>{{ forecastData ? forecastData.forecastday[0].astro.sunrise  : 0}}</p>
    <p>{{ forecastData ? forecastData.forecastday[0].hour[0].time : 0}}</p>
    <p>{{ forecastData ? forecastData.forecastday[0].hour[0].temp_c : 0}}</p>
    #2
    <h1>{{ forecastData ? forecastData.forecastday[1].date : 0}}</h1>
    <h2>{{ forecastData ? forecastData.forecastday[1].day.maxtemp_c  : 0}}</h2>
    <p>{{ forecastData ? forecastData.forecastday[1].astro.sunrise  : 0}}</p>
    <p>{{ forecastData ? forecastData.forecastday[1].hour[0].time : 0}}</p>
    <p>{{ forecastData ? forecastData.forecastday[1].hour[0].temp_c : 0}}</p>
  </div>
</template>

<script>
export default {
  name: "ListForecast",
  props: {
    forecastData: Object,
  },
};
</script>
