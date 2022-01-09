<template>
  <div>
    <label v-if="label">{{ label }}</label>
    <select v-bind:value="value" @change="updateValue" v-bind="$attrs">
      <option
        v-for="(option, index) in options"
        :value="option.lat+','+option.lng"
        :key="index"
        :selected="option === value"
      >
        {{ option.city }}, {{ option.admin_name }}
      </option>
    </select>
  </div>
</template>
<!--                    :default="option.capital = 'primary'"-->

<script>
// import cityList from "@/assets/data/uaCities.json";
// let capital;
// cityList.forEach(city => {
//     city.capital === 'primary'? capital = city.city :''
// });
//
// console.log("c",capital);

// import AxiosService from "@/services/AxiosService.js";

export default {
  data: () => ({
    // cityList
    cityLocationParams:"",
    // city: this.$store.state.city.name

    // newCityObj: this.updateCurrentCity()
  }),
  inheritAttrs: false,
  props: {
    options: {
      type: Array,
      required: true,
    },
    value: [String, Array, Object],
    label: String,
  },
  // mounted: () => {
  //     let cities = cityList.map(city => {
  //         return city.city;
  //     });
  //
  //     this.cityList = cities;
  // },

  methods: {
    updateValue(event) {
      this.$emit("input", event.target.value);

      this.cityLocationParams = event.target.value;
      console.log(this.cityLocationParams);
      // this.$store.state.city.name = event.target.value;
      // this.$store.commit('CHANGE_CITY', this.city);

      this.$store.dispatch("changeCity", this.cityLocationParams);
    },

    // updateCurrentCity(){
    //   const newCurrent = this.cityLocationParams.split(",");
    //   return {
    //     lat: newCurrent[0],
    //     lng: newCurrent[1],
    //   }
    // }
  },
};
</script>
