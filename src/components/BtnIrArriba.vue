<template>
  <div>
    <button
      class="btnIrArriba py-1 px-5 font-semibold rounded text-white bg-blue-500 border border-blue-100 hover:bg-blue-400 focus:outline-none shadow-lg"
    >subir</button>
  </div>
</template>
<style>
.btnIrArriba {
  z-index: 50;
  position: fixed;
  top: 80%;
  left: 92%;
}
</style>
<script>
export default {
  data() {
    return {
      visibleBtn: ''
    };
  },
  mounted(){
    document.addEventListener('scroll', function(e) {
      if(e.target.scrollingElement.scrollTop > 50){        
        this.visibleBtn = 'hidden';
      }else {
        this.visibleBtn = '';
      }
      
    })
  }
  
};
</script>