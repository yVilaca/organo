import "./rodape.css"

const Rodape = () =>{
    return(
        <div className="rodape1">
            <section className="redes">
                <a href="https://www.facebook.com/"><img src="/imagens/fb.png" alt=""/></a>
                <a href="https://www.instagram.com/lucas_vcp/"><img src="/imagens/ig.png" alt=""/></a>
                <a href="https://www.x.com/"><img src="/imagens/tw.png" alt=""/></a>
            </section>
            <img src="/imagens/logo.png" alt=""/>
            <h6>Desenvolvido por <span>Lucas Vilaça</span></h6>
        </div>
    );
}   
export default Rodape;