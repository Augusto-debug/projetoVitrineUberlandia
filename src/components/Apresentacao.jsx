import style from './Apresentacao.module.css';

const Apresentacao = ({tituloSecao, paragrafoSecao}) => {
    return (
        <div className={style.apresentacao}>
                <h1>{tituloSecao}</h1>
                <p>{paragrafoSecao}</p>
        </div>
    );
}

export default Apresentacao;