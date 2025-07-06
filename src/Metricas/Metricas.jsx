import React from "react";
import Apresentacao from "../Apresentacao.jsx";
import ContainerUmMetricas from "./ContainerUmMetricas/ContainerUmMetricas.jsx";
import ContainerDoisMetricas from "./ContainerDoisMetricas/ContainerDoisMetricas.jsx";
import style from "./Metricas.module.css";


const SectionMetricas = () => {
  return (
    <section className={style.sectionMetricas}>


      <Apresentacao
        tituloSecao="Metricas"
        paragrafoSecao="Números que conectam: veja como impactamos pessoas e ampliamos o alcance da sua marca." />

      <div className={style.containerMetricas}>
        <ContainerUmMetricas />
        <ContainerDoisMetricas />
      </div>




    </section>
  );
};

export default SectionMetricas;
