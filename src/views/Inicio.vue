<template>
  <div>    
    <h1>pagina de inicio</h1>
    
  </div>
</template>

<script>


 export default  {
   data(){
     return {
       usueario: [],
     }
   },
    async mounted(){
     await this.$store.dispatch('usuarios');
     // eslint-disable-next-line no-console
     await console.log(this.$store.state.usuarios);
     
   }
 }
</script>