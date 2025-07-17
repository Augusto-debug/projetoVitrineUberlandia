import React from 'react'
import style from './Divulgacoes.module.css'

const Parceiros = () => {
  return (
    <section id='parcerias' className={style['partners-container']}>
      <div className={style['partners-content']}>
        <div className={style['partners-header']}>
          <h1>Sua marca na vitrine</h1>
          <p>Destaque o melhor da sua marca: alcance, engajamento e conexões no instagram.</p>
        </div>
        
        <div className={style['partners-grid']}>
          <div
            className={style['partner-card']}
            onClick={() => window.open('https://www.instagram.com/p/DJjj1gbNW_K/', '_blank')}
          >
            <img src="/feijoada-celinho.png" alt="Feijoada do Celinho" />
            <h3>Feijoada do Celinho</h3>
          </div>
          
          <div
            className={style['partner-card']}
            onClick={() => window.open('https://www.instagram.com/p/DJ6mpaxN24J/?img_index=1', '_blank')}
          >
            <img src="/fn-cortinas.png" alt="FN Cortes" />
            <h3>FN Cortinas</h3>
          </div>
          
          <div
            className={style['partner-card']}
            onClick={() => window.open('https://www.instagram.com/p/DKImazfyVu2/', '_blank')}
          >
            <img src="/supermercado-abc.png" alt="Supermercado ABC" />
            <h3>SUPERMERCADO ABC</h3>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Parceiros
