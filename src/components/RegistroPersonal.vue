<template>
  <div class>
    <div class="mx-5">
      <div class="flex flex-wrap">
        <div class="w-full max-w-lg bg-white mx-2 my-5 shadow-md">
          <form class id="form-store" @submit.prevent="registrar($event)">
            <h5 class="text-center font-semibold mt-5 text-gray-700">REGISTRÉ UNA NUEVA PERSONA</h5>
            <hr class="mx-5" />
            <div
              class="text-center text-gray-500 font-bold italic"
            >* Todos los campos son requeridos</div>
            <div class="my-3 mx-5">
              <div
                v-if="success_store"
                class="bg-blue-100 border border-blue-400 text-blue-700 px-4 py-3 rounded relative"
              >{{ msg }}</div>
              <div
                v-else-if="success_store == false"
                class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
              >{{ msg }}</div>
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
                    autocomplete="off"
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
                <div class="flex justify-end w-full mt-4 mb-4 mr-3">
                  <button
                    class="bg-blue-500 py-1 px-2 text-white rounded hover:bg-blue-400 hover:text-gray-100"
                  >registrar</button>
                </div>
              </div>
            </div>
          </form>
        </div>
        <div v-if="recientes" class="w-full max-w-xl bg-white mx-2 my-5 shadow-md">
          <div class="mx-5 my-2">
            <h4 class="text-center text-sm text-gray-700 font-semibold">PERSONAS REGISTRADAS MAS RECIENTES</h4>
            <hr />
            <table class="mt-2 w-full">
              <thead class="bg-blue-500 text-white">
                <tr>
                  <th class="text-xs border font-sans border-gray-400 py-1 px-2">CEDULA</th>
                  <th class="text-xs border font-sans border-gray-400 py-1 px-2">NOMBRE</th>
                  <th class="text-xs border font-sans text-right border-gray-400 py-1 px-2">FECHA CREACION</th>
                </tr>
              </thead>
              <tbody>
                <tr :key="person.id" v-for="person in personasRecientes">
                  <td class="text-xs text-gray-600  border border-gray-400 py1 px-2">{{ person.cedula }}</td>
                  <td class="text-xs text-gray-600  border border-gray-400 py1 px-2">{{ person.nombre }} {{ person.apellido1 }} {{ person.apellido2 }}</td>
                  <td class="text-xs text-gray-600 text-right font-thin border border-gray-400 py1 px-2">{{ person.fecha_creacion }}</td>                  
                </tr>
              </tbody>
            </table>
            <div class="mt-1">
              <p class="text-right text-xs text-gray-400">{{ fecha.split('-').reverse().join('-') }}</p>
              <hr>
            </div>
          </div>
        </div>
      </div>
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
        ciudad: ""
      },
      success_store: null,
      msg: "",
      fecha: "",
      personasRecientes: [],
      recientes: null
    };
  },
  created() {
    // eslint-disable-next-line no-console
    this.fechaActual();
  },
  methods: {
    registrar() {
      axios
        .post(keys.baseUrl+"registar-persona", this.form)
        .then(response => {
          // eslint-disable-next-line no-console
          console.log(response);
          return response.data;
        })
        .then(datos => {
          if (!datos.error) {
            this.success_store = true;
            this.msg = datos.msg;
            document.getElementById("form-store").reset();
            this.fetchPersonas();
          } else {
            this.success_store = false;
            this.msg = datos.msg;
          }
        });
    },
    fetchPersonas() {
      axios
        .get(keys.baseUrl+`registro-personas-recientes/${this.fecha}`)
        .then(response => response.data)
        .then(resp => {
          // eslint-disable-next-line no-console
          console.log(resp);

          this.personasRecientes = resp;
          if (resp.length > 0) {
            this.recientes = true;
          }
        });
    },
    fechaActual() {
      var date = new Date().toLocaleDateString();
      var mes = date.split("/")[1];
      var dia = date.split("/")[0];
      if (parseInt(mes) <= 9) {
        mes = "0" + mes;
      }
      if (parseInt(dia) <= 9) {
        dia = "0" + dia;
      }
      this.fecha = date.split("/")[2] + "-" + mes + "-" + dia;
    }
  },
  mounted() {
    this.fetchPersonas();
  }
};
</script>