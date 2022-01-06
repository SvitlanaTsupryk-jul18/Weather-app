<template>
  <div>
    <h1>Create an Event</h1>
    <form @submit.prevent="createEvent">
<!--      <label>Select a category</label>-->
<!--      <select v-model="event.category">-->
<!--        <option v-for="cat in categories" :key="cat">{{ cat }}</option>-->
<!--      </select>-->

      <BaseSelect label="Select a category" :options="categories" v-model="event.category"/>

      <h3>Name & describe your event</h3>
      <BaseInput
              v-model="event.title"
              label="Title"
              type="text"
              placeholder="Add an event title"
              class="field"
      />
      <BaseInput
              v-model="event.description"
              label="Description"
              type="text"
              placeholder="Add a description"
              class="field"
      />
      <h3>Where is your event?</h3>
      <BaseInput
              v-model="event.location"
              label="Location"
              type="text"
              placeholder="Add a location"
              class="field"
      />
      <h3>When is your event?</h3>
      <div class="field">
        <label>Date</label>
        <datepicker v-model="event.date" placeholder="Select a date"/>
      </div>

      <div class="field">
        <label>Select a time</label>
        <select v-model="event.time">
          <option v-for="time in times" :key="time">{{ time }}</option>
        </select>
      </div>

      <BaseButton @click="createEvent"/>
    </form>
  </div>
</template>

<script>
  import BaseInput from "@/components/BaseInput.vue";
  import BaseSelect from "@/components/BaseSelect.vue";

  export default {
  name: "Form",
  components: {
    BaseInput,
    BaseSelect
  },
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
