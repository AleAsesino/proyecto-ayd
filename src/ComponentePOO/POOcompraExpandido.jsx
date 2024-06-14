import React from 'react'
import Img from '../assets/CUcompras.jpg'
import Barra_navegacionPOO from '../component/Barra_navegacionPOO'
const POOcomprasExpandido = () => {
  return (
    <div>
      <Barra_navegacionPOO ruta={'A&D_Orientado_a_objetos'}/>
      <div className='w-full h-screen'>
            <div className='w-full bg-[#0A192E] flex pb-40 place-content-center'>
              
                <div className='  componenteContenido_controller_Intro_Ante_Estructurado pt-40'>
                    <h1 className='text-white text-[24px] p-2'>Nivel Expandido</h1>
                    <hr className=' border-gray-50'/>
                    <div className='p-5 flex flex-col gap-5'>
                      <div className='bg-[#17294557] p-5'>
                        <span className='flex gap-2'>
                          <h1 className="text-[#9492D2] text-[] text-2xl inria-serif-bold">Nombre del Caso de uso: </h1>
                          <h1 className='text-[#B1BACC] text-[] text-2xl inria-serif-regular'> Requisición de Producto</h1>
                        </span>
                        <span className='flex gap-2'>
                          <h1 className="text-[#9492D2] text-[] text-2xl inria-serif-bold">Actores: </h1>
                          <h1 className='text-[#B1BACC] text-[] text-2xl inria-serif-regular'> Solicitante (Primario)</h1>
                        </span>
                        <span className='flex gap-2'>
                          <h1 className="text-[#9492D2] text-[] text-2xl inria-serif-bold">Objetivo: </h1>
                          <h1 className='text-[#B1BACC] text-[] text-2xl inria-serif-regular'> Permitir a un solicitante requisitar un producto.</h1>
                        </span>
                        <span className='flex gap-2'>
                          <h1 className="text-[#9492D2] text-[] text-2xl inria-serif-bold">Resumen: </h1>
                          <h1 className='text-[#B1BACC] text-[] text-2xl inria-serif-regular'> El solicitante puede buscar y seleccionar productos para requisitar. El sistema recopila los datos del producto solicitado y genera una requisición.</h1>
                        </span>
                        <span className='flex gap-2'>
                          <h1 className="text-[#9492D2] text-[] text-2xl inria-serif-bold">Referencia cruzada: </h1>
                          <h1 className='text-[#B1BACC] text-[] text-2xl inria-serif-regular'>Tabla de Productos, Tabla de Requisiciones</h1>
                        </span>
                        <span className='flex flex-col gap-2'>
                          <h1 className="text-[#9492D2] text-[] text-2xl inria-serif-bold">Curso normal de eventos: </h1>
                          <ul className='text-[#B1BACC] text-[] text-2xl inria-serif-regular pl-5'>
                            <li>
                              <span className="text-[#6DAEC2] text-[] text-2xl inria-serif-bold">1.  Actor (Solicitante): </span>
                              <span className="text-[#B1BACC] text-[] text-2xl inria-serif-regular">Accede al sistema de biblioteca y selecciona la opción "Requisición de Producto".</span>
                            </li>
                            <li>
                              <span className="text-[#6DAEC2] text-[] text-2xl inria-serif-bold">2.	Sistema: </span>
                              <span className="text-[#B1BACC] text-[] text-2xl inria-serif-regular">Muestra el formulario de requisición de producto.</span>
                            </li>
                            <li>
                              <span className="text-[#6DAEC2] text-[] text-2xl inria-serif-bold">3.	Actor (Solicitante): </span>
                              <span className="text-[#B1BACC] text-[] text-2xl inria-serif-regular">Ingresa los datos necesarios del producto (nombre, descripción, cantidad, etc.).</span>
                            </li>
                            <li>
                              <span className="text-[#6DAEC2] text-[] text-2xl inria-serif-bold">4.	Sistema:</span>
                              <span className="text-[#B1BACC] text-[] text-2xl inria-serif-regular">Valida los datos ingresados.</span>
                            </li>
                            <li>
                              <span className="text-[#6DAEC2] text-[] text-2xl inria-serif-bold">5.	Sistema:</span>
                              <span className="text-[#B1BACC] text-[] text-2xl inria-serif-regular">Incluye "Datos de Productos" (subcaso de uso).</span>
                            </li>
                            <li>
                              <span className="text-[#6DAEC2] text-[] text-2xl inria-serif-bold">6.	Sistema:</span>
                              <span className="text-[#B1BACC] text-[] text-2xl inria-serif-regular">Guarda la requisición en la base de datos.</span>
                            </li>
                            <li>
                              <span className="text-[#6DAEC2] text-[] text-2xl inria-serif-bold">7.	Sistema:</span>
                              <span className="text-[#B1BACC] text-[] text-2xl inria-serif-regular">Notifica al solicitante que la requisición ha sido realizada exitosamente.</span>
                            </li>
                          </ul>
                        </span>
                        <span className='flex flex-col gap-2'>
                          <h1 className="text-[#9492D2] text-[] text-2xl inria-serif-bold">Curso normal externos: </h1>
                          <ul className='text-[#B1BACC] text-[] text-2xl inria-serif-regular pl-5'>
                            <li>
                              <span className="text-[#6DAEC2] text-[] text-2xl inria-serif-bold">•	Datos incompletos/erróneos: </span>
                              <span className="text-[#B1BACC] text-[] text-2xl inria-serif-regular">Si los datos del producto son insuficientes o incorrectos, el sistema indica los errores y solicita corrección.</span>
                            </li>
                            <li>
                              <span className="text-[#6DAEC2] text-[] text-2xl inria-serif-bold">•	Producto no disponible: </span>
                              <span className="text-[#B1BACC] text-[] text-2xl inria-serif-regular">Si el producto solicitado no está disponible en el inventario, el sistema notifica al solicitante y sugiere productos alternativos o permite hacer una solicitud especial.</span>
                            </li>
                            
                          </ul>
                        </span>
                                       
                      </div>






                      {/*otro */}
                      <div className='bg-[#17294557] p-5'>
                        <span className='flex gap-2'>
                          <h1 className="text-[#9492D2] text-[] text-2xl inria-serif-bold">Nombre del Caso de uso: </h1>
                          <h1 className='text-[#B1BACC] text-[] text-2xl inria-serif-regular'>Recepción de Producto</h1>
                        </span>
                        <span className='flex gap-2'>
                          <h1 className="text-[#9492D2] text-[] text-2xl inria-serif-bold">Actores: </h1>
                          <h1 className='text-[#B1BACC] text-[] text-2xl inria-serif-regular'>Administrador de Productos (Primario)</h1>
                        </span>
                        <span className='flex gap-2'>
                          <h1 className="text-[#9492D2] text-[] text-2xl inria-serif-bold">Objetivo: </h1>
                          <h1 className='text-[#B1BACC] text-[] text-2xl inria-serif-regular'>Registrar la recepción de un producto en el inventario de la biblioteca.</h1>
                        </span>
                        <span className='flex gap-2'>
                          <h1 className="text-[#9492D2] text-[] text-2xl inria-serif-bold">Resumen: </h1>
                          <h1 className='text-[#B1BACC] text-[] text-2xl inria-serif-regular'>El administrador de productos verifica y registra la recepción de productos solicitados y los almacena en el sistema.</h1>
                        </span>
                        <span className='flex gap-2'>
                          <h1 className="text-[#9492D2] text-[] text-2xl inria-serif-bold">Referencia cruzada: </h1>
                          <h1 className='text-[#B1BACC] text-[] text-2xl inria-serif-regular'>Tabla de Productos, Tabla de Recepciones</h1>
                         
                        </span>
                        <span className='flex flex-col gap-2'>
                          <h1 className="text-[#9492D2] text-[] text-2xl inria-serif-bold">Curso normal de eventos: </h1>
                          <ul className='text-[#B1BACC] text-[] text-2xl inria-serif-regular pl-5'>
                            <li>
                              <span className="text-[#6DAEC2] text-[] text-2xl inria-serif-bold">1.	Actor (Administrador de Productos):</span>
                              <span className="text-[#B1BACC] text-[] text-2xl inria-serif-regular">Accede al sistema y selecciona la opción "Recepción de Producto".</span>
                            </li>
                            <li>
                              <span className="text-[#6DAEC2] text-[] text-2xl inria-serif-bold">2.	Sistema:</span>
                              <span className="text-[#B1BACC] text-[] text-2xl inria-serif-regular">Muestra el formulario de recepción de producto.</span>
                            </li>
                            <li>
                              <span className="text-[#6DAEC2] text-[] text-2xl inria-serif-bold">3.	Actor (Administrador de Productos): </span>
                              <span className="text-[#B1BACC] text-[] text-2xl inria-serif-regular">Ingresa los datos de la recepción (fecha, proveedor, cantidad, etc.).</span>
                            </li>
                            <li>
                              <span className="text-[#6DAEC2] text-[] text-2xl inria-serif-bold">4.	Sistema:</span>
                              <span className="text-[#B1BACC] text-[] text-2xl inria-serif-regular">Valida los datos ingresados.</span>
                            </li>
                            <li>
                              <span className="text-[#6DAEC2] text-[] text-2xl inria-serif-bold">5.	Sistema: </span>
                              <span className="text-[#B1BACC] text-[] text-2xl inria-serif-regular">Incluye "Almacena Producto" (subcaso de uso).</span>
                            </li>
                            <li>
                              <span className="text-[#6DAEC2] text-[] text-2xl inria-serif-bold">6.	Sistema: </span>
                              <span className="text-[#B1BACC] text-[] text-2xl inria-serif-regular">Guarda la información de la recepción en la base de datos.</span>
                            </li>
                            <li>
                              <span className="text-[#6DAEC2] text-[] text-2xl inria-serif-bold">7.	Sistema:</span>
                              <span className="text-[#B1BACC] text-[] text-2xl inria-serif-regular">Notifica al administrador que la recepción ha sido registrada exitosamente.</span>
                            </li>

                          </ul>
                        </span>
                        <span className='flex flex-col gap-2'>
                          <h1 className="text-[#9492D2] text-[] text-2xl inria-serif-bold">Curso normal externos: </h1>
                          <ul className='text-[#B1BACC] text-[] text-2xl inria-serif-regular pl-5'>
                            <li>
                              <span className="text-[#6DAEC2] text-[] text-2xl inria-serif-bold">•	Datos incompletos/erróneos: </span>
                              <span className="text-[#B1BACC] text-[] text-2xl inria-serif-regular">Si los datos de la recepción son insuficientes o incorrectos, el sistema indica los errores y solicita corrección.</span>
                            </li>
                            <li>
                              <span className="text-[#6DAEC2] text-[] text-2xl inria-serif-bold">•	Producto dañado: </span>
                              <span className="text-[#B1BACC] text-[] text-2xl inria-serif-regular"></span>
                            </li>
                          </ul>
                        </span>
                        
                                       
                      </div>








                      <div className='bg-[#17294557] p-5'>
                        <span className='flex gap-2'>
                          <h1 className="text-[#9492D2] text-[] text-2xl inria-serif-bold">Nombre del Caso de uso: </h1>
                          <h1 className='text-[#B1BACC] text-[] text-2xl inria-serif-regular'>Realización de Informe</h1>
                        </span>
                        <span className='flex gap-2'>
                          <h1 className="text-[#9492D2] text-[] text-2xl inria-serif-bold">Actores: </h1>
                          <h1 className='text-[#B1BACC] text-[] text-2xl inria-serif-regular'>Administrador de Productos (Primario), Administrador de Finanzas (Primario)</h1>
                        </span>
                        <span className='flex gap-2'>
                          <h1 className="text-[#9492D2] text-[] text-2xl inria-serif-bold">Objetivo: </h1>
                          <h1 className='text-[#B1BACC] text-[] text-2xl inria-serif-regular'>Generar informes sobre el estado del inventario y las finanzas relacionadas con los productos de la biblioteca.</h1>
                        </span>
                        <span className='flex gap-2'>
                          <h1 className="text-[#9492D2] text-[] text-2xl inria-serif-bold">Resumen: </h1>
                          <h1 className='text-[#B1BACC] text-[] text-2xl inria-serif-regular'>Los administradores pueden generar informes detallados sobre los productos y su impacto financiero.</h1>
                        </span>
                        <span className='flex gap-2'>
                          <h1 className="text-[#9492D2] text-[] text-2xl inria-serif-bold">Referencia cruzada: </h1>
                          <h1 className='text-[#B1BACC] text-[] text-2xl inria-serif-regular'>Tabla de Productos, Tabla de Informes, Tabla de Finanzas</h1>
                         
                        </span>
                        <span className='flex flex-col gap-2'>
                          <h1 className="text-[#9492D2] text-[] text-2xl inria-serif-bold">Curso normal de eventos: </h1>
                          <ul className='text-[#B1BACC] text-[] text-2xl inria-serif-regular pl-5'>
                            <li>
                              <span className="text-[#6DAEC2] text-[] text-2xl inria-serif-bold">1.	Actor (Administrador de Productos/Finanzas): </span>
                              <span className="text-[#B1BACC] text-[] text-2xl inria-serif-regular">Accede al sistema y selecciona la opción "Realización de Informe".</span>
                            </li>
                            <li>
                              <span className="text-[#6DAEC2] text-[] text-2xl inria-serif-bold">2.	Sistema:</span>
                              <span className="text-[#B1BACC] text-[] text-2xl inria-serif-regular">Muestra el formulario de generación de informes.</span>
                            </li>
                            <li>
                              <span className="text-[#6DAEC2] text-[] text-2xl inria-serif-bold">3.	Actor (Administrador de Productos/Finanzas):</span>
                              <span className="text-[#B1BACC] text-[] text-2xl inria-serif-regular">Selecciona los parámetros del informe (rango de fechas, tipo de informe, etc.).</span>
                            </li>
                            <li>
                              <span className="text-[#6DAEC2] text-[] text-2xl inria-serif-bold">4.	Sistema: </span>
                              <span className="text-[#B1BACC] text-[] text-2xl inria-serif-regular">Valida los parámetros ingresados.</span>
                            </li>
                            <li>
                              <span className="text-[#6DAEC2] text-[] text-2xl inria-serif-bold">5.	Sistema:</span>
                              <span className="text-[#B1BACC] text-[] text-2xl inria-serif-regular">Genera el informe basado en los parámetros seleccionados.</span>
                            </li>
                            <li>
                              <span className="text-[#6DAEC2] text-[] text-2xl inria-serif-bold">6.	Sistema:</span>
                              <span className="text-[#B1BACC] text-[] text-2xl inria-serif-regular">Muestra el informe generado al administrador.</span>
                            </li>
                            <li>
                              <span className="text-[#6DAEC2] text-[] text-2xl inria-serif-bold">7.	Sistema: </span>
                              <span className="text-[#B1BACC] text-[] text-2xl inria-serif-regular">Permite la descarga o impresión del informe.</span>
                            </li>
                          </ul>
                        </span>
                        <span className='flex flex-col gap-2'>
                          <h1 className="text-[#9492D2] text-[] text-2xl inria-serif-bold">Curso normal externos: </h1>
                          <ul className='text-[#B1BACC] text-[] text-2xl inria-serif-regular pl-5'>
                            <li>
                              <span className="text-[#6DAEC2] text-[] text-2xl inria-serif-bold">•	Parámetros inválidos: </span>
                              <span className="text-[#B1BACC] text-[] text-2xl inria-serif-regular">Si los parámetros del informe son incorrectos o no se encuentran datos, el sistema notifica al administrador y sugiere correcciones.</span>
                            </li>
                            <li>
                              <span className="text-[#6DAEC2] text-[] text-2xl inria-serif-bold">•	Errores de cálculo: </span>
                              <span className="text-[#B1BACC] text-[] text-2xl inria-serif-regular">Si se detectan errores en el cálculo del informe, el sistema notifica al administrador y detalla el problema.</span>
                            </li>
                          </ul>
                        </span>
                        
                                       
                      </div>




                      <div className='bg-[#17294557] p-5'>
                        <span className='flex gap-2'>
                          <h1 className="text-[#9492D2] text-[] text-2xl inria-serif-bold">Nombre del Caso de uso: </h1>
                          <h1 className='text-[#B1BACC] text-[] text-2xl inria-serif-regular'>Gestión de Presupuesto</h1>
                        </span>
                        <span className='flex gap-2'>
                          <h1 className="text-[#9492D2] text-[] text-2xl inria-serif-bold">Actores: </h1>
                          <h1 className='text-[#B1BACC] text-[] text-2xl inria-serif-regular'>Administrador de Finanzas (Primario)</h1>
                        </span>
                        <span className='flex gap-2'>
                          <h1 className="text-[#9492D2] text-[] text-2xl inria-serif-bold">Objetivo: </h1>
                          <h1 className='text-[#B1BACC] text-[] text-2xl inria-serif-regular'>Administrar y actualizar el presupuesto asignado para la adquisición de productos de la biblioteca.</h1>
                        </span>
                        <span className='flex gap-2'>
                          <h1 className="text-[#9492D2] text-[] text-2xl inria-serif-bold">Resumen: </h1>
                          <h1 className='text-[#B1BACC] text-[] text-2xl inria-serif-regular'>El administrador de finanzas gestiona el presupuesto disponible para la compra de productos y realiza cambios necesarios en el capital asignado.</h1>
                        </span>
                        <span className='flex gap-2'>
                          <h1 className="text-[#9492D2] text-[] text-2xl inria-serif-bold">Referencia cruzada: </h1>
                          <h1 className='text-[#B1BACC] text-[] text-2xl inria-serif-regular'>Tabla de Finanzas, Tabla de Presupuesto</h1>
                         
                        </span>
                        <span className='flex flex-col gap-2'>
                          <h1 className="text-[#9492D2] text-[] text-2xl inria-serif-bold">Curso normal de eventos: </h1>
                          <ul className='text-[#B1BACC] text-[] text-2xl inria-serif-regular pl-5'>
                            <li>
                              <span className="text-[#6DAEC2] text-[] text-2xl inria-serif-bold">1.	Actor (Administrador de Finanzas): </span>
                              <span className="text-[#B1BACC] text-[] text-2xl inria-serif-regular">Accede al sistema y selecciona la opción "Gestión de Presupuesto".</span>
                            </li>
                            <li>
                              <span className="text-[#6DAEC2] text-[] text-2xl inria-serif-bold">2.	Sistema: </span>
                              <span className="text-[#B1BACC] text-[] text-2xl inria-serif-regular">Muestra el formulario de gestión de presupuesto.</span>
                            </li>
                            <li>
                              <span className="text-[#6DAEC2] text-[] text-2xl inria-serif-bold">3.	Actor (Administrador de Finanzas): </span>
                              <span className="text-[#B1BACC] text-[] text-2xl inria-serif-regular">Ingresa los detalles del presupuesto (monto, ajustes, etc.).</span>
                            </li>
                            <li>
                              <span className="text-[#6DAEC2] text-[] text-2xl inria-serif-bold">4.	Sistema:</span>
                              <span className="text-[#B1BACC] text-[] text-2xl inria-serif-regular">Valida los datos ingresados.</span>
                            </li>
                            <li>
                              <span className="text-[#6DAEC2] text-[] text-2xl inria-serif-bold">5.	Sistema: </span>
                              <span className="text-[#B1BACC] text-[] text-2xl inria-serif-regular">Incluye "Cambio de Capital" (subcaso de uso).</span>
                            </li>
                            <li>
                              <span className="text-[#6DAEC2] text-[] text-2xl inria-serif-bold">6.	Sistema: </span>
                              <span className="text-[#B1BACC] text-[] text-2xl inria-serif-regular">Actualiza el presupuesto en la base de datos.</span>
                            </li>
                            <li>
                              <span className="text-[#6DAEC2] text-[] text-2xl inria-serif-bold">7.	Sistema:</span>
                              <span className="text-[#B1BACC] text-[] text-2xl inria-serif-regular">Notifica al administrador que el presupuesto ha sido actualizado exitosamente.</span>
                            </li>
                          </ul>
                        </span>
                        <span className='flex flex-col gap-2'>
                          <h1 className="text-[#9492D2] text-[] text-2xl inria-serif-bold">Curso normal externos: </h1>
                          <ul className='text-[#B1BACC] text-[] text-2xl inria-serif-regular pl-5'>
                            <li>
                              <span className="text-[#6DAEC2] text-[] text-2xl inria-serif-bold">•	Datos incorrectos: </span>
                              <span className="text-[#B1BACC] text-[] text-2xl inria-serif-regular">Si los datos del presupuesto son insuficientes o incorrectos, el sistema indica los errores y solicita corrección.</span>
                            </li>
                            <li>
                              <span className="text-[#6DAEC2] text-[] text-2xl inria-serif-bold">•	Fondos insuficientes: </span>
                              <span className="text-[#B1BACC] text-[] text-2xl inria-serif-regular">Si los fondos disponibles son insuficientes para el ajuste solicitado, el sistema notifica al administrador y sugiere revisar el presupuesto.</span>
                            </li>

                          </ul>
                        </span>
                        
                                       
                      </div>
                     
                    </div>

                </div>
            </div>
        </div> 
    </div>
  )
}

export default POOcomprasExpandido
