
<script>
export default {
  props: {
    messagge:  {
      type: String,
      require: true
    },
    title: {
      type: String,
      require: true
    },
    type: {
      type: String,
      require: false
    }
  },
  data(){
    return {
      toastCount: 0
    }
  },
  mounted(){
    this.makeToast();
  },
  methods: {
    makeToast(){
      this.toastCount++
      this.$bvToast.toast(this.messagge, {
        title: this.title,
        variant: this.type,
        autoHideDelay: 5000,
        appendToast: false
      })
    }
  }
};
</script>

<style>
</style>