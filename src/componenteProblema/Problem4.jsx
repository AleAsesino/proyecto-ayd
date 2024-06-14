import React from 'react'
import Barra_navegacionV2 from '../component/Barra_navegacionV2_2';
const Problem4 = () => {
  return (
    <div>
      <Barra_navegacionV2 ruta={'Problemas'}/>
      <div className='w-full bg-[#0A192E] flex pt-28 pb-12 place-content-center'>
        <div className='  w-[60%]'>
            <h1 className='text-white text-[24px] p-2 inria-serif-bold'>4. Propósito del estudio</h1>
            <hr className=' border-gray-50 py-5'/>



            <h1 className="text-[32px] text-[#31D0C7] pl-3 inria-serif-bold">4.1. Análisis de la Experiencia del Cliente:</h1>
            <h1 className='text-[#B1BACC] text-[20px] p-6 bg-[#172945] mb-14 inria-serif-regular'>
              Evaluar la satisfacción del cliente con respecto a la disposición de productos, la facilidad de navegación por la tienda y la amabilidad del personal.<br/><br/>
              Medir el tiempo promedio de espera en las cajas y la percepción del cliente sobre la velocidad del proceso de pago.<br/><br/>
              Identificar oportunidades para mejorar la experiencia del cliente y fomentar la fidelidad a través de programas de recompensas o promociones.
            </h1>



            <h1 className="text-[32px] text-[#31D0C7] pl-3 inria-serif-bold">4.2. Gestión de Inventario:</h1>
            <h1 className='text-[#B1BACC] text-[20px] p-6 bg-[#172945] mb-14 inria-serif-regular'>
              Evaluar la precisión del sistema de seguimiento de inventario en términos de disponibilidad de productos en las estanterías y actualización de existencias.<br/><br/>
              Analizar la efectividad de las prácticas de reposición de productos para mantener niveles óptimos de stock y minimizar las pérdidas por productos vencidos o caducados.<br/><br/>
              Identificar áreas de mejora en la gestión de inventario, como la implementación de tecnologías de escaneo automático o la optimización de rutas de reposición.
            </h1>


            <h1 className="text-[32px] text-[#31D0C7] pl-3 inria-serif-bold">4.3. Eficiencia Operativa:</h1>
            <h1 className='text-[#B1BACC] text-[20px] p-6 bg-[#172945] mb-14 inria-serif-regular'>
              Evaluar la eficiencia del sistema de supermercado en términos de rapidez y precisión del proceso de cobro en cajas.<br/><br/>
              Analizar la disponibilidad de productos en las estanterías y la capacidad de respuesta del personal para satisfacer la demanda del cliente.<br/><br/>
              Identificar cuellos de botella en los procesos operativos y proponer medidas para mejorar la eficiencia, como la optimización de horarios de personal o la implementación de sistemas de gestión de colas.
            </h1>
        </div>




      </div>
    </div>
    
    
  )
}

export default Problem4
