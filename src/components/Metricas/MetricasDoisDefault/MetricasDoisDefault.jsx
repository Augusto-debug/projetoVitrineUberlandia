import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement } from "chart.js";
import style from "./MetricasDoisDefault.module.css";

ChartJS.register(ArcElement);

const MetricasDoisDefault = ({ textoMetrica, numerosMetrica }) => {
  const data = {
    datasets: [
      {
        data: [numerosMetrica, 100 - numerosMetrica],
        backgroundColor: ["#7c0000", "#e2a8a8"],
        borderWidth: 0,
        cutout: "70%",
      },
    ],
  };

  const options = {
    plugins: {
      legend: { display: false },
      tooltip: { enabled: false },
    },
  };

  return (
    <div className={style.containerGrafico}>
      <p className={style.titulo}>{textoMetrica}</p>
      <div className={style.wrapper}>
        <Doughnut data={data} options={options} />
        <div className={style.valorCentro}>
          <span>{numerosMetrica}%</span>
        </div>
      </div>
    </div>
  );
};

export default MetricasDoisDefault;