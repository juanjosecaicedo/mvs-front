<template>
  <div>
    <NavBar />
    <div class="container mx-auto mt-5">
      <div class="grid grid-rows-3 grid-flow-col gap-4">
        <div class="row-span-2 bg-white">
          <form action class="m-5" @submit.prevent="enviarDiezmo()">
            <div class="mb-5">
              <div class="flex justify-center">
                <img class="text-center" src="img/money.png" alt="Sunset in the mountains" />
              </div>
              <h5 class="text-center text-gray-600">REGISTRAR DIEZMOS</h5>
              <hr />
            </div>
            <div class="flex flex-wrap -mx-3 mb-5">
              <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="fecha"
                >fecha</label>
                <input
                  type="date"
                  name="fecha"
                  id="fecha"
                  class="block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  v-model="form.fecha"
                  required
                />
              </div>
              <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="persona"
                >persona</label>
                <select
                  name="persona"
                  id="persona"
                  class="block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  v-model="form.id_persona"
                  required
                >
                  <option value>seleccióne la persona</option>
                  <option
                    :key="select.id"
                    v-for="select in selectPersonas"
                    :value="select.id"
                  >{{ select.nombre }} {{ select.apellido1 }} {{ select.apellido2 }}</option>
                </select>
              </div>
            </div>
            <div class="w-full px-3">
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-password"
              >valor diezmo</label>
              <input
                class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-password"
                type="number"
                placeholder="$ 273.200"
                v-model="form.cantidad_diezmo"
                required
              />
            </div>
            <div class="flex justify-end">
              <button
                class="py-1 px-2 bg-blue-500 rounded text-white font-semibold hover:bg-blue-400"
              >{{caso}}</button>
            </div>
          </form>
        </div>
        <div class="row-span-2 col-span-2 bg-white">
          <div class="flex flex-col">
            <div class="-my-2 py-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
              <div
                class="align-middle inline-block min-w-full shadow overflow-hidden sm:rounded-lg border-b border-gray-200"
              >
                <p class="text-center font-semibold text-gray-500 mt-4">REGISTRO DE DIEZMOS</p>
                <table class="min-w-full">
                  <thead>
                    <tr>
                      <th
                        class="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider"
                      >SEMANA</th>
                      <th
                        class="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider"
                      >fecha</th>
                      <th
                        class="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider"
                      >persona</th>
                      <th
                        class="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider"
                      >valor diezmo</th>
                      <th class="px-6 py-3 border-b border-gray-200 bg-gray-50"></th>
                    </tr>
                  </thead>
                  <tbody class="bg-white">
                    <tr
                      :key="diezmo.id_diezmo"
                      v-for="diezmo in diezmos"
                      class="px-6 py-4 whitespace-no-wrap border-b border-gray-200"
                    >
                      <td
                        class="text-center text-sm leading-5 text-gray-900 align-middle"
                      >{{ diezmo.semana }}</td>
                      <td
                        class="text-center text-sm leading-5 text-gray-600 align-middle"
                      >{{ diezmo.fecha }}</td>
                      <td
                        class="text-sm leading-5 text-gray-900 align-middle"
                      >{{ diezmo.nombre }} {{ diezmo.apellido1 }} {{ diezmo.apellido2 }}</td>
                      <td class="text-center text-sm leading-5 text-gray-900 align-middle">
                        <span
                          class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800"
                        >$ {{ format(diezmo.cantidad_diezmo) }}</span>
                      </td>
                      <td class="flex text-center">
                        <button
                          @click="eliminar(diezmo.id_diezmo)"
                          class="icon-bin py-2 px-2 m-1 text-red-600 border border-red-600 rounded focus:outline-none hover:bg-red-500 hover:text-white focus:bg-red-500 focus:text-white"
                        ></button>
                        <button
                          @click="editar(diezmo)"
                          class="icon-pencil py-2 px-3 m-1 text-yellow-500 border border-yellow-500 rounded focus:outline-none hover:bg-yellow-500 hover:text-white focus:bg-yellow-500 focus:text-white"
                        ></button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
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
      diezmos: [],
      selectPersonas: [],
      form: {
        id: "",
        fecha: "",
        id_persona: "",
        cantidad_diezmo: "",
      },
      caso: "registrar",
    };
  },
  mounted() {
    this.fechaActual();
    this.llenarSelectorPersonas();
    this.fetchDiezmos();
  },
  methods: {
    llenarSelectorPersonas() {
      axios
        .get(keys.baseUrl + `personas-select-diezmos/${this.form.fecha}`)
        .then((response) => response.data)
        .then((resp) => {
          this.selectPersonas = resp;
        });
    },
    enviarDiezmo() {
      if (this.caso == "registrar") {
        this.registrarDiezmo();
      } else if (this.caso == "actualizar") {
        this.actualizar();
      }
    },
    registrarDiezmo() {
      axios
        .post(keys.baseUrl + "registrar-diezmos", this.form)
        .then((response) => response.data)
        .then((resp) => {
          // eslint-disable-next-line no-console
          console.log(resp);
          if (!resp.error) {
            this.fetchDiezmos();
            this.llenarSelectorPersonas();
            this.form.cantidad_diezmo = "";
            this.caso = "registrar";
          }
        });
    },
    fetchDiezmos() {
      axios
        .get(keys.baseUrl + "diezmos")
        .then((response) => response.data)
        .then((resp) => {
          this.diezmos = resp;
        });
    },

    editar(diezmo) {
      var exist = this.selectPersonas.find((item) => {
        return item.id == diezmo.id_persona;
      });
      if (exist == undefined) {
        this.selectPersonas.push({
          id: diezmo.id_persona,
          nombre: diezmo.nombre,
          apellido1: diezmo.apellido1,
          apellido2: diezmo.apellido2,
        });
      }
      setTimeout(() => {
        var option = document.getElementById("persona").children;
        for (var i = 0; i < option.length; i++) {
          if (option[i].value == diezmo.id_persona) {
            option[i].selected = true;
          }
        }
      }, 500);

      axios
        .get(keys.baseUrl + `editar-diezmo/${diezmo.id_diezmo}`)
        .then((response) => response.data)
        .then((resp) => {
          this.form.id = diezmo.id_diezmo;
          this.form.fecha = resp[0].fecha;
          this.form.cantidad_diezmo = resp[0].cantidad_diezmo;
        });
      this.caso = "actualizar";
      // eslint-disable-next-line no-console
      console.log(document.querySelector("form").reset());
    },
    actualizar() {
      axios
        .post(keys.baseUrl + "actualizar-diezmo", this.form)
        .then((response) => response.data)
        .then((resp) => {
          // eslint-disable-next-line no-console
          console.log(resp);
          if (!resp.error) {
            this.fetchDiezmos();
            this.llenarSelectorPersonas();
            this.caso = "registrar";
          }
        });
    },
    eliminar(id) {
      var confirmar = confirm("¿Esta seguro de realizar esta acción?");
      if (confirmar) {
        axios
          .delete(keys.baseUrl + `eliminar-diezmo/${id}`)
          .then((response) => {
            // eslint-disable-next-line no-console
            console.log(response);
            return response.data;
          })
          .then((resp) => {
            if (!resp.error) {
              this.fetchDiezmos();
            }
          });
      }
    },

    format(int) {
      return new Intl.NumberFormat("de-DE").format(int);
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
      this.form.fecha = date.split("/")[2] + "-" + mes + "-" + dia;
    },
  },
};
</script>