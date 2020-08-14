<template>
  <div>
    <NavBar />
    <div class="container">
      <NavCharts />
      <div class="mb-3 w-64">
        <b-select @change="getData($event)">
          <option value="" selected>seleccione el año</option>
          <option v-for="(item, index) in years" :value="item" :key="index">{{item}}</option>
        </b-select>
      </div>
      <div class="row">
        <div class="col-md-6 mb-3">
          <AreaChart v-if="!load" :chartsLabels="chartsLabels" :chartsLabel="chartsLabel" :chartsData="chartsData"></AreaChart>
        </div>
        <div class="col-md-6 mb-3">
          <BarChart v-if="!load" :chartsLabels="chartsLabels" :chartsLabel="chartsLabel" :chartsData="chartsData"></BarChart>
        </div>
        <div class="col-md-6">
          <LineChart v-if="!load" :chartsLabels="chartsLabels" :chartsLabel="chartsLabel" :chartsData="chartsData"></LineChart>
        </div>
        <div class="col-md-6">
          <PieChart v-if="!load" :chartsLabels="chartsLabels" :chartsLabel="chartsLabel" :chartsData="chartsData"></PieChart>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AreaChart from "../components/charts/AreaChart";
import LineChart from "../components/charts/LineChart";
import BarChart from "../components/charts/BarChart";
import PieChart from "../components/charts/PieChart";

import axios from "axios"
import key from "../keys"

export default {
  name: 'OfrendasCharts',
  components: {
    AreaChart,
    LineChart,
    BarChart,
    PieChart,
    
  },
  data() {
    return {
      items: [],
      years: [],      
      chartsLabels: [],
      chartsLabel: '',
      chartsData: [],
      load: false
    };
  },
  async mounted(){
    await this.getItems();
  },
  methods: {
    getItems: async function(){
      try {
        this.load = true;        
        const datos = await axios.get(key.baseUrl+'protemplo').then(response => response.data);        
        datos.forEach(item => {        
          if(!this.years.includes(item.fecha.split(' ')[5])){
            this.years.push(item.fecha.split(' ')[5]);
          }
        });
        if(this.years.length>0){          
          this.getData(this.years[this.years.length -1]);
        }             
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error(error)
      }
    },
    getData: async function(value){
      if(value !== ""){  
        this.load = true;    
        await axios.get(key.baseUrl+"charts/"+value+"/ofrendas").then(response => {                    
          this.chartsLabels = response.data.label;
          this.chartsLabel = value;
          response.data.months.forEach(item => {
            axios.get(key.baseUrl+'charts-total/'+value+"/ofrendas/"+item).then(response =>{                            
              this.chartsData.push(response.data)
              this.load = false;
            })
          })
        })  
      }
    }   
  }
};
</script>
