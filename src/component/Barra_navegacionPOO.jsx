import {useState} from 'react';
import {useNavigate,Link} from 'react-router-dom'

import imagenLogo from '../assets/logoHechopng.png';
import PaginaIntro from '../component2/PaginaIntro';
import PaginaIntroP from '../component2/PaginaIntroP';
import Barra_NavOpcionPOO from './Barra_NavOpcionPOO';
function Barra_navegacionPOO({ruta}) {
  const enrutador = useNavigate();
  const activarP =()=>{
   enrutador('/proyecto-ayd');
  }
  const activarP1 =()=>{
    enrutador('/AYDOO');
  }

  return (
    <div>
      
      <div className='z-10 flex bg-bg-barraNavegacion p-5 items-center fixed w-full bg-[#1C1C1C]' >
        <img src={imagenLogo} alt="" className="w-16 h-16 ml-16" />
      
        <h1 className="text-[32px] letraCustomGradient ml-6 inria-serif-bold cursor-pointer" onClick={activarP}>
          FullStock
        </h1>
        <svg width="32" height="32" viewBox="0 0 22 27" fill="none" xmlns="http://www.w3.org/2000/svg" className='ml-4'>
          <path d="M21.9999 13.5001L0.249884 26.0575V0.942723L21.9999 13.5001Z" fill="#B5B436"/>
        </svg>
        <h1 className="text-[32px] text-white ml-6 inria-serif-bold cursor-pointer" onClick={activarP1}>
          {ruta}
        </h1>
        <div className='w-full  flex flex-row place-content-end pr-[16%]'>
          <h1 className=" text-[24px] text-[#A0A0A0] px-10 group inria-serif-bold cursor-pointer">
            Contenido
            <Barra_NavOpcionPOO nombre={'Sistemas'} ruta1={'/InvPOO'} ruta2={'/InvCUN'} ruta3={'/InvEx'} ruta4={'/ComprasPOO'} ruta5={'/ComprasCUN'} ruta6={'/ComprasEx'}/>
          </h1>
        </div>
        
      </div>
      
        
    </div>
    
  )
}

export default Barra_navegacionPOO