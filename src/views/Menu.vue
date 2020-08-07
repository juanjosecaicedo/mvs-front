<template>
  <div>
    <NavBar />
    <div class="flex justify-around mt-10">
      <div class="bg-gray-100 w-64 rounded overflow-hidden shadow-lg hover:shadow-md">
        <div class="flex justify-center">
          <div class="mt-10">
            <img class="text-center" src="img/money.png" alt="Sunset in the mountains" />
          </div>
        </div>
        <div class="px-6 py-4">
          <div class="font-bold text-center text-xl mb-2">Finanzas</div>
          <hr />
        </div>
        <div class="flex flex-col px-6 py-4">
          <router-link
            to="diezmos"
            class="inline-block text-center bg-gray-200 rounded-full px-3 py-2 text-sm font-semibold text-gray-700 mr-2 my-1 hover:bg-blue-500 hover:text-gray-100 hover:shadow-md"
          >Diezmos</router-link>
          <router-link
            to="ofrendas"
            class="inline-block text-center bg-gray-200 rounded-full px-3 py-2 text-sm font-semibold text-gray-700 mr-2 my-1 hover:bg-blue-500 hover:text-gray-100 hover:shadow-md"
          >Ofrendas</router-link>
          <router-link
            to="protemplo"
            class="inline-block text-center bg-gray-200 rounded-full px-3 py-2 text-sm font-semibold text-gray-700 mr-2 my-1 hover:bg-blue-500 hover:text-gray-100 hover:shadow-md"
          >Protemplo</router-link>
        </div>
      </div>

      <div class="bg-gray-100 w-64 rounded overflow-hidden shadow-lg hover:shadow-md">
        <div class="flex justify-center">
          <div class="mt-10">
            <img class="text-center" src="img/graphic.png" alt="Sunset in the mountains" />
          </div>
        </div>
        <div class="px-6 py-4">
          <div class="font-bold text-center text-xl mb-2">Estadisticas</div>
          <hr />
        </div>
        <div class="flex flex-col px-6 py-4">
          <router-link
            to="diezmos-charts"
            class="inline-block text-center bg-gray-200 rounded-full px-3 py-2 text-sm font-semibold text-gray-700 mr-2 my-1 hover:bg-blue-500 hover:text-gray-100 hover:shadow-md"
          >Diezmos</router-link>

          <router-link
            to="ofrendas-harts"
            class="inline-block text-center bg-gray-200 rounded-full px-3 py-2 text-sm font-semibold text-gray-700 mr-2 my-1 hover:bg-blue-500 hover:text-gray-100 hover:shadow-md"
          >Ofrendas</router-link>
          <router-link
            to="protemplo-charts"
            class="inline-block text-center bg-gray-200 rounded-full px-3 py-2 text-sm font-semibold text-gray-700 mr-2 my-1 hover:bg-blue-500 hover:text-gray-100 hover:shadow-md"
          >Protemplo</router-link>
        </div>
      </div>

      <div class="bg-gray-100 w-64 rounded overflow-hidden shadow-lg hover:shadow-md">
        <div class="flex justify-center">
          <div class="mt-10">
            <img class="text-center" src="img/calendar.png" alt="Sunset in the mountains" />
          </div>
        </div>
        <div class="px-6 py-4">
          <div class="font-bold text-center text-xl mb-2">Eventos</div>
          <hr />
        </div>
        <div class="flex flex-col px-6 py-4">
          <router-link
            to="eventos"
            class="inline-block text-center bg-gray-200 rounded-full px-3 py-2 text-sm font-semibold text-gray-700 mr-2 my-1 hover:bg-blue-500 hover:text-gray-100 hover:shadow-md"
          >Calendario</router-link>
        </div>
      </div>
    </div>
  </div>
</template>