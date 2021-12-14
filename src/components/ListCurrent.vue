<template>
  <div class="list">
    <h1>{{ currentData.location ? currentData.location.name : 0}}</h1>
    <h2>{{ currentData.current ? currentData.current.cloud  : 0}}</h2>
    <p>{{ currentData.current ? currentData.current.feelslike_c  : 0}}</p>
  </div>
</template>

<script>
export default {
  name: "ListCurrent",
  props: {
    currentData: Object,
  },
};
</script>
