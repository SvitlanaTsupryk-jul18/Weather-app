<template>
  <div class="list">
    <!--    <h1>{{ cityName }}</h1>-->
    <h1>{{ city.name }}</h1>

    <!--    <h1>{{ currentData.location ? currentData.location.name : 0}}</h1>-->
    <h2>{{ currentData.current ? currentData.current.cloud : 0 }}</h2>
    <p>{{ currentData.current ? currentData.current.feelslike_c : 0 }}</p>

    <!--    <p>{{ getCity("kiev") }}</p>-->
    <!--        <p>{{ getCityByName("kiev") }}</p>-->
  </div>
</template>

<script>
// import {mapState, mapGetters} from "vuex";
import { mapState } from "vuex";

export default {
  name: "ListCurrent",
  props: {
    currentData: Object,
  },
  // 1
  // computed:{
  //     cityName(){
  //       return this.$store.state.city.name
  //     }
  // }
  // 2
  // computed: mapState({
  //   cityName: state => state.city.name
  // })
  //
  //  3
  //   computed: mapState({
  //     city: "city",
  //     // cityList: "cityList"
  //   })

  computed: {
    // citiesLength(){
    //   return this.$store.getters.citiesLength;
    // },

    getCity() {
      return this.$store.getters.getCityByName;
    },

    // ...mapGetters(['getCityByName']),
    // ...mapState(["city","cityList"])
    ...mapState(["city"]),
  },
};
</script>
