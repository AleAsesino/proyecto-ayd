import React from 'react'
import {useNavigate,Link} from 'react-router-dom'
const Barra_NavOpcion = () => {
  
  
  
  return (
    <>
        <div className='absolute bg-[#151515] hidden group-hover:block '>
              <span className=" ">
                  
                  
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
                    <Link to='/Problemas/problem1' className='text-[16px] text-[#ffffff] inria-serif-bold px-2 hover:text-[#4871AF] cursor-pointer'>Planteamiento</Link>
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
                    <Link to='/Problemas/problem2' className='text-[16px] text-[#ffffff] inria-serif-bold px-2 hover:text-[#4871AF] cursor-pointer'>Árbol</Link>
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
                    <Link to='/Problemas/problem3' className='text-[16px] text-[#ffffff] inria-serif-bold px-2 hover:text-[#4871AF] cursor-pointer'>Formulación del problema</Link>
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
                    <Link to='/Problemas/problem4' className='text-[16px] text-[#ffffff] inria-serif-bold px-2 hover:text-[#4871AF] cursor-pointer'>Propósito del estudio</Link>
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
                    <Link to='/Problemas/problem6' className='text-[16px] text-[#ffffff] inria-serif-bold px-2 hover:text-[#4871AF] cursor-pointer'>Planificación</Link>
                  </div>
                  
                  
                  
              </span>
        </div>
    </>
  )
}

export default Barra_NavOpcion
