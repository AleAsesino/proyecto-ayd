import React from 'react'
import Barra_navegacion from '../component/Barra_navegacion'
import Titulo from './Titulo';
import Introduccion from './Introduccion';
import Antecedentes from './Antecedentes';
import Footer from '../component/Footer';
const Contenido1 = () => {
  return (
    <div className='flex flex-col'>
        {/*Botton de ventana para cambio

        */}
        <Barra_navegacion ruta={'Inicio'}/>
        <Titulo/>
        <Introduccion/>
        <Antecedentes />
        <Footer/>
    </div>
  )
}

export default Contenido1
