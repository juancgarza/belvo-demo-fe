<script>
import { Line } from "vue-chartjs";

export default {
  extends: Line,
  props: {
    data: {
      type: Array,
      default: null
    },
    labels: {
      type: Array,
      default: null
    }
  },
  options: {
      responsive: true,
      maintainAspectRatio: false
  },
  mounted() {
    this.renderChart({
      labels: this.labels,
      datasets: [
        {
          label: 'Balance',
          backgroundColor: '#f87979',
          data: this.data
        }
      ],
      options: this.options
    });
  }
};
</script>