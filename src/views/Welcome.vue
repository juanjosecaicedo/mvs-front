<template>
  <div class id="welcome">
    <b-navbar toggleable="md" type="light" class="bg-white" id="navbar">
      <img src="img/logo1.png" class="w-10 mr-2" alt />
      <b-navbar-brand to="/" class="uppercase font-semibold title">Mision Vida</b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav v class="ml-auto items-center">
          <b-nav-item @click="$router.push('/login')">
            <b-button pill class="px-4 items-center" variant="outline-primary">
              <span class="mr-2">PORTAL</span> 
              <b-icon icon="clipboard-data"></b-icon>
            </b-button>
          </b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <main>
      <header>
        <div class="bg-gradient-linear">
          <div class="container py-16">
            <div class="row items-center">
              <div class="col-md-6">
                <h1 class="text-white uppercase">Iglesia mision vida segadores cali</h1>
                <hr />
                <p
                  class="text-white"
                >Dejad crecer juntamente lo uno y lo otro hasta la siega; y al tiempo de la siega yo diré a los segadores: Recoged primero la cizaña, y atadla en manojos para quemarla; pero recoged el trigo en mi granero.</p>
                <p class="text-white">S. Mateo 13:30</p>
                <div>
                  <b-button pill class="px-4" @click="pageFacebook()" variant="outline-light">pagina en facebook</b-button>
                </div>
              </div>
              <div class="col-md-6 px-0 flex justify-end">
                <img class="rounded-lg shadow-lg" width="410px" src="../assets/images/5.png" alt />
              </div>
            </div>
          </div>
        </div>
        <div class="image-header my-10">
          <div class="container" id="slider">
            <Hooper
              class
              :itemsToShow="3"
              :infiniteScroll="true"
              :centerMode="true"
              :progress="true"
              :autoPlay="true"
              :playSpeed="2000"
            >
              <slide>
                <img height="400" src="../assets/images/1.jpg" alt />
              </slide>
              <slide>
                <img src="../assets/images/4.jpg" alt />
              </slide>
              <slide>
                <img src="../assets/images/7.jpg" alt />
              </slide>
              <slide>
                <img height="100%" src="../assets/images/8.jpg" alt />
              </slide>
              <slide>
                <img src="../assets/images/6.jpg" alt />
              </slide>
              <slide>
                <img src="../assets/images/3.jpg" alt />
              </slide>
              <slide>
                <img src="../assets/images/2.jpg" alt />
              </slide>
              <Pagination slot="hooper-addons"></Pagination>
            </Hooper>
          </div>
        </div>
      </header>
      <section class="my-5">
        <h3 class="text-center text-gray-600 uppercase">Nuestas redes sociales</h3>
        <div class="container flex flex-wrap justify-center items-center social">
          <div class="px-6 py-2 border rounded-lg hover:bg-blue-800 hover:text-white">
            <b-link
              class="text-gray-700 hover:text-white"
              target="_blank"
              href="https://www.facebook.com/iglesiamisionvidasegadorescali/"
            >
              <i class="icon-facebook1 display-4"></i>
            </b-link>
          </div>
          <div class="px-6 py-2 mx-2 border rounded-lg hover:bg-red-700">
            <b-link
              class="text-gray-700 hover:text-white"
              target="_blank"
              href="https://www.facebook.com/fredi.diaz.94"
            >
              <i class="icon-youtube1 display-4"></i>
            </b-link>
          </div>
          <div class="px-6 py-2 border rounded-lg hover:bg-red-500">
            <b-link
              class="text-gray-700 hover:text-white"
              target="_blank"
              href="https://instagram.com/iglesiamisionvidasegadorescali?igshid=1dcarns6rrorj"
            >
              <i class="icon-instagram display-4"></i>
            </b-link>
          </div>
        </div>
      </section>
      <div class="bg-white">

      
      <section class="container bg-white my-3">
        <div class="grid grid-cols-2 gap-0 items-center">
          <div class="col-span-1 text-center">
            <h2 class="tracking-wide">MISIÓN</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio natus recusandae iusto velit! Dolor eligendi, vitae necessitatibus vel odio quisquam. Assumenda mollitia sequi nesciunt iusto nobis amet, praesentium officia eligendi!</p>
          </div>
          <div class="col-span-1">
            <img src="../assets/images/undraw_mission_impossible_bwa2.png" style="width: 100%; height: 30rem;" alt="">
          </div>
          <div class="col-span-1">
            <img src="../assets/images/undraw_shared_goals_3d12.png" alt="">
          </div>
          <div class="col-span-1 text-center">
            <h2 class="tracking-wide ">VISIÓN</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat fugit repellat quidem commodi. Rem odit iste, voluptatum molestias molestiae minima! Adipisci maxime voluptates repellendus corporis reprehenderit deserunt ea facilis quas?</p>
          </div>
        </div>
      </section>
      </div>
      <section class="container mb-3">        
        <hooper group="group1"
          
          :autoPlay="true"
          :infiniteScroll="true"
          :playSpeed="3000"
          style="height: 500px"
        >
          <slide>
            <img class="object-contain h-full w-full" src="../assets/images/IGLESIA M.V.S CALI on Instagram_ _Mis labios siemp(JPG).jpg" alt="">
          </slide>
          <slide>
            <img class="object-contain  h-full w-full" src="../assets/images/IGLESIA M.V.S CALI on Instagram_ __porpoco _salvac(JPG).jpg" alt="">
          </slide>
          <slide>
            <img class="object-contain  h-full w-full" src="../assets/images/IGLESIA M.V.S CALI on Instagram_ _Somos uno en Jes(JPG).jpg" alt="">
          </slide>
          <slide>
            <img class="object-contain  h-full w-full" src="../assets/images/IGLESIA M.V.S CALI on Instagram_ _En nuestra serie(JPG).jpg" alt="">
          </slide>
          <slide>
            <img class="object-contain  h-full w-full" src="../assets/images/Instagram post by IGLESIA M.V.S CALI_Bwx0XhslNCw(JPG).jpg" alt="">
          </slide>
          <slide>
            <img class="object-contain  h-full w-full" src="../assets/images/IGLESIA M.V.S CALI on Instagram_ _1 Timoteo_4-16__(JPG).jpg" alt="">  
          </slide>          
          <!-- <Navigation slot="hooper-addons"></Navigation> -->
          <!-- <Progress slot="hooper-addons"></Progress> -->
        </hooper>

        <hooper group="group1" :itemsToShow="5" :centerMode="true">
          <slide>
            <img class="object-contain h-full w-full" src="../assets/images/IGLESIA M.V.S CALI on Instagram_ _Mis labios siemp(JPG).jpg" alt="">
          </slide>
          <slide>
            <img class="object-contain  h-full w-full" src="../assets/images/IGLESIA M.V.S CALI on Instagram_ __porpoco _salvac(JPG).jpg" alt="">
          </slide>
          <slide>
            <img class="object-contain  h-full w-full" src="../assets/images/IGLESIA M.V.S CALI on Instagram_ _Somos uno en Jes(JPG).jpg" alt="">
          </slide>
          <slide>
            <img class="object-contain  h-full w-full" src="../assets/images/IGLESIA M.V.S CALI on Instagram_ _En nuestra serie(JPG).jpg" alt="">
          </slide>
          <slide>
            <img class="object-contain  h-full w-full" src="../assets/images/Instagram post by IGLESIA M.V.S CALI_Bwx0XhslNCw(JPG).jpg" alt="">
          </slide>
          <slide>
            <img class="object-contain  h-full w-full" src="../assets/images/IGLESIA M.V.S CALI on Instagram_ _1 Timoteo_4-16__(JPG).jpg" alt="">  
          </slide>
          <slide>
            <img class="object-contain  h-full w-full" src="../assets/images/Instagram post by IGLESIA M.V.S CALI_BxQ71Y7ghNB(JPG).jpg" alt="">  
          </slide>
          <slide>
            <img class="object-contain  h-full w-full" src="../assets/images/Instagram post by IGLESIA M.V.S CALI_BwqOFyPBrWH(JPG).jpg" alt="">  
          </slide> 

          <Navigation slot="hooper-addons"></Navigation>
          <Pagination slot="hooper-addons"></Pagination>
        </hooper>
      </section>
      <div class="bg-white py-4">
          <h3 class="text-center uppercase">contáctenos</h3>
          <div class="container">

          
          <div class="grid grid-cols-2 mt-5">
            <div class="col-span-1">
              <h5 class="text-center mb-4">Informacion de contacto</h5>
              <ul>
                <li>Dirección: <span class="text-gray-700">Cl 95e #4-33</span></li>
                <li class="mt-3">Barrio: <span class="text-gray-700">Cordoba</span></li>
                <li class="mt-3">Ciudad: <span class="text-gray-700">Cali (Valle del cauca) Colombia</span></li>
                <li class="mt-3">Correo: <span class="text-gray-700">contacto@misionvida.com</span></li>
                <li class="mt-3">Telefono: <span class="text-gray-700">+57 323-422-5577</span></li>
              </ul>
            </div>
            <div class="col-span-1">
              <div class="card-contacto border p-3">
              <h5 class="text-center mb-4">Envianos un mensaje</h5>
              <form action="" method="POST">
                <div class="mb-5">
                  <label for="nombre" class="text-gray-700">Nombre</label>
                  <input type="text" name="" class="appearance-none relative block w-full px-2 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:shadow-outline-blue focus:border-blue-500 focus:z-10 sm:text-sm sm:leading-5" id="nombre">
                </div>
                <div class="mb-5">
                  <label for="correo" class="text-gray-700">Correo</label>
                  <input type="email" name="" class="appearance-none relative block w-full px-2 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:shadow-outline-blue focus:border-blue-500 focus:z-10 sm:text-sm sm:leading-5" id="correo">
                </div>
                <div>
                  <label for="mensaje" class="text-gray-700">Mensaje</label>
                  <textarea name="" id="mensaje" class="appearance-none relative block w-full px-2 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:shadow-outline-blue focus:border-blue-500 focus:z-10 sm:text-sm sm:leading-5" placeholder="Dejanos una mensaje"></textarea>
                </div>
                <button type="button" class="group relative w-full flex justify-center py-3 px-4 my-2 border border-transparent text-sm font-bold rounded-md text-white bg-blue-600 to-blue-500 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                      <span class="absolute left-0 inset-y-0 flex items-center pl-3">                      
                          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                      </span>
                          Enviar
                  </button>
              </form>
              </div>
            </div>
          </div>
          </div>
      </div>
    </main>
    <footer>
      <div class="py-5 content-footer"></div>
      <div style="background: #26262E" class="p-3">
        <div class="text-white flex flex-wrap justify-between">
          <div>
            by:
            <span class="text-gray-400 italic">juan david, juan jose</span>
          </div>
          <div>{{ year }}</div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import { Hooper, Slide, Navigation, Pagination, Progress  } from "hooper";
import "hooper/dist/hooper.css";
export default {
  components: {
    Hooper,
    Slide,
    Navigation,
    Pagination,
    // eslint-disable-next-line vue/no-unused-components
    Progress
  },
  mounted() {
    this.year = new Date().getFullYear();
  },
  data() {
    return {
      year: "",
    };
  },
  methods: {
    pageFacebook() {
      window.open('https://www.facebook.com/iglesiamisionvidasegadorescali/', '_blank')
    },
  },
};
</script>

<style scoped>
.title {
  letter-spacing: 8px !important;
}
.bg-gradient-linear {
  background: linear-gradient(98.08deg, #007bff 15.09%, #32323c 58.01%);
}
footer .content-footer {
  background: #32323c;
}
.social div {
  transition: 0.5s;
}
.social div:hover {
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05);
}
.social div a {
  text-decoration: none;
}
.card-contacto {
  max-width: 25rem;
}
</style>

