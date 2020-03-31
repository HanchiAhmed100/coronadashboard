<template>
    <div class="container">
        <div class="row">
            <div class="col-md loop">
                    <radio-svg-map  v-model="selectedLocations" v-on:click="change" :map="world" />
            </div>
            <div class="col-md">
                <div v-if="show == true">
                    <img v-bind:src="location.countryInfo.flag"/>
                    <p> Pays : {{location.country}}</p>
                    <p>Cas : {{location.active}} - Cas active : {{this.location.cases}} -- morts : {{location.deaths}} - retablie : {{location.recovered}} <br /> cas aujourd'hui :{{location.todayCases}} -- morts aujourd'hui {{location.todayDeaths}} </p>
                </div>
                <div v-if="show == false">   
                    <p> sss</p>
                </div>                
            </div>
            <input type="text" v-model="serach">
            <button v-on:click="se">scs</button>
             loding : {{this.loading}} -  load {{ this.load}}
        </div>        
    </div>
</template>
 
<script>
import { RadioSvgMap } from "vue-svg-map";
import world from "@svg-maps/world";
import axios from 'axios'

export default {
    name: "tunisamap",
    components: {
        RadioSvgMap
    },
    data() {
        return {
            world,
            selectedLocations : "",
            location : [],
            stats : [],
            ss : "",
            show : false,
            serach : "",
            found : [],
            loading : ''
        };
    },
    async mounted () {
        await axios.get('https://corona.lmao.ninja/countries?sort=country')
        .then((res)=>{
            this.stats = res.data
        })
        .catch((err) =>{
            this.error = err
        })
    },
    methods : {
        change : function(){
                for (let i = 0; i < this.stats.length; i++) {
                    if(this.stats[i].countryInfo.iso2.toLowerCase() == this.selectedLocations.toLowerCase()){
                        this.location = this.stats[i]   
                        this.show = true
                        this.ss="found"
                    }else{
                        this.ss = "not found" 
                    }
                }
            
        },
        se : function(){
            this.loading = "loading"
            for (let i = 0; i < this.stats.length; i++) {
                    this.load = "search "
                    if(this.stats[i].country.toLowerCase() == this.serach.toLowerCase()){
                        this.found = this.stats[i]
                        
                    }else{
                        this.found = []
                    }
                }
                this.load = "fin"
            this.loading = "finish" 
        }
    }
};
</script>
 
<style src="vue-svg-map/dist/index.css"></style>
<style>
path {
    cursor: pointer; 
    fill: #c2185b;
}
path:hover {
    fill : #000
}
.loop{
    cursor: grab
}
</style>