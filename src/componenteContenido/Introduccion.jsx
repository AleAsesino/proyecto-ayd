import React from 'react'
import Barra_navegacionV2_1 from '../component/Barra_navegacionV2_1'
const Introduccion = () => {
  return (
    <div>
      <Barra_navegacionV2_1 ruta={'Inicio'}/>
      <div className='w-full bg-[#0A192E] flex place-content-center h-screen items-center'>
        <div className='  componenteContenido_controller_Intro_Ante'>
            <h1 className='text-white text-[24px] p-2 inria-serif-bold'>1. Introducción</h1>
            <hr className=' border-gray-50'/>



            <h1 className='text-white text-[32px] p-2 inria-serif-bold'>¿Cuál es nuestro proyecto?</h1>
            <h1 className='text-[#B1BACC] text-[20px] p-5 bg-[#172945] mb-14 inria-serif-regular'>
                            El proyecto consiste en crear un sistema para administrar un supermercado,
                            hoy en dia los consumidores o clientes necesitan a su alcance productos
                            por lo cual nosotros entramos en este tema.
            </h1>



            <h1 className='text-white text-[32px] p-2 inria-serif-bold'>Objetivos del proyecto </h1>
            <h1 className='text-[#B1BACC] text-[20px] p-5 bg-[#172945] mb-14 inria-serif-regular'>
                            El sistema en el que trabajaremos se centra en el inventario y compras para generar la máxima 
                            impresión a los clientes, entregando una buena experiencia y abarcando problemas internos que 
                            proponemos dar solución.
            </h1>

        </div>
      </div>
    </div>
    
  )
}

export default Introduccion
