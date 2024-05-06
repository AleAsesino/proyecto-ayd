import {useState} from 'react';
import imagenLogo from '../assets/logoHechopng.png';
import PaginaIntro from '../component2/PaginaIntro';
import PaginaIntroP from '../component2/PaginaIntroP';
function Barra_navegacion({ruta}) {
  const [open,setopen]=useState(true);
  const [caja,setcaja]=useState();
  


  const verificar =()=>{
    if(open & ruta=='Inicio') {

      console.log('entro a ini');
      setcaja(<PaginaIntro setopen={setopen} setcaja={setcaja}/>);
      setopen(false);
    }
    if(open & ruta=='Problemas'){
      console.log('entro a probl');
      setcaja(<PaginaIntroP setopen={setopen} setcaja={setcaja}/>);
      setopen(false);
    }
    
  };
  return (
    <div>
      
      <div className={`${open ? 'z-10 flex bg-bg-barraNavegacion p-5 items-center fixed w-full bg-[#1C1C1C]':' hidden'}`} >
        
        <button className="" onClick={verificar}>
          <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="ml-3">
          <path d="M3.42858 10.2857C4.37535 10.2857 5.14287 9.5182 5.14287 8.57143C5.14287 7.62467 4.37535 6.85715 3.42858 6.85715C2.48181 6.85715 1.71429 7.62467 1.71429 8.57143C1.71429 9.5182 2.48181 10.2857 3.42858 10.2857Z" stroke="white" />
          <path d="M15.4286 8.57144H46.2857" stroke="white"/>
          <path d="M3.42858 25.7143C4.37535 25.7143 5.14287 24.9468 5.14287 24C5.14287 23.0532 4.37535 22.2857 3.42858 22.2857C2.48181 22.2857 1.71429 23.0532 1.71429 24C1.71429 24.9468 2.48181 25.7143 3.42858 25.7143Z" stroke="white" />
          <path d="M15.4286 24H46.2857" stroke="white" />
          <path d="M3.42858 41.1429C4.37535 41.1429 5.14287 40.3752 5.14287 39.4286C5.14287 38.482 4.37535 37.7143 3.42858 37.7143C2.48181 37.7143 1.71429 38.482 1.71429 39.4286C1.71429 40.3752 2.48181 41.1429 3.42858 41.1429Z" stroke="white"/>
          <path d="M15.4286 39.4286H46.2857" stroke="white"/>
          </svg>
        </button>
        
        <img src={imagenLogo} alt="" className="w-16 h-16 ml-16" />
      
        <h1 className="text-[2.2rem] text-white font-[Inria-serif] font-bold ml-6">
          FullStock
        </h1>
        <svg width="32" height="32" viewBox="0 0 22 27" fill="none" xmlns="http://www.w3.org/2000/svg" className='ml-4'>
          <path d="M21.9999 13.5001L0.249884 26.0575V0.942723L21.9999 13.5001Z" fill="#B5B436"/>
        </svg>
        <h1 className="text-[2.2rem] text-white font-[Inria-serif] font-bold ml-6">
          {ruta}
        </h1>

        
      </div>
      <div className={`${open ? 'hidden':''}`}>
        {caja}
      </div>
        
    </div>
    
  )
}

export default Barra_navegacion