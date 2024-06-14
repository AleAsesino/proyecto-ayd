import React from 'react'
import Barra_navegacionV2 from '../component/Barra_navegacionV2'





import ImgInv from '../assets/SubSistemaInv.png'
import ImgInvG0 from '../assets/subsistemaInventario.png'
import ImgInvG1 from '../assets/subsistemaInventarioN2G1.png'

import ImgGraf from '../assets/graficoSistem.png'


const DFDxNiveles = () => {
  return (
    <>

      <Barra_navegacionV2 ruta={'A&D_Estructurado'}/>
      <div className='w-full h-screen bg-[#0A192E] flex items-center place-content-center p-[10%]'>
        <span className=''>
          <h1 className="text-[#B5B436] text-[96px] leading-normal inria-serif-bold">Analisis y Diseño Estructurado</h1>
          <h1 className="text-[#9492D2] text-[32px] leading-none inria-serif-bold">Modelo ambiental y de comportamiento</h1>
        </span>
      </div> 
      {/*=======================contenido==========================*/}
      <div className='w-full h-screen bg-slate-100'>
        <div className='w-full bg-[#0A192E] flex pb-40 place-content-center'>
          <div className='  componenteContenido_controller_Intro_Ante_Estructurado'>
              


              <h1 className='text-white text-[32px] p-2'>Contexto del sistema de supermercado</h1>
              <h1 className='text-[#B1BACC] text-[20px] p-5 bg-[#172945] mb-14'>
                                          Para garantizar la eficiencia de un supermercado y satisfacer las necesidades del cliente, 
                                          es fundamental resolver tres áreas clave: recursos humanos, gestión de recursos 
                                          (productos y capital) y compras. Para ello, se deben implementar tres sistemas especializados 
                                          que aborden estos problemas de manera integral y eficaz.
              </h1>
              <img className='bg-[#172945]' src={ImgGraf}/>
              


          </div>
        </div>
      </div> 
    </>
  )
}

export default DFDxNiveles
