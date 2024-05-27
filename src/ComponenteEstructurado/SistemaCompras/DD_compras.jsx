import React from 'react'
import Barra_navegacionV2 from '../../component/Barra_navegacionV2'
const DD_compras = () => {
  return (
    <>
        <Barra_navegacionV2 ruta={'A&D_Estructurado'}/>
        <div className='w-full h-screen'>
            <div className='w-full bg-[#0A192E] flex pb-40 place-content-center'>
                <div className='  componenteContenido_controller_Intro_Ante_Estructurado pt-40'>
                    <h1 className='text-white text-[24px] p-2'>Diccionario de datos</h1>
                    <hr className=' border-gray-50'/>

                    <h1 className='text-white text-[24px] p-2'>Nivel 1</h1>
                    <hr className=' border-gray-50'/>
                    

                    
                    
                

                </div>
            </div>
        </div> 
    </>
  )
}

export default DD_compras
