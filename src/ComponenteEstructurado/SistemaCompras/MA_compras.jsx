import React from 'react'
import ImgInv from '../../assets/SubSistemaInv.png'
import Barra_navegacionV2 from '../../component/Barra_navegacionV2'
const MA_compras = () => {
  return (
    <>
        <Barra_navegacionV2 ruta={'A&D_Estructurado'}/>
        <div className='w-full h-screen'>
            <div className='w-full bg-[#0A192E] flex pb-40 place-content-center'>
                <div className='  componenteContenido_controller_Intro_Ante_Estructurado pt-40'>
                    <h1 className='text-white text-[24px] p-2'>1. Declaración de propósitos</h1>
                    <hr className=' border-gray-50'/>
                    <h1 className='text-[#B1BACC] text-[20px] p-5 bg-[#172945] mb-14 m-5'>
                                    El propósito del Subsistema de Compras es proporcionar una plataforma robusta y eficiente para la adquisición de
                                    bienes y servicios necesarios para el funcionamiento óptimo de la organización. Este subsistema pretende asegurar 
                                    que todos los procesos de compra se realicen transparentes, económicas y alineados con las metas estratégicas de 
                                    la empresa, fomentando relaciones sólidas con proveedores y garantizando la calidad y disponibilidad de los 
                                    recursos necesarios.     
                    </h1>  


                    <h1 className='text-white text-[24px] p-2'>2. Declaración de propósitos</h1>
                    <hr className=' border-gray-50'/>
                    <div className='p-5'>
                      <img className='bg-[#172945]' src={ImgInv}/>
                    </div>
                    
                    <h1 className='text-white text-[24px] p-2'>3. Lista de acontecimientos</h1>
                    <hr className=' border-gray-50'/>
                    <ul className='bg-[#172945] p-5 m-5'>
                      <li className="text-[#B1BACC] text-[20px] ">- Gestion Compra</li>
                      <li className="text-[#B1BACC] text-[20px] ">- Envio Producto</li>
                      <li className="text-[#B1BACC] text-[20px] ">- Seguimiento-Compra</li>
                      <li className="text-[#B1BACC] text-[20px] ">- Informe-Cantidad</li>
                      <li className="text-[#B1BACC] text-[20px] ">- Informe-Costos</li>
                      <li className="text-[#B1BACC] text-[20px] ">- Analisis-Costos</li>
                      <li className="text-[#B1BACC] text-[20px] ">- Analisis-Eficiencia</li>
                      <li className="text-[#B1BACC] text-[20px] ">- Analisis-Rendimiento</li>
                    </ul>

                
                    
                

                </div>
            </div>
        </div> 
        
    </>
  )
}

export default MA_compras
