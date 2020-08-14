<template>
  <div class="my-3">
    <b-button @click="redirect('/diezmos-charts')" :variant="active('/diezmos-charts')? 'primary':'outline-primary'"><b-icon icon="bar-chart-line"></b-icon> diezmos</b-button>
    <b-button @click="redirect('/ofrendas-charts')" :variant="active('/ofrendas-charts')? 'primary':'outline-primary'"><b-icon icon="bar-chart-line"></b-icon> ofrendas</b-button>
    <b-button @click="redirect('/protemplo-charts')" :variant="active('/protemplo-charts')? 'primary':'outline-primary'"><b-icon icon="bar-chart-line"></b-icon> protemplo</b-button>
  </div>
</template>

<script>
export default {
  
  methods: {
    active(path){       
      return this.$route.path == path;
    },
    redirect(path){
      this.$router.push(path)
    }

  }
};
</script>

<style>
</style>