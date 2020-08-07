<template>
  <div id="app" class="antialiased text-gray-900">
    <div class="bg-gray-200 min-h-screen">           
      <router-view />      
    </div>    
  </div>
</template>

<script>
export default {
  name: "App",  
  mounted() {
    
  },
  created(){
    this.checkAuth();
  },

  methods: {
    checkAuth(){
      const session = localStorage.getItem('session');            
      if(session !== null){
        this.$store.commit('checkAuth', JSON.parse(session));
      }
    }
  }
};
</script>
<style src="./assets/tailwind.css"></style>
<style src="./assets/icomoon/style.css"></style>
<style>
  @import url("https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;500;600&display=swap");
  @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap");
  #app {
    font-family: 'Poppins', sans-serif;
  }
</style>




