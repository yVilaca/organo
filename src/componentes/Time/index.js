import Colaborador from '../Colaborador';
import './time.css'

const Time = (props) => {
    return(

        
        /* Verificar se é verdade -> */ props.colaboradores.length>0 &&
        <section className='time' style={{backgroundColor:props.corPrimaria}}>
            <h3 style={{borderColor: props.corSecundaria}}>{props.nome}</h3>
            <div className='listadecolaboradores' >
                {props.colaboradores.map(colaborador => <Colaborador key={colaborador.nome} nome={colaborador.nome} cargo={colaborador.cargo} imagem={colaborador.imagem} cor={props.corSecundaria}/>)}
            </div>
            
        </section>
    )
}
export default Time;