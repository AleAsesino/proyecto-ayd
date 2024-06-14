import React from 'react'
import ImgInv from '../../assets/SubSistemaInv.png'
import Barra_navegacionV2 from '../../component/Barra_navegacionV2'
const MA_compras3 = () => {
  return (
    <>
        <Barra_navegacionV2 ruta={'A&D_Estructurado'}/>
        <div className=''>
            <div className='w-full h-screen bg-[#0A192E] flex pb-40 place-content-center'>
                <div className='  componenteContenido_controller_Intro_Ante_Estructurado pt-40'>
                    
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

export default MA_compras3
