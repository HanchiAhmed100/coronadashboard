<template>
    <div>
        <div class="row">
            <div class="col-12">
                <tunisiamap></tunisiamap>
                <maps></maps>
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
import maps from './maps.vue'
import tunisiamap from './tunisiamap.vue'
export default {
    name : 'Dashboard',
    components : {
        LandingChart,
        Tunisia,
        radrs,
        all,
        maps,
        tunisiamap
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
