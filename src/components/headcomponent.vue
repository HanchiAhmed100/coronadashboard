<template>
    <div class="mybackground uk-margin uk-padding uk-text-center">
        <div class="container  text-light">

            <div class="row">
                <h2 class="text-light"><span class="uk-text-center"> Maladie à coronavirus ( COVID-19 )</span> </h2>
                <p> La maladie à coronavirus 2019 (COVID-19) est une maladie infectieuse provoquée par un nouveau virus qui n'avait encore jamais été identifié chez l'être humain.
                    Ce virus provoque une maladie respiratoire (analogue à la grippe) avec des symptômes comme la toux, la fièvre et, dans les cas les plus sévères, une pneumonie. On peut s'en protéger en se lavant fréquemment les mains, et en évitant de se toucher le visage. </p>
                <div class="col-md ">
                    <div class="uk-card  uk-margin uk-card-default uk-card-body uk-width-1-1@m">
                        <h3 class="uk-card-title">Cas</h3>
                        
                        <Progress :radius="50" :strokeWidth="10"  strokeColor="#FF00AA" :value="100">
                            <div class="content">{{allstats.cases}}</div>
                            <template v-slot:footer>
                                <b>Personne</b>
                            </template>
                        </Progress>

                    </div>  
                </div>
                <div class="col-md">
                    <div class="uk-card  uk-margin uk-card-default uk-card-body uk-width-1-1@m">
                        <h3 class="uk-card-title">Cas Active</h3>
                        <Progress :radius="50" :strokeWidth="10"  strokeColor="#FF00AA" :value="p_active">
                            <div class="content">{{allstats.active}}</div>
                            <template v-slot:footer>
                                <b>Personne</b>
                            </template>
                        </Progress>
                    </div>  
                </div>
                <div class="col-md ">
                    <div class="uk-card uk-margin uk-card-default uk-card-body uk-width-1-1@m">
                        <h3 class="uk-card-title">Morts</h3>
                        <Progress :radius="50" :strokeWidth="10"  strokeColor="#FF00AA" :value="p_morts">
                            <div class="content">{{allstats.deaths}}</div>
                            <template v-slot:footer>
                                <b>Personne</b>
                            </template>
                        </Progress>
                    </div>  
                </div>
                <div class="col-md ">
                    <div class="uk-card uk-card-default uk-card-body uk-width-1-1@m">
                        <h3 class="uk-card-title">Retablie</h3>
                        <Progress :radius="50" :strokeWidth="10"  strokeColor="#FF00AA" :value="p_retablie">
                            <div class="content">{{allstats.recovered}}</div>
                            <template v-slot:footer>
                                <b>Personne</b>
                            </template>
                        </Progress>
                    </div>  
                </div>
            </div>
        </div>      
    </div>    
</template>

<script>
import Progress from "easy-circular-progress";

import { mapGetters , mapActions } from 'vuex'

export default {
    name : 'headcomponent',    
    components : {
        Progress
    },
    
    data () {
        return {    
            mystats : []
        }
    },
    computed : {
        ...mapGetters(['allstats','p_active','p_morts','p_retablie']),   
    },
    methods : {
        ...mapActions(['fetchworldstats','set_p_active','set_p_morts','set_p_retablie'])
    },
    
    created(){
        this.fetchworldstats()
    }

}
</script>

<style>

</style>
