<template>
    <div>
        <p>hi</p>
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

        })
        .catch((err) =>{
            this.error = err
        })
    
    }
}

</script>

<style>

</style>

