import React, { useEffect, useState } from "react";
import style from "./SecaoFaq.module.css";

const url = "https://augusto-debug.github.io/projetoVitrineUberlandia/src/req.json";

export default function SecaoFaq() {
  const [perguntas, setPerguntas] = useState([]);

  useEffect(() => {
    const carregarPerguntas = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();

        console.log(data);

        if (data && Array.isArray(data.faq)) {
          setPerguntas(data.faq);
        } else {
          console.error("O formato dos dados não é esperado.");
        }
        
      } catch (error) {
        console.error("Erro ao carregar os dados", error);
      }
    };

    carregarPerguntas();
  }, []);

  return (
    <section id="faq" className={style.secaoFaq}>
      <h3>FAQ</h3>
      <h2>Perguntas frequentes</h2>
      {perguntas.map((item, index) => (
        <details key={index}>
          <summary>
          <p>{item.pergunta}</p>
          </summary>
          <p>{item.resposta}</p>
        </details>
      ))}
    </section>
  );
}
