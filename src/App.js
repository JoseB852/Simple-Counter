import './App.css';
import Counter from './componentes/Counter';

function App(props) {

  let numero = props.seconds.toString()
  let resta = 6 - numero.length
  let elementos = "";
  for (let i = 1; i <= resta; i++) {

    elementos = "0" + elementos


  }


  let ciclo = elementos + numero



  return (
    <div className="container">
      <div className='icono'><i class="fa-regular fa-clock"></i></div>
      {ciclo.split("").map(function (x) {




        return <Counter segundos={x} />;

      })}


    </div>
  )
}




export default App;
