import React from "react";
import Highcharts, { Options } from "highcharts";
import HighchartsReact from "highcharts-react-official";

interface PieChartProps {
  data: any;
}

const PieChart: React.FC<PieChartProps> = ({ data }) => {
  // Organize married men, single men, married women and single women
  const getChartData: any = () => {
    const marriedMen = data.reduce(
      (acc: any, item: any) => acc + Number(item.household_ordinary_m),
      0
    );
    const singleMen = data.reduce(
      (acc: any, item: any) => acc + Number(item.household_single_m),
      0
    );
    const marriedWomen = data.reduce(
      (acc: any, item: any) => acc + Number(item.household_ordinary_f),
      0
    );
    const singleWomen = data.reduce(
      (acc: any, item: any) => acc + Number(item.household_single_f),
      0
    );
    return [
      {
        colorByPoint: true,
        data: [
          {
            name: "共同生活",
            y: marriedMen + marriedWomen,
          },
          {
            name: "獨立生活",
            y: singleMen + singleWomen,
          },
        ],
      },
    ];
  };

  const options: Options = {
    chart: {
      type: "pie",
      height: "47%",
    },
    title: {
      text: "戶數統計",
    },
    plotOptions: {
      pie: {
        size: "100%",
        allowPointSelect: true,
        cursor: "pointer",
        dataLabels: {
          enabled: true,
          formatter: function () {
            return `${Math.round(this.percentage * 100) / 100}%`;
          },
        },
        showInLegend: true,
        colors: ["#626EB2", "#8C9EFF"],
      },
    },
    series: getChartData(),
    accessibility: {
      enabled: false,
    },
    responsive: {
      rules: [
        {
          condition: {
            maxWidth: 980,
          },
          chartOptions: {
            chart: {
              type: "pie",
              height: "70%",
            },
          },
        },
        {
          condition: {
            maxWidth: 400,
          },
          chartOptions: {
            chart: {
              type: "pie",
              height: "100%",
            },
          },
        },
      ],
    },
  };

  return <HighchartsReact highcharts={Highcharts} options={options} />;
};

export default PieChart;
