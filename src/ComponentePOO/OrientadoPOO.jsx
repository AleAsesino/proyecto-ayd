import React from 'react'
import Barra_navegacionPOO from '../component/Barra_navegacionPOO'
const OrientadoPOO = () => {
  return (
    <div>
        <Barra_navegacionPOO ruta={'A&D_Orientado_a_objetos'}/>
        <div className='w-full h-screen bg-[#0A192E] flex flex-col items-center place-content-center p-[10%]'>
            <span>
                <h1 className=' text-[#B5B436] text-[90px] inria-serif-bold'>Análisis y diseño orientado a objetos</h1>
                <h1 className=' text-[#9492D2] text-[32px] inria-serif-bold'>Modelado y diseño</h1>
            </span>
        </div>
    </div>
  )
}

export default OrientadoPOO
