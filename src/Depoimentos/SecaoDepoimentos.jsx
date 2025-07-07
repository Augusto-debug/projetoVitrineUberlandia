import React from "react";
import CardDepoimentos from "./CardDepoimentos.jsx";
import { depoimentos } from "./DadosDepoimentos.js";
import style from "./SecaoDepoimentos.module.css";
import Apresentacao from "../Apresentacao.jsx";

const SecaoDepoimentos = () => {
  return (
    <section id="depoimentos" className={style.secaoDepoimentos}>
      <Apresentacao tituloSecao="Depoimentos" />
      <div className={style.wrapperDepoimentos}>
        <div className={style.containerImagemDepoimentos}>
          <div className={style.imagemConsultoraWrapper}>
            <img
              src="/foto1-Editada.jpg"
              alt="Consultora"
              className={style.imagemConsultora}
            />
          </div>
          <div className={style.containerDepoimentos}>
            <div className={style.gridDepoimentos}>
              {depoimentos.map((depoimento, index) => (
                <CardDepoimentos
                  key={index}
                  depoimento={depoimento.depoimento}
                  nome={depoimento.nome}
                  avatar={depoimento.avatar}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecaoDepoimentos;
