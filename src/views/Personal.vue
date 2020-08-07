<template>
  <div>
    <NavBar />
    <div class="container mt-4">
      <b-card header-tag="header" footer-tag="footer">
        <div slot="header">
          <i class="icon-users"></i>
          <b>Registro de personal</b>
          <div class="card-header-actions">
            <b-input-group size="sm">
              <b-input-group-append>
                <b-form-input v-model="filter" type="search" placeholder="Buscar"></b-form-input>
                <b-button
                  v-b-tooltip.hover
                  title="Limpiar"
                  :disabled="!filter"
                  @click="filter = ''"
                >
                  <i class="icon-times"></i>
                </b-button>
                <b-button
                  v-b-tooltip.hover
                  title="Registrar una nueva persona"
                  variant="primary"
                  size="sm"
                  v-b-modal.modal-personal
                >
                  <i class="icon-plus" />
                </b-button>
              </b-input-group-append>
            </b-input-group>
          </div>
        </div>
        <b-card-body>
          <b-table :fields="fields" :filter="filter" :hover="true" :striped="true" :bordered="true" :small="true" :items="personas" responsive="sm" :busy="loading">
            <template v-slot:table-busy>
              <div class="text-center text-primary my-2">
                <b-spinner class="align-middle"></b-spinner>
                <strong>Loading...</strong>
              </div>
            </template>
            <template slot="identificacion" slot-scope="data">
              {{data.item.cedula}}
            </template>
            <template slot="identificacion" slot-scope="data">{{data.item.cedula}}</template>
          </b-table>
        </b-card-body>
      </b-card>
    </div>

    <b-modal id="modal-personal" title="REGISTRÉ UNA NUEVA PERSONA" hide-footer>
      <form class id="form-store" @submit.prevent="registrar($event)">                        
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
              <b-button variant="primary">
                registrar
              </b-button>
            </div>
          </div>
        </div>
      </form>
    </b-modal>

    <div class="flex justify-center mt-10"> 
      <div class="shadow-md bg-white">
        <div class="flex justify-around mt-4 mx-3">
          <div>
            <!-- <router-link to="registro-personal" class="bg-blue-500 py-1 px-2 text-white rounded">
              <span class="icon-add-user"></span>
              nueva persona
            </router-link>-->
          </div>
          <div>
            <h5 class="text-center uppercase font-bold text-lg">registro de personal</h5>
          </div>
        </div>
        <table class="table-auto m-3">
          <thead class="bg-blue-500 text-white">
            <tr>
              <th
                class="px-4 py-1 border border-gray-300 uppercase text-xs align-middle"
              >identificación</th>
              <th class="px-4 py-1 border border-gray-300 uppercase text-xs align-middle">nombre</th>
              <th class="px-4 py-1 border border-gray-300 uppercase text-xs align-middle">nacimiento</th>
              <th class="px-4 py-1 border border-gray-300 uppercase text-xs align-middle">telefono</th>
              <th class="px-4 py-1 border border-gray-300 uppercase text-xs align-middle">dirección</th>
              <th class="px-4 py-1 border border-gray-300 uppercase text-xs align-middle">ciudad</th>
              <th class="px-4 py-1 border border-gray-300 uppercase text-xs align-middle">correo</th>
              <th class="px-4 py-1 border border-gray-300 uppercase text-xs align-middle">acciones</th>
            </tr>
          </thead>
          <tbody>
            <tr
              :key="persona.id"
              class="even:bg-gray-400 hover:bg-gray-100"
              v-for="persona in personas"
            >
              <td class="border px-2 py-1 text-xs text-gray-600">{{ persona.cedula }}</td>
              <td
                class="border px-2 py-1 text-xs text-gray-600"
              >{{ persona.nombre }} {{ persona.apellido1 }} {{ persona.apellido2 }}</td>
              <td class="border px-2 py-1 text-xs text-gray-600">{{ persona.fecha_nacimiento }}</td>
              <td class="border px-2 py-1 text-xs text-gray-600">{{ persona.telefono }}</td>
              <td class="border px-2 py-1 text-xs text-gray-600">{{ persona.direccion }}</td>
              <td class="border px-2 py-1 text-xs text-gray-600">{{ persona.ciudad }}</td>
              <td class="border px-2 py-1 text-xs text-gray-600">{{ persona.correo }}</td>
              <td class="border text-center">
                <button
                  class="py-1 px-3 rounded text-center bg-red-600 text-white font-semibold rounded-sm hover:bg-red-500 hover:text-red-100 border focus:outline-none focus:border-red-400"
                  @click="eliminar(persona.id)"
                >
                  <span class="icon-trash-o"></span>
                </button>
                <button
                  class="py-1 px-3 rounded text-center bg-yellow-500 text-white font-semibold rounded-sm hover:bg-yellow-400 hover:text-yellow-100 ml-1 border focus:outline-none focus:border-yellow-400"
                  @click="editar(persona.id)"
                >
                  <span class="icon-pencil"></span>
                </button>
              </td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <th>
                <span class="text-xs text-gray-500 italic font-semibold mx-2">Total:</span>
                <span class="italic text-lg">{{ personas.length }}</span>
              </th>
            </tr>
          </tfoot>
        </table>
        <div class="flex justify-center">
          <img v-show="loading" src="img/rolling.gif" class="w-20" alt />
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
      personas: [],
      loading: true,
      filter: "",
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
      recientes: null,
      fields: [
        {key: 'identificacion', sortable: true, label: 'IDENTIFICACIÓN'},
        {key: 'nombre', sortable: true, label: 'NOMBRE'},
        {key: 'nacimiento', sortable: true, label: 'NACIMIENTO'},
        {key: 'telefono', sortable: true, label: 'TELEFONO'},
        {key: 'direccion', sortable: true, label: 'DIRECCIÓN'},
        {key: 'ciudad', sortable: true, label: 'CIUDAD'},
        {key: 'correo', sortable: true, label: 'CORREO'},
        {key: 'acciones', sortable: false, label: 'ACCIONES'},
      ]
    };
  },
  mounted() {
    this.mostrarPersonas();
  },
  methods: {
    mostrarPersonas: function () {
      this.loading = true;
      axios.get(keys.baseUrl + "fecth-personal").then((response) => {
        this.personas = response.data;
        this.loading = false;
      });
    },
    eliminar: function (id) {
      var confirmar = confirm("¿Está seguro de realizar esta acción?");
      if (confirmar)
        axios
          .delete(keys.baseUrl + `eliminar-persona/${id}`)
          .then((response) => response.data)
          .then((resp) => {
            // eslint-disable-next-line no-console
            console.log(resp);
            if (!resp.error) {
              this.mostrarPersonas();
            }
          });
    },
    editar: function (id) {
      this.$router.push({
        name: "editar-personal",
        params: {
          id: id,
        },
      });
    },
  },
};
</script>