import MetricasUmDefault from "./MetricasUmDefault/MetricasUmDefault.jsx"
import style from "./ContainerUmMetricas.module.css"


const ContainerUmMetricas = () => {
    return (
        <div className={style.containerUmMetricas}>
            <MetricasUmDefault
                textoMetrica="Seguidores"
                numerosMetrica="6.1K" />
            <MetricasUmDefault
                textoMetrica="Alcance"
                numerosMetrica="32K" />
            <MetricasUmDefault
                textoMetrica="Impressões"
                numerosMetrica="88K" />
            <MetricasUmDefault
                textoMetrica="Stories"
                numerosMetrica="4K" />
        </div>


    );
}

export default ContainerUmMetricas;