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
                >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus non rem deserunt natus tempora quasi saepe fugiat doloremque porro enim.</p>
                <div>
                  <b-button pill class="px-4" variant="outline-light">pagina en facebook</b-button>
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
      <section class="container">        
        <hooper group="group1"
          :autoPlay="true"
          :infiniteScroll="true"
          :playSpeed="2000"
        >
          <slide>slide 1</slide>
          <slide>slide 2</slide>
          <slide>slide 3</slide>
          <slide>slide 4</slide>
          <slide>slide 5</slide>
          <slide>slide 6</slide>          
          <Navigation slot="hooper-addons"></Navigation>
          <Progress slot="hooper-addons"></Progress>
        </hooper>

        <hooper group="group1" :itemsToShow="3" :centerMode="true">
          <slide>slide sub 1</slide>
          <slide>slide sub 2</slide>
          <slide>slide sub 3</slide>
          <slide>slide sub 4</slide>
          <slide>slide sub 5</slide>
          <slide>slide sub 6</slide>

          <Navigation slot="hooper-addons"></Navigation>
          <Pagination slot="hooper-addons"></Pagination>
        </hooper>
      </section>
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
    pageFacebook() {},
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
</style>

