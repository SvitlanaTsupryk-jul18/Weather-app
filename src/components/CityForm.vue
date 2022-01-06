<template>
    <div>
        <form @submit.prevent="updateCity">
            <CitySelect label="Select a city" :options="cityList" v-model="city"/>
        </form>
    </div>
</template>

<script>
    import CitySelect from "@/components/CitySelect.vue";
    import cityList from "@/assets/data/uaCities.json";

    export default {
        name: "CityForm",
        props: {},
        data: () => ({
            cityList,
            // cityList:this.$store.state.cityList
            // city: "Kiev"
            city: ""
        }),
        mounted() {
            // this.city = "Kiev";
            cityList.forEach(city => {
                city.capital === 'primary' ? this.city = city.city : ''
            });
        },
        methods: {
            updateCity() {
             console.log(this.city);
            }
        },
        components: {
            CitySelect
        },
    };
</script>
