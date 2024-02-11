import { useState } from "react";
import Banner from "./componentes/Banner/Banner";
import Formulario from "./componentes/Formulario";
import Time from "./componentes/Time";
import Rodape from "./componentes/rodape/index.js";

function App() {
  const times = [

    {
      nome:'Front End',
      corPrimaria:'#D9F7E9',
      corSecundaria:'#57C278',
    },
    {
      nome:'Design',
      corPrimaria:'#E8F8FF',
      corSecundaria:'#82CFFA',
    },
    {
      nome:'Back End',
      corPrimaria:'#F0F8E2',
      corSecundaria:'#A6D157',
    },
    {
      nome:'Mobile',
      corPrimaria:'#FDE7E8',
      corSecundaria:'#E06B69',
    },
    {
      nome:'Gestão',
      corPrimaria:'#FAE9F5',
      corSecundaria:'#DB6EBF',
    },
  ]

  const [colaboradores,setColaboradores] = useState([])

  const aoAdicionado = (colaborador) => {
    
    setColaboradores([...colaboradores,colaborador])
  }
  return (
    <div className="App">
      <Banner />
      <Formulario times={times.map(time => time.nome)} aoColaboradorCadastrado={colaborador => aoAdicionado(colaborador)}/>
      {times.map(time => <Time
      nome={time.nome}
      key={time.nome}
      corPrimaria={time.corPrimaria}
      corSecundaria={time.corSecundaria}
      colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
      />)}
      <Rodape/>
    </div>
  );
}

export default App;
