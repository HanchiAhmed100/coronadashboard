<template>
    <div>
        <p>hi</p>
        
        <p v-for="(stat , index) in Stats" v-bind:key="stat.countryInfo._id" v-bind:index="index" >
            <img v-bind:src="stat.countryInfo.flag"/>  
            countrie : {{stat.country}} -- cases : {{stat.cases}}
        </p>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    name : 'all',
    data () {
        return {
            Stats : [],
        }
    },

    async mounted () {

        this.Loading = true,
        
        await axios.get('https://corona.lmao.ninja/countries?sort=country')
        .then((res)=>{
            this.Stats = res.data
            this.Stats = this.Stats.sort((a, b) =>  b.country - a.country  );

        })
        .catch((err) =>{
            this.error = err
        })
    
    }
}

</script>

<style>

</style>

