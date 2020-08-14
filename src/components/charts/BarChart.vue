<script>
import { Bar } from "vue-chartjs";

export default {
  extends: Bar,
  props: {
    chartsLabels: {
      type: Array,
      required: true
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
            label: "Año "+ this.chartsLabel,
            backgroundColor: "#f87979",
            data: this.chartsData
          }
        ]
      },
      { responsive: true, maintainAspectRatio: false }
    );
  }
};
</script>
