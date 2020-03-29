<template>
    <div>
        <div class="row">
            <div class="col-12">
                <LandingChart></LandingChart>
                <Tunisia></Tunisia>
                <radrs></radrs>
                <all></all>
            </div>
        </div>
    </div>    
</template>

<script>

import LandingChart from './LandingChart.vue'
import Tunisia from './Tunisia.vue'
import radrs from './radrs.vue'
import all from './all.vue'
export default {
    name : 'Dashboard',
    components : {
        LandingChart,
        Tunisia,
        radrs,
        all
    },
    data () {
        return {
            
        }
    },
    mounted(){

    }

}
</script>

<style>

</style>
