<template>
    <checkbox-svg-map v-model="selectedLocations" v-on:click="change" :map="world" />

</template>
 
<script>
import { CheckboxSvgMap } from "vue-svg-map";
import world from "@svg-maps/world";
 
export default {
    name: "tunisamap",
    components: {
        CheckboxSvgMap
    },
    data() {
        return {
            world,
            selectedLocations : []
        };
    },
    mounted(){

    },
    methods : {
        change : function(){
            if(this.selectedLocations.length == 2 ){
                this.selectedLocations = []
            }
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
</style>