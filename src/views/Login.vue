<template>
  <div id="login">
    <div class="content-login">
      <section class="mb-2">
        <div
          v-if="is_auth == false"
          class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative shadow-lg"
        >
          <strong class="block font-bold">Ocurrió un error!</strong>
          <span class="block sm:inline">por favor verfique sus datos.</span>
        </div>
        <div>{{ (is_auth) ? redirec() : '' }}</div>
        <div
          v-if="is_auth"
          class="bg-blue-100 border border-blue-400 text-blue-700 px-4 py-3 rounded relative shadow-md"
        >
          <strong class="block font-bold">Datos correctos!</strong>
          <span class="block sm:inline">en un momento será redireccíonado.</span>
        </div>
      </section>
      <div class="border-teal bg-white p-8 border-t-12 mb-6 rounded-lg shadow-lg">
        <div class="coc">
        </div>
        <form v-on:submit.prevent="enviar($event)">
          <b-form-group>
            <label for="usuario">Usuario</label>
            <b-input
              type="text"
              id="usuario"
              placeholder="Ingresa tu nombre de usuario"
              v-model="datos.usuario"
              required
            />
          </b-form-group>
          <b-form-group>
            <label for="password">Contraseña</label>
            <b-input
              type="password"
              id="password"
              placeholder="Ingresa tu contraseña"
              v-model="datos.password"
              required
            />
          </b-form-group>
          <b-button variant="primary" class="btn-block" type="submit">Ingresar</b-button>
          <div class="mt-2">
            <a
              class="no-underline inline-block align-baseline font-bold text-sm text-blue hover:text-blue-dark"
              href="#"
            >¿Olvidaste tu contraseña?</a>
          </div>
        </form>
      </div>
      <div class="text-center">
        <p class="text-grey-dark text-sm">
          Aun no tines una cuenta?
          <a
            href="#"
            class="no-underline text-blue font-bold"
          >Create an Account</a>.
        </p>
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
  },

  data() {
    return {
      datos: {
        usuario: "",
        password: "",
      },
      respues: {},
      year: new Date().getFullYear(),
    };
  },

  methods: {
    enviar: async function () {
      await this.$store.commit("login", this.datos);
      // eslint-disable-next-line no-console
      // this.is_auth = await this.$store.state.is_auth;
      // this.$router.push("/menu");
    },
    redirec(){
      setTimeout(() => {
        this.$router.push("/menu");
      }, 3000);
    }
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
  -webkit-transform: translate(-60%, -60%);
}
.coc {
  min-width: 19rem;
}
section {
  min-height: 5rem;  
}
</style>