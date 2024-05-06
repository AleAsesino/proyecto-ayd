import React, { useEffect } from 'react';
import imagenFondo from '../assets/34793.jpg';
import { Link } from 'react-router-dom';
const PaginaIntrop = ({ setopen,setcaja}) => {
  useEffect(() => {
    // Deshabilitar el scroll de la página
    document.body.style.overflow = 'hidden';

    // Controlador de eventos de scroll para mantener la página arriba
    const handleScroll = () => {
      window.scrollTo(0, 0); // Scroll de vuelta al principio
    };

    // Agregar el controlador de eventos
    window.addEventListener('scroll', handleScroll);

    // Limpiar el efecto al desmontar el componente
    return () => {
      document.body.style.overflow = ''; // Restaurar el comportamiento de scroll normal
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // El segundo argumento [] asegura que este efecto solo se ejecute una vez al montar el componente

  const verificar = () => {
    console.log('cambio a true');
    setopen(true);
    setcaja();
  };

  return (
    <div className='relative w-full h-screen fondo_personalizado'>
      <div className="bg-[#ffffff5b] absolute h-screen w-full">
        <div className='absolute h-screen w-full flex items-center place-content-center'>

          {/* Botón de ventana para cambio */}
          <span className='absolute top-0 left-0 p-8' onClick={verificar}>
            <svg width="38" height="38" viewBox="0 0 47 47" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M45.5714 1L1 45.5714" stroke="white"/>
              <path d="M1 1L45.5714 45.5714" stroke="white"/>
            </svg>
          </span>
          {/*=================================================*/}
          <div className='w-full  flex-col '>
            <div className='  flex place-content-center'>
              <span className=' text-[#fff] font-serif w-[40%] p-10'>
                <h1 className='text-[34px] pl-5'>Planteamiento</h1>
                <hr className=' border-gray-50 pt-5 w-full'></hr>
                <h1 className='text-[24px] pl-14 pb-4'>Planteamiento del problema</h1>
                <h1 className='text-[24px] pl-14 pb-4'>Árbol de problemas</h1>
                <h1 className='text-[24px] pl-14 pb-4'>Formulación</h1>
              </span>
              <span className=' text-[#fff] font-serif w-[40%] p-10'>
                <h1 className='text-[34px] pl-5'>Planificación</h1>
                <hr className=' border-gray-50 pt-5 w-full'></hr>
                <h1 className='text-[24px] pl-14 pb-4'>Metodo, medios e intrumentos</h1>
                <h1 className='text-[24px] pl-14 pb-4'>Planificación de actividades</h1>            
              </span>
            </div>
            <div className='flex  ml-[15%] mr-[15%] place-content-end'>
              <div className=' text-[#fff] font-serif text-[24px]'>
                <Link to='/proyecto-ayd/'>
                  Volver al Principio
                </Link>
              </div>
            </div>

          </div>
          
          


           
        </div>
      </div>
    </div>
  );
};

export default PaginaIntrop;
