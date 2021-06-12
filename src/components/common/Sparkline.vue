<template>
  <div id="chart">
    <div id="chart-timeline">
      <apexchart
        type="area"
        height="100%"
        ref="chart"
        :options="chartOptions"
        :series="series"
      ></apexchart>
    </div>
  </div>
</template>

<script>
export default {
  name: "Chart",
  data() {
    return {
      series: [
        {
          data: [
            [1358290800000, 37.88],
            [1358895600000, 38.25],
            [1359414000000, 38.52],
            [1359932400000, 38.1],
            [1360278000000, 38.2],
            [1360796400000, 38.61],
            [1361401200000, 38.34],
            [1361919600000, 39.0]
          ]
        }
      ],
      chartOptions: {
        colors: ["#48c774"],
        chart: {
          id: "area",
          type: "area-datetime",
          height: "100%",
          sparkline: {
            enabled: true
          }
        },
        dataLabels: {
          enabled: false
        },
        markers: {
          size: 0,
          style: "hollow"
        },
        xaxis: {
          type: "datetime",
          min: new Date("15 Jan 2013").getTime(),
          tickAmount: 6
        },
        tooltip: {
          x: {
            format: "dd MMM yyyy"
          }
        },
        fill: {
          type: "gradient",
          gradient: {
            shadeIntensity: 1,
            opacityFrom: 0.7,
            opacityTo: 0.9,
            stops: [0, 100]
          }
        }
      },
      selection: "one_month"
    };
  }
};
</script>

<style lang="scss" scoped>
#chart-timeline {
  height: 2rem;
  width: 10rem;
  position: relative;
  margin: auto;
}
</style>
