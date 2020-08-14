<template>
  <div class="bg-white" id="welcome">
    <b-navbar toggleable="md" type="light" variant="transparent">
      <img src="img/logo1.png" class="w-10 mr-2" alt />
      <b-navbar-brand to="/" class="uppercase font-semibold title">Mision Vida</b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav v class="ml-auto items-center">
          <b-nav-item @click="$router.push('/login')">
            <b-button pill class="px-4" variant="outline-primary">PORTAL</b-button>
          </b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <main>
      
    </main>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.title {
  letter-spacing: 8px !important;
}
.col-md-6 img {
  width: 80%;
  height: 430px;
}
</style>

