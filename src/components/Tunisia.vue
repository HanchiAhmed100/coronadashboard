<template>
<div>
    <div class="card card-chart" >
            <div class="row">
                <div class="col-sm-6 text-left">
                    <p>Tunisia </p>
                    
                </div>
            </div>
        </div>
        <div class="card-body">
            <div class="chart-area">
                <div class="chart-container" style="position: relative; height:100%; width:100%">
                    <canvas id="my-charts"> </canvas>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
import Chart from 'chart.js';
import axios from 'axios'

export default {
    name : 'Tunisia',
    data () {
        return {

            error : '',
            Stats : [],
            length : 0,
            flag : '',
            country:'',
            cases:'',
            deaths:'',
            todayCases: '',
            recovered : '', 
            active : '' 
        }
    },

    async mounted () {

        
        await axios.get('https://corona.lmao.ninja/countries/tunisia')
        .then((res)=>{
            this.flag = res.data.countryInfo.flag
            this.country = res.data.countryInfo.country
            this.cases = res.data.cases
            this.todayCases = res.data.todayCases
            this.recovered = res.data.recovered
            this.active =  res.data.active
            this.deaths =  res.data.deaths

        })
        .catch((err) =>{
            this.error = err
        })

    
    let labels = []
    let data = []    


    labels.push("cases")
    data.push(this.cases)
    
    labels.push("recovered")
    data.push(this.recovered)

    labels.push("deaths")
    data.push(this.deaths)

    labels.push("todayCases")
    data.push(this.todayCases)
       
    labels.push("active")
    data.push(this.label)
    
    labels.push("")
    data.push(0)

        
    new Chart(document.getElementById('my-charts'), {
    type: "pie",
    data: {
        labels: labels,
        datasets: [{
            label: "Tunisie",
            data: data,
            backgroundColor : ['rgb(53,93,147,0.5)','rgb(123,193,17,0.5)','rgb(255,153,51,0.5)','rgb(254,55,3,0.5)','rgb(90,155,100,0.5)'],
            borderColor : ['rgb(53,93,147)','rgb(123,193,17,0.5)','rgb(255,153,51)','rgb(254,55,3)','rgb(90,155,100,0.5)'],
            borderWidth : 1
        }]
    },options : { maintainAspectRatio : true}
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

