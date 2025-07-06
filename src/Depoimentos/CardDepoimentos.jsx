import React from 'react';
import style from './CardDepoimentos.module.css';

const CardDepoimentos = ({ depoimento, nome, avatar }) => {
  return (
    <div className={style.cardDepoimentos}>
      <div className={style.autor}>
        <img src={avatar} alt={`Avatar de ${nome}`} className={style.avatarAutor} />
        <div className={style.autorTexto}>
          <span className={style.nomeAutor}>{nome}</span>
          <p className={style.depoimento}>"{depoimento}"</p>
        </div>
      </div>
    </div>
  );
};

export default CardDepoimentos;