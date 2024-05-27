import React from 'react'
import ImgInv from '../../assets/SubSistemaInv.png'
import Barra_navegacionV2 from '../../component/Barra_navegacionV2'
const MA_Inventario = () => {
  return (
    <>
        <Barra_navegacionV2 ruta={'A&D_Estructurado'}/>
        <div className='w-full h-screen'>
            <div className='w-full bg-[#0A192E] flex pb-40 place-content-center'>
                <div className='  componenteContenido_controller_Intro_Ante_Estructurado pt-40'>
                    <h1 className='text-white text-[24px] p-2'>1. Declaración de propósitos</h1>
                    <hr className=' border-gray-50'/>
                    <h1 className='text-[#B1BACC] text-[20px] p-5 bg-[#172945] mb-14 m-5'>
                                    En el sistema de inventario del supermercado debe tener en cuenta, a los proveedores, un administrador y el almacén, 
                                    el almacén solo entran productos que son dados de alta para su guardado y posterior mente su venta, debemos tener en 
                                    cuenta que los productos pueden llegar íntegros lo que significa que estén en buenas condiciones, los productos que 
                                    estén dañados o falten deben ser reclamados a tiempo  y no llevados al almacén. El proveedor debe ser avisado por el 
                                    administrador asignado, para el reemplazo del producto y posterior mente su alta en el almacén.     
                    </h1>  


                    <h1 className='text-white text-[24px] p-2'>2. Declaración de propósitos</h1>
                    <hr className=' border-gray-50'/>
                    <div className='p-5'>
                      <img className='bg-[#172945]' src={ImgInv}/>
                    </div>
                    
                    <h1 className='text-white text-[24px] p-2'>3. Lista de acontecimientos</h1>
                    <hr className=' border-gray-50'/>
                    
                    <ul className='bg-[#172945] p-5 m-5'>
                      <li className="text-[#B1BACC] text-[20px] ">- Realizar el reclamo de un producto dañado.</li>
                      <li className="text-[#B1BACC] text-[20px] ">- Generar informe de productos subidos al almacén.</li>
                      <li className="text-[#B1BACC] text-[20px] ">- Inicia la verificación del estado de producto.</li>
                      <li className="text-[#B1BACC] text-[20px] ">- Realizar la alta del producto al almacén.</li>
                      <li className="text-[#B1BACC] text-[20px] ">- Revisión de posibles productos faltante según factura.</li>
                      <li className="text-[#B1BACC] text-[20px] ">- Revisión de precios de producto por mayor.</li>
                    </ul>

                
                    
                

                </div>
            </div>
        </div> 
        
    </>
  )
}

export default MA_Inventario
