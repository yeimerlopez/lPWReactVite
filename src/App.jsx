import './App.css';
import Lenguaje from './componentes/lenguajes';
import LenguajesBase from './datos/lenguajesBD';

function App() {

  const lenguajesBaseSimulacion = LenguajesBase.map((variableLenguaje) => {
    return <Lenguaje nombre={variableLenguaje.nombre} descripcion={variableLenguaje.descripcion} />
  })

  return (
    <div className="App">
      <h1>Montando Componentes REACT  utilizando vite</h1>
      <div className='contenedorLenguaje'>
        {lenguajesBaseSimulacion}
      </div>
    </div>
  )
}
export default App
