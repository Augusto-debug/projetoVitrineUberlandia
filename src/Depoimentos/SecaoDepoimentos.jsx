import React from 'react';
import CardDepoimentos from './CardDepoimentos.jsx';
import { depoimentos } from './DadosDepoimentos.js';
import style from './SecaoDepoimentos.module.css';
import Apresentacao from '../Apresentacao.jsx';

const SecaoDepoimentos = () => {
  return (
    <section className={style.secaoDepoimentos}>
      <Apresentacao tituloSecao="Depoimentos" />
      <div className={style.wrapperDepoimentos}>
        <img
          src="/foto1-Editada.jpg"
          alt="Consultora"
          className={style.imagemConsultora}
        />
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
    </section>
  );
};

export default SecaoDepoimentos;