import React, { useState } from "react";
import Chart from "react-apexcharts";

export default function ApexChart(props) {
  const series = [
    {
      name: "xx",
      data: props.data
    }
  ];
  const options = {
    chart: {
      height: 350,
      type: "line",
      zoom: {
        enabled: false
      }
    },
    dataLabels: {
      enabled: false,
      color: "#000"
    },
    stroke: {
      width: 2,
      curve: "smooth"
    },
    xaxis: {
        labels: {
            formatter: function(value) {
               return '';
            }
        }
    },
    tooltip: {
        style: {
            color: "#000"
        }
    },
    colors: ["#210124"],
    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 1,
        inverseColors: true,
        gradientToColors: ["#DB162F"],
        opacityFrom: 1,
        opacityTo: 1,
        type: "vertical",
        stops: [0, 10]
      }
    }
  };
  return (
    <div id="chart">
      <Chart options={options} series={series} type="line" height={350} />
    </div>
  );
}
