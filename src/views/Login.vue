<template>
  <div id="login">
    <div class="content-login">      
      <div class="text-center mb-2">
        <b-avatar size="72px">
          <img src="img/logo1.png" alt />
        </b-avatar>
      </div>
      <div class="border-teal bg-white p-3 border-t-12 mb-6 rounded-lg shadow-md" id="login-content">
        <div>{{ (is_auth) ? redireccionar() : '' }}</div>
        <section class="mb-2">
        <div
          v-if="is_auth == false"
          class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative shadow-md"
        >
          <strong class="block font-bold">Ocurrió un error!</strong>
          <span class="block sm:inline">por favor verfique sus datos.</span>
        </div>
        
        <div
          v-if="is_auth"
          class="bg-blue-100 border border-blue-400 text-blue-700 px-4 py-3 rounded relative shadow-md"
        >
          <strong class="block font-bold">Datos correctos!</strong>
          <span class="block sm:inline">en un momento será redireccíonado.</span>
        </div>        
      </section>
        <form v-on:submit.prevent="enviar($event)">
          <b-form-group>
            <label for="usuario">Usuario:</label>
            <b-input
              type="text"
              id="usuario"
              placeholder="Ingresa tu nombre de usuario"
              v-model="datos.usuario"
              required
            />
          </b-form-group>
          <b-form-group>
            <label for="password">Contraseña:</label>
            <b-input
              type="password"
              id="password"
              placeholder="Ingresa tu contraseña"
              v-model="datos.password"
              required
            />
          </b-form-group>
          <div class="d-flex">
          <b-button variant="primary" class="btn-block" :disabled="loading || redirecting" type="submit">
            <span v-if="!redirecting">Ingresar</span>
            <b-spinner v-if="loading || redirecting" small>
              <strong>Cargando...</strong>
            </b-spinner>
          </b-button>
          <!-- <b-spinner  v-if="loading" variant="primary"></b-spinner> -->
        </div>
          <div class="mt-2">
            <a
              class="no-underline inline-block align-baseline font-bold text-sm text-blue hover:text-blue-dark"
              href="#"
            >¿Olvidaste tu contraseña?</a>
          </div>
        </form>
      </div>      
    </div>
  </div>
</template>
<script>
export default {
  name: "Login",
  computed: {
    is_auth() {
      return this.$store.state.is_auth;
    },
    loading(){
      return this.$store.state.loading;
    }    
  },

  data() {
    return {
      datos: {
        usuario: "",
        password: "",
      },
      respues: {},
      year: new Date().getFullYear(),
      redirecting: false
    };
  },

  methods: {
    enviar: async function () {
      await this.$store.commit("login", this.datos);
    },
    redireccionar() {
      this.redirecting = true;
      setTimeout(() => {
        this.$router.push("/menu");
        this.redirecting = false;
      }, 3000);
    },
  },
};
</script>
<style scoped>
#login {
  min-height: 100vh;
}
.content-login {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  -webkit-transform: translate(-50%, -50%);  
}
#login-content {
  min-width: 22rem;
}
</style>