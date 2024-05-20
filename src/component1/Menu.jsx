import React from 'react'
import img1 from '../assets/logoHechopng.png'
import {useNavigate} from 'react-router-dom'
const Menu = () => {
    const enrutador = useNavigate();
    const Activar = ()=>{
        
        enrutador('/Inicio');
    }
    const ActivarProblemas = ()=>{
        enrutador('/Problemas');
    }

  return (
    <div className='flex h-screen w-full  md:flex-col lg:flex-row '>
        <div className=" basis-1/2">


            <div className=" h-[50%] flex">


                <div onClick={Activar} className="intro-color-custom1 basis-1/2 flex flex-col items-center place-content-center gap-5 relative">
                    <span>
                        <svg width="156" height="156" viewBox="0 0 156 156" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M150.429 77.3314C150.44 75.7848 150.128 74.2529 149.514 72.8333C148.9 71.4137 147.997 70.1374 146.863 69.0857L78.0002 5.57141L9.13738 69.0857C8.00332 70.1374 7.10061 71.4137 6.48672 72.8333C5.87282 74.2529 5.5612 75.7848 5.57167 77.3314V139.286C5.57167 142.241 6.74564 145.076 8.83533 147.165C10.925 149.254 13.7593 150.429 16.7145 150.429H139.286C142.241 150.429 145.076 149.254 147.165 147.165C149.255 145.076 150.429 142.241 150.429 139.286V77.3314Z" stroke="#B5B436"/>
                        <path d="M78 150.429V105.857" stroke="#B5B436"/>
                        </svg>
                    </span>
                
                    <span className="cajaIntro">
                        <h1 className="cajaIntroTitulo2">Inicio</h1>
                        <p className="text-xl text-[#FFFFFF]">Introducción y antecedentes</p>
                    </span>
                </div>


                <div onClick={ActivarProblemas} className="intro-color-custom2 basis-1/2 flex flex-col items-center place-content-center gap-5 relative" >

                    <span>
                        <svg width="156" height="156" viewBox="0 0 156 156" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M87.9175 11.6989C86.9824 9.87366 85.5617 8.3419 83.8119 7.2723C82.0621 6.20269 80.0511 5.63672 78.0003 5.63672C75.9495 5.63672 73.9384 6.20269 72.1887 7.2723C70.4389 8.3419 69.0182 9.87366 68.0832 11.6989L6.79744 134.27C5.94267 135.966 5.53571 137.853 5.6152 139.751C5.6947 141.649 6.25801 143.494 7.25165 145.113C8.24528 146.732 9.63626 148.071 11.2925 149C12.9487 149.93 14.8151 150.422 16.7146 150.427H139.286C141.186 150.422 143.052 149.93 144.708 149C146.365 148.071 147.755 146.732 148.749 145.113C149.742 143.494 150.306 141.649 150.385 139.751C150.465 137.853 150.058 135.966 149.203 134.27L87.9175 11.6989Z" stroke="#B5B436"/>
                        <path d="M78 55.7143V91.9286" stroke="#B5B436"/>
                        <path d="M78 122.571C76.4615 122.571 75.2143 121.325 75.2143 119.786C75.2143 118.247 76.4615 117 78 117" stroke="#B5B436"/>
                        <path d="M78 122.571C79.5385 122.571 80.7857 121.325 80.7857 119.786C80.7857 118.247 79.5385 117 78 117" stroke="#B5B436"/>
                        </svg>
                    </span>
                

                    <span className="cajaIntro">
                        <h1 className="cajaIntroTitulo2">Problemas</h1>
                        <p className="text-xl text-[#FFFFFF]">Planteamiento y formulación</p>
                    </span>
                </div>



            </div>



            <div className=" h-[50%] flex">
                <div className="intro-color-custom2 basis-1/2 flex flex-col items-center place-content-center gap-5 relative group cajaref1">

                    <span>
                        <svg width="156" height="156" viewBox="0 0 156 156" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M41.7857 61.2857V16.7143C41.7857 10.5603 46.7746 5.57143 52.9286 5.57143H103.071C109.225 5.57143 114.214 10.5603 114.214 16.7143V61.2857C114.214 67.4397 109.225 72.4286 103.071 72.4286H52.9286C46.7746 72.4286 41.7857 67.4397 41.7857 61.2857Z" stroke="#B5B436"/>
                        <path d="M78 72.4286V117" stroke="#B5B436"/>
                        <path d="M22.2857 117V105.857C22.2857 99.7032 27.2746 94.7143 33.4286 94.7143H122.571C128.726 94.7143 133.714 99.7032 133.714 105.857V117" stroke="#B5B436"/>
                        <path d="M5.57141 139.286V128.143C5.57141 121.989 10.5602 117 16.7143 117H27.8571C34.0111 117 39 121.989 39 128.143V139.286C39 145.44 34.0111 150.429 27.8571 150.429H16.7143C10.5602 150.429 5.57141 145.44 5.57141 139.286Z" stroke="#B5B436"/>
                        <path d="M61.2857 139.286V128.143C61.2857 121.989 66.2746 117 72.4286 117H83.5714C89.7254 117 94.7143 121.989 94.7143 128.143V139.286C94.7143 145.44 89.7254 150.429 83.5714 150.429H72.4286C66.2746 150.429 61.2857 145.44 61.2857 139.286Z" stroke="#B5B436"/>
                        <path d="M117 139.286V128.143C117 121.989 121.989 117 128.143 117H139.286C145.44 117 150.429 121.989 150.429 128.143V139.286C150.429 145.44 145.44 150.429 139.286 150.429H128.143C121.989 150.429 117 145.44 117 139.286Z" stroke="#B5B436"/>
                        </svg>
                    </span>
                    <div className="cajaIntroTitulo1 inria-">
                        <h1 className="colorTexto">Analisis</h1>
                        <h1 className="colorTexto">&</h1>
                        <h1 className="colorTexto">Diseño</h1>
                    </div>

                    <span className="cajaIntro">
                        <h1 className="cajaIntroTitulo2">Estructurado</h1>
                        <p className="text-xl text-[#FFFFFF]">Diagramas y Sistemas</p>
                    </span>
                </div>







                <div className="intro-color-custom1 basis-1/2 flex flex-col items-center place-content-center gap-5 relative group cajaref1">
                    <span>
                        <svg width="156" height="156" viewBox="0 0 156 156" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M33.4286 55.7143V16.7143C33.4286 13.759 34.6026 10.9248 36.6922 8.83509C38.7819 6.7454 41.6161 5.57143 44.5714 5.57143H139.286C142.241 5.57143 145.076 6.7454 147.165 8.83509C149.254 10.9248 150.429 13.759 150.429 16.7143V105.857C150.429 108.812 149.254 111.647 147.165 113.736C145.076 115.826 142.241 117 139.286 117H122.571" stroke="#B5B436"/>
                        <path d="M33.4286 39H150.429" stroke="#B5B436" />
                        <path d="M83.5714 83.5714H16.7143C10.5603 83.5714 5.57143 88.5603 5.57143 94.7143V139.286C5.57143 145.44 10.5603 150.429 16.7143 150.429H83.5714C89.7254 150.429 94.7143 145.44 94.7143 139.286V94.7143C94.7143 88.5603 89.7254 83.5714 83.5714 83.5714Z" stroke="#B5B436"/>
                        <path d="M5.57143 111.429H94.7143" stroke="#B5B436"/>
                        </svg>
                    </span>
                    <div className="cajaIntroTitulo1">
                        <h1 className="colorTexto">Analisis</h1>
                        <h1 className="colorTexto">&</h1>
                        <h1 className="colorTexto">Diseño</h1>
                    </div>


                    <span className="cajaIntro ">
                        <h1 className="cajaIntroTitulo2 leading-none">Orientado a Objetos</h1>
                        <p className="text-xl text-[#FFFFFF]">Modelo y diseño</p>
                    </span>
                </div>








            </div>


        </div>



        <div className="intro-color-cajaM basis-1/2 introContenedorPrincipal relative">
            
            <div className=" absolute bg-[#212f44ab] w-full h-screen">
                <div className='absolute  w-full h-screen flex flex-col items-center place-content-center'>

                    <h1 className=' text-white text-[64px] font-serif leading-none '>FullStock</h1>
                    <h1 className=' text-white font-serif'>CALIDAD PARA TU HOGAR</h1>

                    
                    <img src={img1} className='h-[350px] w-[350px]'></img>

                </div>
            </div>
            
        </div>
    </div>
  )
}
export default Menu
