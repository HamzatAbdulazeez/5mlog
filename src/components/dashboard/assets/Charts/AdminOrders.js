import React from "react";
import ReactApexChart from "react-apexcharts";

export default function AdminChart() {
    
    const options = { labels: ["Orders", "Deliveries", ],
    chart: {
        type: 'bar',
        height: 250
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '55%',
          endingShape: 'rounded'
        },
      },stroke: {
        show: true,
        width: 2,
        colors: ['transparent']
      },
      xaxis: {
        categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
      },};
const series =  [{
    name: 'Orders',
    data: [44, 55, 57, 78, 61, 58, 63, 60, 66]
  }, {
    name: 'Deliveries',
    data: [43, 54, 50, 74, 61, 57, 59, 55, 55]
  }]; //our data

return (
  <div className="">
    <ReactApexChart options={options} series={series} type="bar" width="100%" height="350px" />
  </div>
);
  }