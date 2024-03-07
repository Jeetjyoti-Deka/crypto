"use client";

import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const data = [
  { year: 2010, count: 10 },
  { year: 2011, count: 20 },
  { year: 2012, count: 15 },
  { year: 2013, count: 25 },
  { year: 2014, count: 22 },
  { year: 2015, count: 30 },
  { year: 2016, count: 28 },
];

// const doughnutChart = new Chart()

const Tokenomics = () => {
  const data = {
    labels: ["Crowdsale Investors", "Foundation"],
    datasets: [
      {
        data: [80, 20],
        backgroundColor: ["rgb(0, 82, 254)", "rgb(250, 160, 2)"],
      },
    ],
  };

  return (
    <div className="bg-white p-6">
      <h2 className="text-xl font-semibold mb-6">Tokenomics</h2>
      <h4 className="font-semibold mb-3">Initial Distribution</h4>
      <div className="w-[250px] sm:w-[300px] h-[250px] sm:h-[300px] mb-3">
        <Doughnut data={data}></Doughnut>
      </div>
      <p className="text-black/60 font-medium">
        Lorem ipsum dolor sit amet consectetur. Cras aliquet tristique ornare
        vestibulum nunc dignissim vel consequat. Leo etiam nascetur bibendum
        amet enim sit eget leo amet. At metus orci augue fusce eleifend lectus
        eu fusce adipiscing. Volutpat ultrices nibh sodales massa habitasse urna
        felis augue. Gravida aliquam fermentum augue eu. Imperdiet bibendum amet
        aliquam donec. Eget justo dui metus odio rutrum. Vel ipsum eget in at
        curabitur sem posuere facilisis vitae. Sed lorem sit mauris id eget arcu
        ut. Vulputate ipsum aliquet odio nisi eu ac risus.
      </p>
    </div>
  );
};
export default Tokenomics;
