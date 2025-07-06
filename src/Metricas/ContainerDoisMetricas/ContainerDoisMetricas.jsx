import MetricasDoisDefault from "./MetricasDoisDefault/MetricasDoisDefault.jsx";
import style from "./ContainerDoisMetricas.module.css";

const ContainerDoisMetricas = () => {
    return (
        <div className={style.containerDoisMetricas}>
            <MetricasDoisDefault
                textoMetrica="Uberlândia"
                numerosMetrica={76} />
            
            {/* Exemplo de como você pode criar a métrica "Mulher" */}
            <MetricasDoisDefault
                textoMetrica="Mulher"
                numerosMetrica={75} />
        </div>
    );
}

export default ContainerDoisMetricas;