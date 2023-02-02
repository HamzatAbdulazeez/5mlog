import React from "react";
import ReactApexChart from "react-apexcharts";

export default function UsersChart({chartData}) {
    
    const options = { labels: ["Customers", "Partners", "Riders"],responsive: [{
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
  const series = [chartData ? chartData.total_customers : 0, chartData ? chartData.total_partners : 0, chartData ? chartData.total_drivers : 0]; //our data

return (
  <div className="">
    <ReactApexChart options={options} series={series} type="polarArea" width="100%" />
  </div>
);
  }