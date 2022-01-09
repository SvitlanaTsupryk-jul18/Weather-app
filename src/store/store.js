import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import cityList from "@/assets/data/uaCities.json";
// import AxiosService from "@/services/AxiosService.js";

export default new Vuex.Store({
    state: {
        city: {
            id: 1,
            name: "Kyiv",
            lat: "50.43",
            lng: "30.52",
        },
        cityList,
    },
    mutations: {
        CHANGE_CITY(state, newCity) {
            state.city = Object.assign(state.city, newCity);
            // state.city.name = newCity.city;
            // state.city.lat = newCity.lat;
            // state.city.lng = newCity.lng;
        },
    },
    actions: {
        changeCity({commit}, cityLocationParams) {
            let cityLocation = cityLocationParams.split(",");
            let cityName = cityList.filter(city => (city.lat === cityLocation[0]) && (city.lng === cityLocation[1]));
            let newCity = {
                name: cityName[0].city,
                lat: cityLocation[0],
                lng: cityLocation[1],
            };

            // AxiosService.updateCityData(newCity);
            commit("CHANGE_CITY", newCity);
        },

        // createEvent({ commit }, event) {
        //   return EventService.postEvent(event).then( () => {
        //     commit('ADD_EVENT', event.data)
        //   })
        // },
        // fetchEvents({ commit }) {
        //   EventService.getEvents()
        //       .then(response => {
        //         commit('SET_EVENTS', response.data)
        //       })
        //       .catch(error => {
        //         console.log('There was an error:', error.response)
        //       })
        // },
    },
    getters: {
        getCityName: state => {
          return state.city.name;
        }
    },
    modules: {},
});
