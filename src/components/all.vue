<template>
    <div>
        <p>hi</p>
        
        <p v-for="(stat , index) in stats" v-bind:key="stat.countryInfo._id" v-bind:index="index" >
            <img v-bind:src="stat.countryInfo.flag"/>  
            countrie : {{stat.country}} -- cases : {{stat.cases}}
        </p>
    </div>
</template>

<script>
import service from '../service/service.js'

export default {
    name : 'all',
    data () {
        return {
            stats : [],
        }
    },

    async mounted () {
        this.stats = await service.Get_World_Data()
    }
}

</script>

<style>

</style>

