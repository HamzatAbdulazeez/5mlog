import React from "react";
import ReactApexChart from "react-apexcharts";

export default function DriverOrdersChart() {
    
    const options = { labels: ["Completed", "Ongoing", "Cancelled"],
    responsive: [{
      breakpoint: 480,
      options: {
        chart: {
          width: 320
        },
        legend: {
          position: 'bottom'
        }
      }
    }],plotOptions: {
      radialBar: {
        dataLabels: {
          name: {
            fontSize: '22px',
          },
          value: {
            fontSize: '26px',
          },
          total: {
            show: true,
            label: 'Total',
            formatter: function (w) {
              // By default this function returns the average of all series. The below is just an example to show the use of custom formatter function
              return 249
            }
          }
        }
      }
    }, };
const series = [20, 16, 3,]; //our data

return (
  <div className="">
    <ReactApexChart options={options} series={series} type="radialBar" width="100%" />
  </div>
);
  }