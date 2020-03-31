<template>
    <div class="vue-world-map">        
            <MapChart showLegend="true" v-bind:countryData="this.mydata" v-bind:defaultCountryFillColor="map.defaultCountryFillColor" v-bind:highColor='map.highColor' v-bind:countryStrokeColor='map.countryStrokeColor' v-bind:lowColor="map.lowColor"></MapChart>
    </div>
</template>

<script>
import MapChart from 'vue-map-chart'

import axios from 'axios'

export default {
    name : 'maps',
    components : {
        MapChart
    },
    data () {
        return {
            map: {
                    defaultCountryFillColor: '#d3d3d3',
                    highColor: '#D80000',
                    lowColor: '#FF8C8C',
                    countryStrokeColor: 'white'
                },
            Stats : [],
            mydata : {}
        }
    },

    async mounted () {        
        await axios.get('https://corona.lmao.ninja/countries?sort=country')
        .then((res)=>{
            this.Stats = res.data

        })
        .catch((err) =>{
            this.error = err
        })
    
        for (let i = 0; this.Stats.length; i++) {
            this.$set(this.mydata, this.Stats[i].countryInfo.iso2 ,  this.Stats[i].cases)
        }
    }

}

</script>

<style>

</style>

