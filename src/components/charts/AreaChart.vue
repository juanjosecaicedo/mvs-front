<script>
import { Line } from "vue-chartjs";

export default {
  extends: Line,
  props: {
    chartsLabels: {
      type: Array,
      required: true,
    },
    chartsLabel: {
      type: String,
      required: true
    },
    chartsData: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      gradient: null,
      gradient2: null,
    };
  },
  mounted() {
    this.gradient = this.$refs.canvas
      .getContext("2d")
      .createLinearGradient(0, 0, 0, 450);
    this.gradient2 = this.$refs.canvas
      .getContext("2d")
      .createLinearGradient(0, 0, 0, 450);

    this.gradient.addColorStop(0, "rgba(255, 0,0, 0.5)");
    this.gradient.addColorStop(0.5, "rgba(255, 0, 0, 0.25)");
    this.gradient.addColorStop(1, "rgba(255, 0, 0, 0)");

    this.gradient2.addColorStop(0, "rgba(0, 231, 255, 0.9)");
    this.gradient2.addColorStop(0.5, "rgba(0, 231, 255, 0.25)");
    this.gradient2.addColorStop(1, "rgba(0, 231, 255, 0)");

    this.renderChart(
      {
        labels: this.chartsLabels,
        datasets: [
          {
            label: "Año "+this.chartsLabel,
            borderColor: "#FC2525",
            pointBackgroundColor: "white",
            borderWidth: 1,
            pointBorderColor: "white",
            backgroundColor: this.gradient2,
            data: this.chartsData,
          },          
        ],
      },
      { responsive: true, maintainAspectRatio: false }
    );   
  },
};
</script>
