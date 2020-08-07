<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="primary" class="">
        <img src="img/logo1.png" class="w-10 mr-2" alt />
      <b-navbar-brand to="/menu">
        Mision Vida
      </b-navbar-brand>     

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item to="/menu">inicio</b-nav-item>
          <b-nav-item to="/personal">personal</b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto items-center">   
            <b-nav-item v-if="!is_auth" to="/login">
              <b-button class="border" variant="primary">iniciar sesion</b-button>
            </b-nav-item>
            <b-nav-item v-else to="/perfil">{{ usuario }}</b-nav-item>
            <b-nav-item v-if="is_auth">
              <b-button @click="cerrarSesion()">cerrar sesion</b-button>
            </b-nav-item>                        
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>
<script>

export default {  
  name: 'navBar',  
  computed: {
    is_auth() {
      return this.$store.state.is_auth;
      
    },
    usuario(){
      return (this.is_auth) ? this.$store.state.usuarios.usuario : '';
    },
  },

  methods: {    
    cerrarSesion: function() {        
      setTimeout(() => {
        this.$store.commit('cerrarSesion', {});
        this.$router.push("/login");
      }, 800);
    },    
  }
};
</script>