<template>
<div>
    <div class="card card-chart" >
            <div class="row">
                <div class="col-sm-6 text-left">
                    <p>CORONA WORLD </p>
                </div>
            </div>
        </div>
        <div class="card-body">
            <div class="chart-area">
                <div class="chart-container" style="position: relative; height:100%; width:100%">
                    <canvas id="my-chart" > </canvas>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
import Chart from 'chart.js';
import axios from 'axios'

export default {
    name : 'LandingChat',
    data () {
        return {

            error : '',
            Stats : [],
            length : 0,
            active : '',
            cases:'',

            deaths:'',
            recovered: ''
        }
    },

    async mounted () {

        this.Loading = true,
        
        await axios.get('https://corona.lmao.ninja/all')
        .then((res)=>{
            this.active = res.data.active
            this.cases = res.data.cases
            this.recovered = res.data.recovered
            this.deaths = res.data.deaths
        })
        .catch((err) =>{
            this.error = err
        })
    
    
    
    let labels = []
    let data = []    

    
    labels.push("active")
    data.push(this.active)
    
    labels.push("cases")
    data.push(this.cases)
    
    labels.push("recovered")
    data.push(this.recovered)

    labels.push("deaths")
    data.push(this.deaths)

        
    new Chart(document.getElementById('my-chart'), {
    type: 'bar',
    data: {
        labels: labels,
        datasets: [{
            label: 'CORONA',
            data: data,
            backgroundColor : "rgb(253,93,147,0.5)",
            borderColor : "#fd5d93",
            borderWidth : 1
        }]
    },options : { maintainAspectRatio : false}
    });
    


    }
    //     let color = []
    //     let border = []
    //     for (let i = 0; i < this.Stats.length; i++) {
    //         labels.push(this.Stats[i].nom)
    //         data.push(this.Stats[i].nbr)

    //         border.push("#4040a1")
    //         this.length = parseInt(this.length) + parseInt(this.Stats[i].nbr)

    //     }
    //     data.push(0)
        


    // }

}

</script>

<style>

</style>

