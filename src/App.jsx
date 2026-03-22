import { useState } from 'react'
import './App.css'
import Navbar from './Navbar'
import FotoInicio from './FotoInicio'
import BotonInicio from './BotonInicio'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>

      <div className='main'>
        <section className='inicio'>
          <div className='descInicial'>
            <div className='nomApe'>
              <p className='nombre'>Javier</p>
              <p className='apellidos'>González Rodríguez</p>
            </div>
            <div className='descripcion'>
              <p>Hola, soy estudiante de tercer año de ingeniería informática👨‍🎓, en la Universidad de Jaén🫒. Además estoy estudiando ciberseguridad🛡️ por mi cuenta, preparándome para la certificación eJPTv2</p>
            </div>
          </div>

          <div className='foto'>
            <FotoInicio/>
          </div>
        </section>
        <BotonInicio/>
      </div>
    </>
  )
}

export default App
