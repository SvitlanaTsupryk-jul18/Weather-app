<template>
    <div>
        <label v-if="label">{{ label }}</label>
        <select :value="value"
                @change="updateValue"
                v-bind="$attrs">
            <option v-for="(option, index) in options"
                    :value="option.city"
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
    import cityList from "@/assets/data/uaCities.json";
    // let capital;
    // cityList.forEach(city => {
    //     city.capital === 'primary'? capital = city.city :''
    // });
    //
    // console.log("c",capital);

    export default {
        data: () => ({
            // cityList
        }),
        inheritAttrs: false,
        props: {
            options: {
                type: Array,
                required: true
            },
            value: [String, Number],
            label: String
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
                this.$emit('input', event.target.value);

            }
        }
    }
</script>