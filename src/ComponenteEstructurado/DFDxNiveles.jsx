import React from 'react'
import Barra_navegacionV2 from '../component/Barra_navegacionV2'





import ImgInv from '../assets/SubSistemaInv.png'
import ImgInvG0 from '../assets/subsistemaInventario.png'
import ImgInvG1 from '../assets/subsistemaInventarioN2G1.png'



import ImgRRHH from '../assets/subsistemaRRHH.png'
import ImgRRHHG0 from '../assets/subsistemaRRHHG0.png'
import ImgRRHHG1 from '../assets/subsistemaRRHHG2.png'
import ImgRRHHG2 from '../assets/subsistemaRRHHG3.png'
import ImgRRHHG3 from '../assets/subsistemaRRHHG4.png'



import ImgSC from '../assets/SC.png'
import ImgSCG0 from '../assets/SCG0.png'
import ImgSCG1 from '../assets/SCG1.png'
import ImgSCG2 from '../assets/SCG2.png'

const DFDxNiveles = () => {
  return (
    <>
      <Barra_navegacionV2 ruta={'A&D_Estructurado'}/>
      <div className='w-full h-screen bg-[#0A192E] flex items-center place-content-center'>
        <span className=''>
          <h1 className="text-[#B5B436] text-[96px] leading-normal inria-serif-bold">Analisis y Diseño Estructurado</h1>
          <h1 className="text-[#9492D2] text-[32px] leading-none inria-serif-bold">Modelo Ambiental y Estructurado</h1>
        </span>
      </div> 
      {/*=======================contenido==========================*/}
      <div className='w-full h-screen bg-slate-100'>
        <div className='w-full bg-[#0A192E] flex pb-40 place-content-center'>
          <div className='  componenteContenido_controller_Intro_Ante'>
              <h1 className='text-white text-[24px] p-2'>1. Modelo Ambiental</h1>
              <hr className=' border-gray-50'/>
              Null


              <h1 className='text-white text-[32px] p-2'>SubSistema de Inventario</h1>
              <h1 className='text-[#B1BACC] text-[20px] p-5 bg-[#172945] mb-14'>
                                El sistema de supermercado debe tener un sistema propio, enfocado al inventario,
                                para la gestión de productos entrantes, para eso deben primero ser verificados
                                y reclamados a tiempos si el producto esta dañado, tambien se deber hacer seguimiento
                                a los productos y precios con los que se adquiere.
              </h1>
              <img src={ImgInv}/>
              <img src={ImgInvG0}/>
              <img src={ImgInvG1}/>

              <h1 className='text-white text-[32px] p-2'>SubSistema de recursos Humanos </h1>
              <h1 className='text-[#B1BACC] text-[20px] p-5 bg-[#172945] mb-14'>
                              Sin datos
              </h1>
              <img src={ImgRRHH}/>
              <img src={ImgRRHHG0}/>
              <img src={ImgRRHHG1}/>
              <img src={ImgRRHHG2}/>
              <img src={ImgRRHHG3}/>
              
              <h1 className='text-white text-[32px] p-2'>SubSistema de compras </h1>
              <h1 className='text-[#B1BACC] text-[20px] p-5 bg-[#172945] mb-14'>
                                El propósito del Subsistema de Compras es proporcionar una plataforma robusta y
                                eficiente para la adquisición de bienes y servicios necesarios para el funcionamiento
                                óptimo de la organización. Este subsistema pretende asegurar que todos los procesos
                                de compra se realicen transparentes, económicas y alineados con las metas
                                estratégicas de la empresa, fomentando relaciones sólidas con proveedores y
                                garantizando la calidad y disponibilidad de los recursos necesarios.
              </h1>
              <img src={ImgSC}/>
              <img src={ImgSCG0}/>
              <img src={ImgSCG1}/>
              <img src={ImgSCG2}/>

          </div>
        </div>
      </div> 
    </>
  )
}

export default DFDxNiveles
