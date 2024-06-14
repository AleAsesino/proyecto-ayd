import React from 'react'
import ImgInv from '../../assets/SubSistemaInv.png'
import Barra_navegacionV2 from '../../component/Barra_navegacionV2'
const MA_Inventario = () => {
  return (
    <>
        <Barra_navegacionV2 ruta={'A&D_Estructurado'}/>
        <div className=''>
            <div className='w-full h-screen bg-[#0A192E] flex pb-40 place-content-center'>
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


                   
                
                    
                

                </div>
            </div>
        </div> 
        
    </>
  )
}

export default MA_Inventario
