import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    city: {
      id: 1,
      name: "Kyiv"
    },
    categories: ['sustainability', 'nature', 'animal welfare', 'housing', 'education', 'food', 'community']
  },
  mutations: {},
  actions: {
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
    catLength: state =>  {
      return state.categories.length;
    },
    // doneTodos: (state) => {
    //   return state.todos.filter(todo => todo.done)
    // },
    // activeTodosCount: (state, getters) => {
    //   return state.todos.length - getters.doneTodos.length
    // },
    // activeTodosCount: (state) => {
    //   return state.todos.filter(todo => !todo.done).length
    // }
  },
  modules: {},
});
