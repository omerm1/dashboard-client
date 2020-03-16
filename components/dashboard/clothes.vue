<template>
  <div class="flex flex-col border-yellow-400 border-2 rounded">
    <h1 class="text-2xl font-medium bg-yellow-400 border text-center w-full pt-2 pb-1">
      {{ title }}
    </h1>
    <div id="chart" class="content_wrapper">
      <apexchart width="290" type="pie" :options="chartOptions" :series="series" />
    </div>
  </div>
</template>

<script>
import VueApexCharts from 'vue-apexcharts'

export default {
  components: {
    apexchart: VueApexCharts
  },
  data () {
    return {
      title: 'Clothes',
      series: [146, 153, 171, 189, 171, 170],
      chartOptions: {
        chart: {
          width: 290,
          type: 'pie'
        },
        labels: ['Blazer', 'Hoodie', 'Jacket', 'Jumper', 'Raincoat', 'Sweater'],
        responsive: [{
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              show: false,
              position: 'bottom'
            }
          }
        }]
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.content_wrapper {
  background-color: #C8D7F1;
  height: 100%;
  opacity: 0.7;
}
</style>
