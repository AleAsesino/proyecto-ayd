import React from 'react'
import {useNavigate} from 'react-router-dom'
const Barra_NavOpcion = ({nombre, rutaMA, rutaDFDxN, rutaDD}) => {
  const enrutador = useNavigate();
  const activarMA =()=>{
   enrutador(rutaMA);
  }
  const activarDD =()=>{
    enrutador(rutaDD);
  }
  const activarDFDxN =()=>{
    enrutador(rutaDFDxN);
  }
  
  
  return (
    <>
        <div className='absolute bg-[#151515] hidden group-hover:block p-10 '>
              <span className=" ">
                  <h1 className='text-[24px] text-[#6EAAB7] inria-serif-bold'>{nombre}</h1>
                  <h1 className='text-[14px] text-[#DEDEDE] inria-serif-bold'>Modelo Ambiental</h1>
                  <div className='flex flex-row pl-6 py-2 group'>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_298_58)">
                    <path d="M4.28564 8.5714V2.5714C4.28564 2.11674 4.46626 1.68071 4.78774 1.35922C5.10924 1.03773 5.54527 0.857117 5.99993 0.857117H17.1428L23.1428 6.85712V21.4285C23.1428 21.8832 22.9621 22.3193 22.6407 22.6407C22.3192 22.9621 21.8831 23.1428 21.4285 23.1428H12.8571" stroke="#FF5151" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M6 12.8571V23.1428" stroke="#FF5151" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M0.857178 18H11.1429" stroke="#FF5151" stroke-linecap="round" stroke-linejoin="round"/>
                    </g>
                    <defs>
                    <clipPath id="clip0_298_58">
                    <path d="M0 0H24V12C24 18.6274 18.6274 24 12 24V24C5.37258 24 0 18.6274 0 12V0Z" fill="white"/>
                    </clipPath>
                    </defs>
                    </svg>
                    <h1 className='text-[16px] text-[#ffffff] inria-serif-bold px-2 hover:text-[#4871AF] cursor-pointer' onClick={activarMA}>Declaración de propósitos</h1>
                  </div>
                  <div className='flex flex-row pl-6 py-2 group'>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_298_44)">
                    <path d="M21.4286 0.857117H2.57146C1.62469 0.857117 0.857178 1.62463 0.857178 2.5714V16.2857C0.857178 17.2325 1.62469 18 2.57146 18H21.4286C22.3754 18 23.1429 17.2325 23.1429 16.2857V2.5714C23.1429 1.62463 22.3754 0.857117 21.4286 0.857117Z" stroke="#E57EFF" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M0.857178 6H23.1429" stroke="#E57EFF" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M12 18V23.1429" stroke="#E57EFF" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M9.4285 18L4.28564 23.1429" stroke="#E57EFF" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M14.5715 18L19.7144 23.1429" stroke="#E57EFF" stroke-linecap="round" stroke-linejoin="round"/>
                    </g>
                    <defs>
                    <clipPath id="clip0_298_44">
                    <path d="M0 0H24V12C24 18.6274 18.6274 24 12 24V24C5.37258 24 0 18.6274 0 12V0Z" fill="white"/>
                    </clipPath>
                    </defs>
                    </svg>
                    <h1 className='text-[16px] text-[#ffffff] inria-serif-bold px-2 hover:text-[#4871AF] cursor-pointer' onClick={activarMA}>Diagrama de contexto</h1>
                  </div>
                  
                  <div className='flex flex-row pl-6 py-2 group'>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.5715 0.857117H9.42864C8.48188 0.857117 7.71436 1.62463 7.71436 2.5714V3.42855C7.71436 4.37531 8.48188 5.14283 9.42864 5.14283H14.5715C15.5183 5.14283 16.2858 4.37531 16.2858 3.42855V2.5714C16.2858 1.62463 15.5183 0.857117 14.5715 0.857117Z" stroke="#4AA543" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M16.7143 2.57141H19.2857C19.7403 2.57141 20.1765 2.75203 20.4979 3.07351C20.8193 3.39501 21 3.83103 21 4.2857V21.4286C21 21.8832 20.8193 22.3193 20.4979 22.6407C20.1765 22.9622 19.7403 23.1428 19.2857 23.1428H4.71429C4.25962 23.1428 3.82359 22.9622 3.5021 22.6407C3.18062 22.3193 3 21.8832 3 21.4286V4.2857C3 3.83103 3.18062 3.39501 3.5021 3.07351C3.82359 2.75203 4.25962 2.57141 4.71429 2.57141H7.28571" stroke="#4AA543" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M8.57153 15.4286L11.143 17.1428L16.2858 10.2857" stroke="#4AA543" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <h1 className='text-[16px] text-[#ffffff] inria-serif-bold px-2 hover:text-[#4871AF] cursor-pointer' onClick={activarMA}>Lista de Acontecimientos</h1>
                  </div>


                  <h1 className='text-[14px] text-[#DEDEDE] inria-serif-bold'>Modelo Comportamiento</h1>
                  <div className='flex flex-row pl-6 py-2 group'>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21.4287 2.57141H11.143C10.1962 2.57141 9.42871 3.33893 9.42871 4.2857V11.1428C9.42871 12.0896 10.1962 12.8571 11.143 12.8571H21.4287C22.3755 12.8571 23.143 12.0896 23.143 11.1428V4.2857C23.143 3.33893 22.3755 2.57141 21.4287 2.57141Z" stroke="#EDFF80" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M18.8571 17.1429H6.85711C6.40245 17.1429 5.96642 16.9623 5.64492 16.6408C5.32344 16.3193 5.14282 15.8833 5.14282 15.4286V6.85718" stroke="#EDFF80" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M15.4286 21.4285H2.57146C2.1168 21.4285 1.68077 21.2478 1.35928 20.9264C1.03779 20.605 0.857178 20.1688 0.857178 19.7142V10.2856" stroke="#EDFF80" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <h1 className='text-[16px] text-[#ffffff] inria-serif-bold px-2 hover:text-[#4871AF] cursor-pointer' onClick={activarDFDxN}>DFD x Niveles</h1>
                  </div>
                  <div className='flex flex-row pl-6 py-2 group'>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_298_72)">
                    <path d="M5.14282 8.57146V2.57146C5.14282 2.1168 5.32344 1.68077 5.64492 1.35928C5.96642 1.03779 6.40245 0.857178 6.85711 0.857178H21.4285C21.8832 0.857178 22.3193 1.03779 22.6407 1.35928C22.9621 1.68077 23.1428 2.1168 23.1428 2.57146V16.2857C23.1428 16.7404 22.9621 17.1765 22.6407 17.4979C22.3193 17.8193 21.8832 18 21.4285 18H18.8571" stroke="#FFB084" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M5.14282 6H23.1428" stroke="#FFB084" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M12.8572 12.8572H2.57146C1.62469 12.8572 0.857178 13.6247 0.857178 14.5715V21.4286C0.857178 22.3754 1.62469 23.1429 2.57146 23.1429H12.8572C13.8039 23.1429 14.5715 22.3754 14.5715 21.4286V14.5715C14.5715 13.6247 13.8039 12.8572 12.8572 12.8572Z" stroke="#FFB084" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M0.857178 17.1429H14.5715" stroke="#FFB084" stroke-linecap="round" stroke-linejoin="round"/>
                    </g>
                    <defs>
                    <clipPath id="clip0_298_72">
                    <path d="M0 0H24V12C24 18.6274 18.6274 24 12 24V24C5.37258 24 0 18.6274 0 12V0Z" fill="white"/>
                    </clipPath>
                    </defs>
                    </svg>
                    <h1 className='text-[16px] text-[#ffffff] inria-serif-bold px-2 hover:text-[#4871AF] cursor-pointer'>DERE</h1>
                  </div>
                  <div className='flex flex-row pl-6 py-2 group'>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21.4287 23.1429H5.14296C4.46098 23.1429 3.80692 22.872 3.32469 22.3898C2.84246 21.9076 2.57153 21.2534 2.57153 20.5715C2.57153 19.8895 2.84246 19.2353 3.32469 18.7531C3.80692 18.2709 4.46098 18 5.14296 18H19.7144C20.169 18 20.6051 17.8193 20.9266 17.4979C21.248 17.1765 21.4287 16.7404 21.4287 16.2857V2.57146C21.4287 2.1168 21.248 1.68077 20.9266 1.35928C20.6051 1.03779 20.169 0.857178 19.7144 0.857178H5.14296C4.47269 0.85694 3.82882 1.11842 3.34852 1.58593C2.86819 2.05344 2.58941 2.69001 2.57153 3.36004V20.5029" stroke="#AEFFC0" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M19.7144 18V23.1429" stroke="#AEFFC0" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M13.8027 8.57483H17.7713L13.5547 14.5278H18.0194" stroke="#AEFFC0" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M6.02026 10.261L7.84773 4.77861C7.94141 4.49755 8.20442 4.30798 8.50068 4.30798C8.79694 4.30798 9.05997 4.49755 9.15364 4.77861L10.9811 10.261M6.6817 8.27666H10.3197" stroke="#AEFFC0" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <h1 className='text-[16px] text-[#ffffff] inria-serif-bold px-2 hover:text-[#4871AF] cursor-pointer' onClick={activarDD}>Diccionario de datos</h1>
                  </div>
                  <div className='flex flex-row pl-6 py-2'>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.7142 0.857178V9.42861H19.7142L10.2856 23.1429V14.5715H4.28564L13.7142 0.857178Z" stroke="#C892FF" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <h1 className='text-[16px] text-[#ffffff] inria-serif-bold px-2 hover:text-[#4871AF] cursor-pointer'>Diagrama de transmisión de datos</h1>
                  </div>
                  
                  
              </span>
        </div>
    </>
  )
}

export default Barra_NavOpcion
