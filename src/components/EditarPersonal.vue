<template>
  <div>
    <div class="flex justify-center mt-5 mb-5">
      <form class="w-full max-w-lg shadow-md bg-white" @submit.prevent="actualizar()">
        <div class="my-3 mx-5">
          <div 
            v-if="success_up"
            class="bg-blue-100 border border-blue-400 text-blue-700 px-4 py-3 rounded relative">
            {{ msg }}
          </div>
          <div
            v-else-if="success_up == false"
            class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" >
            {{ msg }}
          </div>
          <div class="flex flex-wrap -mx-3 mb-5">
            <div class="w-full px-3">
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-password"
              >cedula</label>
              <input
                class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-password"
                type="number"
                placeholder="1113456781"
                v-model="form.cedula"
                required
              />
            </div>
          </div>
          <div class="flex flex-wrap -mx-3 mb-5">
            <div class="w-full px-3">
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-password"
              >nombre</label>
              <input
                class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-password"
                type="text"
                placeholder="jhon"
                v-model="form.nombre"
                required
              />
            </div>
          </div>
          <div class="flex flex-wrap -mx-3 mb-5">
            <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-first-name"
              >apellido-1</label>
              <input
                class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-first-name"
                type="text"
                placeholder="Jane"
                v-model="form.apellido1"
                required
              />
            </div>
            <div class="w-full md:w-1/2 px-3">
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-last-name"
              >apellido-2</label>
              <input
                class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-last-name"
                type="text"
                placeholder="Doe"
                v-model="form.apellido2"
              />
            </div>
          </div>
          <div class="flex flex-wrap -mx-3 mb-5">
            <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="nacimiento"
              >nacimiento</label>
              <input
                class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="nacimiento"
                type="date"                
                v-model="form.nacimiento"
                required
              />
            </div>            
          </div>

          <div class="flex flex-wrap -mx-3 mb-5">
            <div class="w-full px-3">
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="email"
              >correo</label>
              <input
                class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="email"
                type="email"
                placeholder="E-mail"
                v-model="form.correo"
                required
              />
            </div>
          </div>
          <div class="flex flex-wrap -mx-3 mb-2">
            <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="telefono"
              >telefono</label>
              <input
                class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="telefono"
                type="number"
                placeholder="3234122212"
                v-model="form.telefono"
                required
              />
            </div>

            <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="direccion"
              >direccion</label>
              <input
                class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="direccion"
                type="text"
                placeholder="Cl 23a # 32 - 2"
                v-model="form.direccion"
                required
              />
            </div>
            <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="ciudad"
              >ciudad</label>
              <input
                class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="ciudad"
                type="text"
                placeholder="new york"
                v-model="form.ciudad"
              />
            </div>
            <div class="flex justify-end w-full mt-5">
              <button
                class="bg-blue-500 py-1 px-2 text-white rounded hover:bg-blue-400 hover:text-gray-100"
              >actulizar</button>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import keys from "../keys";
export default {
  data() {
    return {
      form: {
        cedula: "",
        nombre: "",
        apellido1: "",
        apellido2: "",
        telefono: "",
        nacimiento: "",
        correo: "",
        direccion: "",
        ciudad: "",
        id: ""
      },
      success_up: null,
      msg: ""
    };
  },
  created() {
    this.recuperarDatos();
  },
  methods: {
    actualizar() {
      axios
        .post(keys.baseUrl+"actualizar-persona", this.form)
        .then(response => {
          // eslint-disable-next-line no-console
          console.log(response);
          return response.data;
        })
        .then(datos => {
          if (!datos.error) {
            this.success_up = true;
            this.msg = datos.msg;
            this.recuperarDatos();
          } else {
            this.success_up = false;
            this.msg = datos;
          }          
          setTimeout(() => {
            this.$router.push({
              name: 'personal'
            });
          }, 2000)
        });
    },
    recuperarDatos() {
      this.form.id = this.$route.params.id;
      axios.get(keys.baseUrl+`editar-persona/${this.form.id}`).then(response => {
        const resp = response.data;
        this.form.cedula = resp.cedula;
        this.form.nombre = resp.nombre;
        this.form.apellido1 = resp.apellido1;
        this.form.apellido2 = resp.apellido2;
        this.form.nacimiento = resp.fecha_nacimiento;
        this.form.correo = resp.correo;
        this.form.telefono = resp.telefono;
        this.form.direccion = resp.direccion;
        this.form.ciudad = resp.ciudad;
      });
    }
  },
  mounted() {}
};
</script>