import React from "react";
import ReactApexChart from "react-apexcharts";

export default function OrdersChart() {
    
    const options = { labels: ["Completed", "Ongoing", "Cancelled"],responsive: [{
      breakpoint: 480,
      options: {
        chart: {
          width: 320
        },
        legend: {
          position: 'bottom'
        }
      }
    }] };
const series = [20, 16, 3,]; //our data

return (
  <div className="">
    <ReactApexChart options={options} series={series} type="polarArea" width="100%" />
  </div>
);
  }