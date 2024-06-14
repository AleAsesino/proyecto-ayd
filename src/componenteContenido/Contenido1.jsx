import React from 'react'
import Barra_navegacionV2_1 from '../component/Barra_navegacionV2_1'
import Titulo from './Titulo';
import Introduccion from './Introduccion';
import Antecedentes from './Antecedentes';
import Footer from '../component/Footer';
const Contenido1 = () => {
  return (
    <div className='flex flex-col'>
        {/*Botton de ventana para cambio

        */}
        <Barra_navegacionV2_1 ruta={'Inicio'}/>
        <Titulo/>      
        <Footer/>
    </div>
  )
}

export default Contenido1
