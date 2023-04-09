import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

interface BarChartProps {
  data: any;
}

const BarChart: React.FC<BarChartProps> = ({ data }) => {
  // Organize married men, single men, married women and single women
  const getChartData = () => {
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
        name: "男性",
        data: [marriedMen, singleMen],
        color: "#7D5FB2",
      },
      {
        name: "女性",
        data: [marriedWomen, singleWomen],
        color: "#B388FF",
      },
    ];
  };

  const options = {
    chart: {
      type: "column",
    },
    title: {
      text: "人口數總計",
    },
    xAxis: {
      title: {
        text: "型態",
        style: {
          fontWeight: "bold",
        },
      },
      categories: ["共同生活", "獨立生活"],
    },
    yAxis: {
      title: {
        text: "數量",
        align: "high",
        offset: 15,
        rotation: 0,
        y: -10,
        style: {
          fontWeight: "bold",
        },
      },
    },
    series: getChartData(),
    accessibility: {
      enabled: false,
    },
  };

  return <HighchartsReact highcharts={Highcharts} options={options} />;
};

export default BarChart;
