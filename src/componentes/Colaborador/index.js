import './colaborador.css'

const Colaborador = (props) =>{
    return(
        <div className="colaborador">
            <div className='cabecalho' style={{backgroundColor:props.cor}} >
                <img src={props.imagem}/>
            </div>
           
            <div className='rodape'>
                <h4>{props.nome}</h4>
                <h5>{props.cargo}</h5>
            </div>
        </div>
    )
}
export default Colaborador