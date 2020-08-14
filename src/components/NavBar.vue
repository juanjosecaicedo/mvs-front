<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="primary">
      <img src="img/logo1.png" class="w-10 mr-2" alt />
      <b-navbar-brand to="/menu">Mision Vida</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item :class="[(active('/menu'))? 'active': '']" to="/menu">inicio</b-nav-item>
          <b-nav-item :class="[(active('/personal'))? 'active': '']" to="/personal">personal</b-nav-item>
        </b-navbar-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto items-center">
          <b-nav-item v-if="!is_auth" to="/login">
            <b-button class="border" variant="primary">iniciar sesion</b-button>
          </b-nav-item>
          <b-nav-item v-else>
            <b-dropdown variant="primary" right>
              <template v-slot:button-content>
                <b-icon icon="gear-fill" aria-hidden="true"></b-icon>
                {{ nombre.toString().toLowerCase() }}
              </template>
              <b-dropdown-item-button @click="perfil()">
                <b-icon icon="person-circle"></b-icon><span class="ml-2">perfil</span>
              </b-dropdown-item-button>
              <b-dropdown-divider></b-dropdown-divider>
              <b-dropdown-item-button @click="cerrarSesion()">
                <b-icon icon="arrow-right-square-fill"></b-icon><span class="ml-2">cerrar sesion</span>
              </b-dropdown-item-button>
            </b-dropdown>
          </b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>
<script>
export default {
  name: "navBar",
  computed: {
    is_auth() {
      return this.$store.state.is_auth;
    },
    nombre() {
      return this.is_auth ? this.$store.state.usuarios.nombre : "";
    },
  },
  data() {
    return {};
  },

  methods: {
    cerrarSesion: function () {
      setTimeout(() => {
        this.$store.commit("cerrarSesion", {});
        this.$router.push("/login");
      }, 800);
    },
    perfil() {
      this.$router.push("/perfil");
    },
    active(path) {
      return this.$route.path == path;
    },
  },
};
</script>