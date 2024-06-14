import React from 'react'
import Barra_navegacionV2Galeria from '../component/Barra_navegacionV2Galeria'
const Galeria = () => {
  return (
        <div>
            <Barra_navegacionV2Galeria ruta={'Galeria'}/>
            <div className='flex items-center place-content-center h-screen w-full bg-[#0A192E]'>
            <iframe width="860" height="515" src="https://www.youtube-nocookie.com/embed/-2suCyPpylg?si=NV91bvkvBJbpCTyx" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
    
        </div>
  )
}

export default Galeria
