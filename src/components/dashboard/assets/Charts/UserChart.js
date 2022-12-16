import React from "react";
import ReactApexChart from "react-apexcharts";

export default function UsersChart() {
    
    const options = { labels: ["Vendors", "Drivers", "Users"],responsive: [{
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
const series = [120, 100, 53,]; //our data

return (
  <div className="">
    <ReactApexChart options={options} series={series} type="polarArea" width="100%" />
  </div>
);
  }