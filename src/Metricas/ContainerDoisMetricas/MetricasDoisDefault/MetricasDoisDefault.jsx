import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Legend } from "chart.js";

import style from "./MetricasDoisDefault.module.css";

ChartJS.register(ArcElement, Legend);

//register registra os componentes do Chart.js que serão usados no gráfico, permitindo que o Doughnut funcione corretamente.
//Arc
const MetricasDoisDefault = ({ textoMetrica, numerosMetrica }) => {
  const data = {
    labels: [],
    datasets: [
      {
        data: [numerosMetrica, 100 - numerosMetrica],
        backgroundColor: ["#7c0000", "#e2a8a8"], // vermelho escuro e claro
        borderWidth: 0,
        cutout: "70%",
      },
    ],
  };

  const options = {
    cutout: "70%",
    plugins: {
      legend: { display: false }    },
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
