<template>
  <div class="w-full pr-64 pl-64 mr-auto ml-auto mt-2">
    <div class="bg-white border-gray-600">
      <div class="mx-5 my-5">
        <div class="pr-20 pl-20 mr-auto ml-auto">
          <div class="flex justify-end">
            <button
              @click="showFormEvent()"
              v-if="!show"
              class="mt-3 rounded-md px-3 py-1 outline-none text-blue-500 font-semibold border border-blue-500 hover:text-blue-600 hover:border-blue-600 focus:outline-none"
            >publicar evento</button>
            <button
              @click="abort()"
              v-else
              class="mt-3 rounded-md px-3 py-1 outline-none text-blue-500 font-semibold border border-blue-500 hover:text-blue-600 hover:border-blue-600 focus:outline-none"
            >cancelar</button>
          </div>
          <transition name="slide-fade" mode="out-in">
            <div v-show="show" class="rubberBand">
              <div class="mt-2 border">
                <form @submit.prevent="sendEvent()" enctype="multipart/form-data" class>
                  <div class="mx-4 my-2">
                    <div class="flex flex-wrap">
                      <div class="w-full md:w-1/2 pr-3 mb-6 md:mb-0">
                        <input
                          type="text"
                          class="block w-full bg-gray-200 text-gray-700 border border-gray-400 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
                          placeholder="Nombre del eventos"
                          required
                        />
                      </div>
                      <div class="w-full md:w-1/2 mb-6 md:mb-0">
                        <input
                          type="file"
                          class="block w-full bg-gray-200 text-gray-700 border border-gray-400 rounded py-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
                          accept="image/*"
                        />
                      </div>
                    </div>
                    <div>
                      <textarea
                        name
                        id
                        class="block w-full bg-gray-200 text-gray-700 border border-gray-400 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
                        placeholder="Descripccion..."
                        required
                      ></textarea>
                    </div>
                    <div class="flex justify-end">
                      <button
                        class="rounded-md px-3 py-1 font-semibold outline-none bg-blue-500 text-white border hover:border-blue-400 hover:bg-blue-400"
                        type="submit"
                      >publicar</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </transition>
          <h1 class="text-center font-semibold">Eventos</h1>
          <div class="border rounded-md mb-4" :key="evento.id" v-for="evento in eventos">
            <div class="mx-4 mb-1">
              <div class="flex justify-between py-2">
                <div class="font-semibold font-sans text-sm uppercase">{{evento.nombre}}</div>
                <div>
                  <span class="text-gray-600 font-mono">12/08/2020</span>
                </div>
              </div>
              <p
                class="text-gray-900 text-justify text-base"
              >Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam perspiciatis qui ea aliquid dolores nesciunt minus repellendus quidem! Aperiam quos itaque cupiditate! Quas facere eos atque magnam id iusto dignissimos.</p>
              <div class="mt-2">
                <img src="../assets/operaciones.png" alt />
              </div>
              <div class>
                <h1 class="text-right text-gray-600 text-sm font-sans">Hace 30 segundos</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s;
}
.v-enter,
.v-leave-to {
  opacity: 0;
}
.slide-fade-enter-active{
  transition: all .3s ease;
}
.slide-fade-leave-active{
 transition: all .3s cubic-bezier(.17,.67,.83,.67);
}
.slide-fade-enter, .slide-fade-leave-to {
  transform: translateY(800px);
  opacity: 0;
}
</style>
<script>
import axios from "axios";
import keys from "../keys";
export default {
  data() {
    return {
      show: false,      
      eventos: [
        {
          id: 1,
          nombre: 'Evento 1',
          fecha: '12/08/2020',
          descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam perspiciatis qui ea aliquid dolores nesciunt minus repellendus quidem! Aperiam quos itaque cupiditate! Quas facere eos atque magnam id iusto dignissimos.',
          img: 'img/operaciones.3f507707.png',
          tiempo: 'Hace 30 segundos'
        },
        {
          id: 2,
          nombre: 'Evento 2',
          fecha: '12/08/2020',
          descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam perspiciatis qui ea aliquid dolores nesciunt minus repellendus quidem! Aperiam quos itaque cupiditate! Quas facere eos atque magnam id iusto dignissimos.',
          img: 'img/operaciones.3f507707.png',
          tiempo: 'Hace 30 segundos'
        }
      ]
    };
  },
  mounted(){
    
  },
  methods: {
    showFormEvent() {
      this.show = true;
    },
    abort() {
      this.show = false;
    },
    sendEvent() {
      axios
        .post(keys.baseUrl+"eventos", this.evento)
        .then(response => response.data)
        .then(resp => {
          // eslint-disable-next-line no-console
          console.log(resp);
        });
    }
  }
};
</script>