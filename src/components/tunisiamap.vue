<template>
    <svg-map :map="world" />
</template>
 
<script>
import { SvgMap } from "vue-svg-map";
import world from "@svg-maps/world";
 
export default {
    name: "tunisamap",
    components: {
        SvgMap
    },
    data() {
        return {
            world
        };
    }
};
</script>
 
<style src="vue-svg-map/dist/index.css"></style>