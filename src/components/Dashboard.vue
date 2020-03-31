<template>
    <div>
        <headcomponent></headcomponent>
        <tunisiamap></tunisiamap>
        <maps></maps>
        <LandingChart></LandingChart>
        <Tunisia></Tunisia>
        <radrs></radrs>
        <all></all>    
    </div>    
    
</template>

<script>

import LandingChart from './LandingChart.vue'
import Tunisia from './Tunisia.vue'
import radrs from './radrs.vue'
import all from './all.vue'
import maps from './maps.vue'
import tunisiamap from './tunisiamap.vue'
import headcomponent from './headcomponent.vue'

export default {
    name : 'Dashboard',
    components : {
        LandingChart,
        Tunisia,
        radrs,
        all,
        maps,
        tunisiamap,
        headcomponent
    },
    data () {
        return {
            worldstats : []
        }
    },
}
</script>

<style>
    .mycolor{
        color : #880e4f
    }
    .mybackground {
        background:#c2185b

    }
</style>
