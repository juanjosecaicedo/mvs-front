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
  mounted() {
    this.renderChart(
      {
        labels: this.chartsLabels,
        datasets: [
          {
            label: "Año "+this.chartsLabel,
            data: this.chartsData,
            backgroundColor: "transparent",
            borderColor: "rgba(1, 116, 188, 0.50)",
            pointBackgroundColor: "rgba(171, 71, 188, 1)"
          }
        ]
      },
      {
        responsive: true,
        maintainAspectRatio: false,
        title: {
          display: true,
          text: ""
        }
      }
    );
  }
};
</script>